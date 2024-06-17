import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../src/services/user/user.module';
import { AuthModule } from '../src/services/auth/auth.module';
import { User, UserSchema } from '../src/services/user/schemas/user.schema';

export const getAppTest = async (
  databaseE2E: string,
): Promise<INestApplication> => {
  const imports = [
    MongooseModule.forRoot(databaseE2E),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    AuthModule,
  ];
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
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
