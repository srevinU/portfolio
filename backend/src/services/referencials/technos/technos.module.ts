import { Module } from '@nestjs/common';
import { TechnosService } from './technos.service';
import { TechnosController } from './technos.controller';
import { UserModule } from '../../user/user.module';
import { RoleModule } from '../../role/role.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Techno } from './entities/techno.entity';
import { TechnoSchema } from './schemas/techno.schema';
import { Role } from '../../role/entities/role.entity';
import { RoleSchema } from '../../role/schemas/role.schema';
import { JwtStrategy } from '../../../strategies/jwt.strategy';
import { RoleService } from '../../role/role.service';
import { RoleAdminStrategy } from '../../../strategies/roles.strategy';

@Module({
  imports: [
    UserModule,
    RoleModule,
    MongooseModule.forFeature([
      { name: Techno.name, schema: TechnoSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
  ],
  controllers: [TechnosController],
  providers: [TechnosService, JwtStrategy, RoleService, RoleAdminStrategy],
  exports: [TechnosService],
})
export class TechnosModule {}
