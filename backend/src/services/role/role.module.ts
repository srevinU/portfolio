import { Module, forwardRef } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './shemas/role.schema';
import { UserModule } from '../user/user.module';
import { RoleAdminStrategy } from 'src/strategies/roles.strategy';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { User, UserSchema } from '../user/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Role.name, schema: RoleSchema },
      { name: User.name, schema: UserSchema },
    ]),
    forwardRef(() => UserModule),
  ],
  controllers: [RoleController],
  providers: [RoleService, JwtStrategy, RoleAdminStrategy],
  exports: [RoleService],
})
export class RoleModule {}
