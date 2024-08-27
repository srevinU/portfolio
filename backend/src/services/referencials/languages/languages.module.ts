import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { Language, LanguageSchema } from './schemas/language.schema';
import { Role, RoleSchema } from 'src/services/role/shemas/role.schema';
import { RoleModule } from 'src/services/role/role.module';
import { UserModule } from 'src/services/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { RoleService } from 'src/services/role/role.service';
import { RoleAdminStrategy } from 'src/strategies/roles.strategy';

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
