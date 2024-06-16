import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { RoleAdminStrategy } from 'src/strategies/roles.strategy';
import { RoleService } from '../role/role.service';
import { RoleModule } from '../role/role.module';
import { Role, RoleSchema } from '../role/shemas/role.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
    RoleModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, RoleService, RoleAdminStrategy],
  exports: [UserService],
})
export class UserModule {}
