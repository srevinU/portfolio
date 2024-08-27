import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { Language, LanguageSchema } from './schemas/language.schema';
import { Role, RoleSchema } from '../../role/shemas/role.schema';
import { RoleModule } from '../../role/role.module';
import { UserModule } from '../../user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from '../../../strategies/jwt.strategy';
import { RoleService } from '../../role/role.service';
import { RoleAdminStrategy } from '../../../strategies/roles.strategy';

@Module({
  imports: [
    UserModule,
    RoleModule,
    MongooseModule.forFeature([
      { name: Language.name, schema: LanguageSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
  ],
  controllers: [LanguagesController],
  providers: [LanguagesService, JwtStrategy, RoleService, RoleAdminStrategy],
})
export class LanguagesModule {}
