import { Mongoose, Types } from 'mongoose';
import { User, UserSchema } from '../src/services/user/schemas/user.schema';
import { Role, RoleSchema } from '../src/services/role/shemas/role.schema';

export default class Seeder {
  mongodb: Mongoose;
  constructor(mongodb: Mongoose) {
    this.mongodb = mongodb;
  }

  public async generateSeeders() {
    this.generateRoleSeed().then(async (role) => {
      await this.generateUserSeed(role._id);
    });
  }

  private async generateUserSeed(role: Types.ObjectId | null) {
    const userCount = await this.mongodb
      .model(User.name, UserSchema)
      .where('email', 'admintest@test.com')
      .countDocuments({});
    if (userCount === 0) {
      await this.mongodb.model(User.name, UserSchema).create({
        name: 'adminTest',
        email: 'admintest@test.com',
        roles: [role],
        password:
          '$2b$10$YARPaQ4556gTIjUJlxglQusKUvUpwrJbmm9pt1tPTHM29ID8/tUry', // adminTest
      });
    }
  }

  private async generateRoleSeed(): Promise<Role> {
    let role: Role = await this.mongodb
      .model(Role.name, RoleSchema)
      .findOne({ name: 'admin' });
    if (!role) {
      role = await this.mongodb.model(Role.name, RoleSchema).create({
        name: 'admin',
        description: 'admin role',
        permissions: ['create', 'read', 'update', 'delete'],
      });
    }
    return role;
  }
}
