import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/portfolio'),
    UserModule,
    AuthModule,
    RoleModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
