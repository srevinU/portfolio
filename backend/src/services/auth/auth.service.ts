import {
  Injectable,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { RedisService } from '../redis/redis.service';
import { GetAuthDto } from './dto/get-auth.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private redisService: RedisService,
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async isUserExisting(email: string): Promise<null | User> {
    let userExisting: null | User;
    try {
      userExisting = await this.userService.findOne(email);
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return userExisting;
  }

  private async generateToken(
    payload: object,
    secret: string,
  ): Promise<string> {
    let token: null | string;
    try {
      token = await this.jwtService.signAsync(payload, { secret: secret });
      payload['date'] = new Date();
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return token;
  }

  private getExpirationDate(expirationTime: string): Date {
    let expirationJwtDate: null | Date;
    try {
      expirationJwtDate = new Date();
      expirationJwtDate.setSeconds(
        expirationJwtDate.getSeconds() + Number(expirationTime),
      );
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Unauthorized, token generation failed');
    }
    return new Date(expirationJwtDate);
  }

  private setCookie(response: Response, accessToken: string): Response {
    const expirationJwtDate = this.getExpirationDate(
      this.configService.get<string>('JWT_EXPIRATION'),
    );

    response.cookie('Authentication', accessToken, {
      httpOnly: true,
      expires: expirationJwtDate,
    });

    return response;
  }

  public async login(user: GetAuthDto, response: Response): Promise<void> {
    if (!user.email || !user.password) {
      throw new UnauthorizedException(
        'Unauthorized, password or email is missing',
      );
    }

    const currentUser = await this.isUserExisting(user.email);
    if (!currentUser) {
      throw new UnauthorizedException('Unauthorized, user not found');
    }

    const isPasswordValid = await bcrypt.compare(
      user.password,
      currentUser.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Unauthorized, password is invalid');
    }

    const payload = {
      sub: currentUser._id,
      email: currentUser.email,
      lastName: currentUser.name,
    };

    const jwt = await this.generateToken(
      payload,
      this.configService.get<string>('JWT_SECRET'),
    );
    this.redisService.add(currentUser.email, jwt);
    this.setCookie(response, jwt);
  }
}
