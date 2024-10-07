import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: [
    //   'http://localhost:3000',
    //   'http://portfolio.localhost/',
    //   'https://preprod-1ebc4ba3.cedricsegura.dev/',
    //   'https://cedricsegura.dev/',
    // ],
    origin: true,
    credentials: false,
    allowedHeaders: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  await app.listen(8000);
}
bootstrap();
