import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { GetUserDto } from '../user/dto/get-user.dto';
import { UserService } from '../user/user.service';
import { RedisService } from '../redis/redis.service';
import { GetAuthDto } from './dto/get-auth.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private redisService: RedisService,
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async isUserExisting(email: string): Promise<GetUserDto | null> {
    return await this.userService.findOne(email);
  }

  private async generateToken(
    payload: object,
    secret: string,
  ): Promise<string> {
    payload['date'] = new Date();
    return await this.jwtService.signAsync(payload, { secret: secret });
  }

  private getExpirationDate(expirationTime: string): Date {
    const expires = new Date();
    const expiresDate = expires.setSeconds(
      expires.getSeconds() + Number(expirationTime),
    );
    return new Date(expiresDate);
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
      throw new UnauthorizedException();
    }

    const currentUser = await this.isUserExisting(user.email);
    if (!currentUser) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(
      user.password,
      currentUser.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: currentUser.id,
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
