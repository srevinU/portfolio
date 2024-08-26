import { Module } from '@nestjs/common';
import { TechnosService } from './technos.service';
import { TechnosController } from './technos.controller';
import { UserModule } from 'src/services/user/user.module';
import { RoleModule } from 'src/services/role/role.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Techno } from './entities/techno.entity';
import { TechnoSchema } from './schemas/techno.schema';
import { Role } from 'src/services/role/entities/role.entity';
import { RoleSchema } from 'src/services/role/shemas/role.schema';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { RoleService } from 'src/services/role/role.service';
import { RoleAdminStrategy } from 'src/strategies/roles.strategy';

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
