import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './services/user/user.module';
import { AuthModule } from './services/auth/auth.module';
// import { RoleModule } from './services/role/role.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      ignoreEnvFile: false,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    // RoleModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
