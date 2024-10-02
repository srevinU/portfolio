import { Controller, Post, Body, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetAuthDto } from './dto/get-auth.dto';
import { Response, Request } from 'express';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() createAuthDto: GetAuthDto, @Res() response: Response) {
    await this.authService.login(createAuthDto, response);
    response.send({ status: 'OK', message: 'Login successful' });
  }

  @Post('isLogged')
  async isLogged(@Req() request: Request) {
    return await this.authService.isUserLoggedIn(request);
  }
}
