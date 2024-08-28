import { Module } from '@nestjs/common';
import { AdminConfigService } from './adminConfig.service';
import { AdminConfigController } from './adminConfig.controller';
import AdminConfig from './entities/adminConfig.entity';
import { AdminConfigSchema } from './schemas/adminConfig.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from '../../../strategies/jwt.strategy';
import { RoleService } from '../../role/role.service';
import { RoleAdminStrategy } from '../../../strategies/roles.strategy';
import { UserModule } from '../../user/user.module';
import { RoleModule } from '../../role/role.module';
import { ConfigModule } from '@nestjs/config';
import { Role, RoleSchema } from '../../role/schemas/role.schema';

@Module({
  imports: [
    UserModule,
    RoleModule,
    ConfigModule,
    MongooseModule.forFeature([
      { name: AdminConfig.name, schema: AdminConfigSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
  ],
  controllers: [AdminConfigController],
  providers: [AdminConfigService, JwtStrategy, RoleService, RoleAdminStrategy],
  exports: [AdminConfigService],
})
export class AdminConfigModule {}
