import { Mongoose, Types } from 'mongoose';
import { User, UserSchema } from '../../src/services/user/schemas/user.schema';
import { Role, RoleSchema } from '../../src/services/role/shemas/role.schema';
import {
  AdminConfig,
  AdminConfigSchema,
} from '../../src/services/admin/adminConfig/schemas/adminConfig.schema';
import { userAdmin } from '../payloads/user';
import { roleAdmin } from '../payloads/role';
import { adminConfigTest as AdminConfigPayload } from '../payloads/adminConfig';

export default class Seeder {
  private mongodb: Mongoose;

  constructor(mongodb: Mongoose) {
    this.mongodb = mongodb;
  }

  private async generateUserSeeder(role: Types.ObjectId | null) {
    try {
      const userCount = await this.mongodb
        .model(User.name, UserSchema)
        .where('email', userAdmin.email)
        .countDocuments({});
      if (userCount === 0) {
        await this.mongodb.model(User.name, UserSchema).create({
          name: userAdmin.name,
          email: userAdmin.email,
          roles: [role],
          password: userAdmin.password,
        });
      }
    } catch (error) {
      console.error('Error creating user seeder', error);
    }
  }

  private async generateRoleSeeder(): Promise<Role> {
    let role: Role;
    try {
      role = await this.mongodb
        .model(Role.name, RoleSchema)
        .findOne({ name: roleAdmin.name });
      if (!role) {
        role = await this.mongodb.model(Role.name, RoleSchema).create({
          name: roleAdmin.name,
          description: roleAdmin.description,
          permissions: roleAdmin.permissions,
        });
      }
    } catch (error) {
      console.error('Error creating role seeder', error);
    }
    return role;
  }

  private async generateAdminConfigSeeder(): Promise<AdminConfig> {
    let adminConfig: AdminConfig;
    try {
      adminConfig = await this.mongodb
        .model(AdminConfig.name, AdminConfigSchema)
        .findOne({ name: AdminConfigPayload._id });
      if (!adminConfig) {
        adminConfig = await this.mongodb
          .model(AdminConfig.name, AdminConfigSchema)
          .create(AdminConfigPayload);
      }
    } catch (error) {
      console.error('Error creating admin configuration seeder', error);
    }
    return adminConfig;
  }

  public async generateSeeders(): Promise<void> {
    this.generateRoleSeeder()
      .then((role) => this.generateUserSeeder(role._id))
      .then(() => this.generateAdminConfigSeeder());
  }
}
