import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../src/services/user/user.module';
import { AuthModule } from '../src/services/auth/auth.module';
import { User, UserSchema } from '../src/services/user/schemas/user.schema';
import { AdminConfigModule } from '../src/services/admin/adminConfig/adminConfig.module';
import { TechnosModule } from '../src/services/referencials/technos/technos.module';
import { LanguagesModule } from '../src/services/referencials/languages/languages.module';

export const getAppTest = async (
  databaseE2E: string,
): Promise<INestApplication> => {
  const imports = [
    MongooseModule.forRoot(databaseE2E),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    AuthModule,
    AdminConfigModule,
    TechnosModule,
    LanguagesModule,
  ];
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      ConfigModule.forFeature(async () => ({
        REDIS_HOST: 'localhost',
        REDIS_PORT: '6379',
        JWT_SECRET: '308126f3-2055-468a-b381-ee9c5c730e63',
        JWT_EXPIRATION: '3600',
      })),
      JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: '60s' },
        }),
        inject: [ConfigService],
      }),
      ...imports,
    ],
  }).compile();
  return moduleFixture.createNestApplication();
};

export default getAppTest;
