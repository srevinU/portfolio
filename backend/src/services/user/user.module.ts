import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtStrategy } from '../../strategies/jwt.strategy';
import { RoleAdminStrategy } from '../../strategies/roles.strategy';
import { RoleService } from '../role/role.service';
import { RoleModule } from '../role/role.module';
import { Role, RoleSchema } from '../role/schemas/role.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
    ConfigModule,
    RoleModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, RoleService, RoleAdminStrategy],
  exports: [UserService],
})
export class UserModule {}
