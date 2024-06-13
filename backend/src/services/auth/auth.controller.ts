import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetAuthDto } from './dto/get-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() createAuthDto: GetAuthDto, @Res() response: Response) {
    await this.authService.login(createAuthDto, response);
    response.send({ status: 'OK', message: 'Login successful' });
  }
}
