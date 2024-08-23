import { Module } from '@nestjs/common';
import { AdminConfigService } from './adminConfig.service';
import { AdminConfigController } from './adminConfig.controller';
import AdminConfig from './entities/adminConfig.entity';
import { AdminConfigSchema } from './schemas/adminConfig.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { RoleService } from 'src/services/role/role.service';
import { RoleAdminStrategy } from 'src/strategies/roles.strategy';
import { UserModule } from 'src/services/user/user.module';
import { RoleModule } from 'src/services/role/role.module';
import { ConfigModule } from '@nestjs/config';
import { Role, RoleSchema } from 'src/services/role/shemas/role.schema';

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
