import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    return this.userService.findByEmail(email);
  }

  private async generateToken(
    payload: object,
    secret: string,
  ): Promise<string> {
    return this.jwtService.signAsync(payload, { secret: secret });
  }

  private getExpirationDate(expirationTime: string): Date {
    const expirationJwtDate = new Date();
    expirationJwtDate.setSeconds(
      expirationJwtDate.getSeconds() + Number(expirationTime),
    );
    return expirationJwtDate;
  }

  private setCookie(response: Response, accessToken: string): Response {
    const expirationJwtDate = this.getExpirationDate(
      this.configService.get<string>('JWT_EXPIRATION'),
    );
    return response.cookie('Authentication', accessToken, {
      httpOnly: true,
      expires: expirationJwtDate,
    });
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
