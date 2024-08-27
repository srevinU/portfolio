import { Mongoose, Types } from 'mongoose';
import Service from '../../src/services/service';
import { User, UserSchema } from '../../src/services/user/schemas/user.schema';
import { Role, RoleSchema } from '../../src/services/role/shemas/role.schema';
import {
  AdminConfig,
  AdminConfigSchema,
} from '../../src/services/admin/adminConfig/schemas/adminConfig.schema';
import {
  Techno,
  TechnoSchema,
} from '../../src/services/referencials/technos/schemas/techno.schema';
import {
  Language,
  LanguageSchema,
} from '../../src/services/referencials/languages/schemas/language.schema';
import { userAdmin } from '../payloads/user';
import { roleAdmin } from '../payloads/role';
import { adminConfigTest as AdminConfigPayload } from '../payloads/adminConfig';
import { Technos } from '../payloads/technos';
import { Languages } from '../payloads/languages';

export default class Seeder extends Service {
  private mongodb: Mongoose;

  constructor(mongodb: Mongoose) {
    super('Seeder');
    this.mongodb = mongodb;
  }

  private async generateUserSeeder(role: Types.ObjectId | null) {
    return this.mongodb
      .model(User.name, UserSchema)
      .where('email', userAdmin.email)
      .countDocuments({})
      .then((count) => {
        if (count === 0) {
          return this.mongodb.model(User.name, UserSchema).create({
            name: userAdmin.name,
            email: userAdmin.email,
            roles: [role],
            password: userAdmin.password,
          });
        }
        return null;
      })
      .then((data) => this.catcher(data));
  }

  private async generateRoleSeeder(): Promise<Role> {
    return this.mongodb
      .model(Role.name, RoleSchema)
      .findOne({ name: roleAdmin.name })
      .then((role) => {
        if (!role) {
          return this.mongodb.model(Role.name, RoleSchema).create({
            name: roleAdmin.name,
            description: roleAdmin.description,
            permissions: roleAdmin.permissions,
          });
        }
        return role;
      })
      .then((data) => this.catcher(data));
  }

  private async generateAdminConfigSeeder(): Promise<AdminConfig> {
    return this.mongodb
      .model(AdminConfig.name, AdminConfigSchema)
      .findOne({ name: AdminConfigPayload._id })
      .then((adminConfig) => {
        if (!adminConfig) {
          return this.mongodb
            .model(AdminConfig.name, AdminConfigSchema)
            .create(AdminConfigPayload);
        }
        return adminConfig;
      })
      .then((data) => this.catcher(data));
  }

  private async generateTechnosRefSeeder(): Promise<Array<Techno>> {
    return this.mongodb
      .model(Techno.name, TechnoSchema)
      .find()
      .then((technos) => {
        if (technos.length === 0) {
          return Promise.all(
            Technos.map((techno) =>
              this.mongodb.model(Techno.name, TechnoSchema).create(techno),
            ),
          );
        }
        return technos;
      })
      .then((data) => this.catcher(data));
  }

  private async generateLanguagesRefSeeder(): Promise<Array<Techno>> {
    return this.mongodb
      .model(Language.name, LanguageSchema)
      .find()
      .then((languages) => {
        if (languages.length === 0) {
          return Promise.all(
            Languages.map((language) =>
              this.mongodb
                .model(Language.name, LanguageSchema)
                .create(language),
            ),
          );
        }
        return languages;
      })
      .then((data) => this.catcher(data));
  }

  public async generateSeeders(): Promise<void> {
    this.generateRoleSeeder()
      .then((role) => this.generateUserSeeder(role._id))
      .then(() => this.generateAdminConfigSeeder())
      .then(() => this.generateTechnosRefSeeder())
      .then(() => this.generateLanguagesRefSeeder());
  }
}
