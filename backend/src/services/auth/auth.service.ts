import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './schemas/auth.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { GetUserDto } from '../user/dto/get-user.dto';
import { UserService } from '../user/user.service';
import { RedisService } from '../redis/redis.service';
import { GetAuthDto } from './dto/get-auth.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  // Following properties have to be added to env file.
  private readonly saltRounds: string = '10';
  private readonly JWT_SECRET: string = 'secret';
  private readonly JWT_EXPIRATION: string = '3600'; // 1 hour

  constructor(
    @InjectModel(Auth.name) private authModel: Model<Auth>,
    private userService: UserService,
    private jwtService: JwtService,
    private redisService: RedisService,
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
    const expirationJwtDate = this.getExpirationDate(this.JWT_EXPIRATION);

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

    const jwt = await this.generateToken(payload, this.JWT_SECRET);
    this.redisService.add(currentUser.email, jwt);
    this.setCookie(response, jwt);
  }
}
