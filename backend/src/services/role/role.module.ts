import { Module, forwardRef } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './shemas/role.schema';
import { UserModule } from '../user/user.module';
import { RoleAdminStrategy } from '../../strategies/roles.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    forwardRef(() => UserModule),
    ConfigModule,
  ],
  controllers: [RoleController],
  providers: [RoleService, RoleAdminStrategy],
  exports: [RoleService],
})
export class RoleModule {}
