import { INestApplication } from '@nestjs/common';
import { Mongoose, Types } from 'mongoose';
import { User, UserSchema } from '../src/services/user/schemas/user.schema';
import { Role, RoleSchema } from '../src/services/role/shemas/role.schema';
import databaseE2E from './constants/dataBaseTest';
import getAppTest from './app';
import * as cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

export class MongoTestApp {
  static MongoTestApp: MongoTestApp;
  app: INestApplication;
  mongodb: Mongoose = mongoose;
  constructor() {}

  public static getInstance(): MongoTestApp {
    if (!this.MongoTestApp) {
      this.MongoTestApp = new MongoTestApp();
    }
    return this.MongoTestApp;
  }

  private async generateDb(): Promise<void> {
    try {
      await this.mongodb.connect(databaseE2E);
    } catch (error) {
      console.error('Error connecting to database', error);
    }
  }

  private async generateApp(): Promise<void> {
    try {
      this.app = await getAppTest(databaseE2E);
      this.app.use(cookieParser());
      this.app.init();
    } catch (error) {
      console.error('Error creating app', error);
    }
  }

  private async generateUserSeed(role: Types.ObjectId | null) {
    try {
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
    } catch (error) {
      console.error('Error creating user seed', error);
    }
  }

  private async generateRoleSeed(): Promise<Role> {
    let role: Role;
    try {
      role = await this.mongodb
        .model(Role.name, RoleSchema)
        .findOne({ name: 'admin' });
      if (!role) {
        role = await this.mongodb.model(Role.name, RoleSchema).create({
          name: 'admin',
          description: 'admin role',
          permissions: ['create', 'read', 'update', 'delete'],
        });
      }
    } catch (error) {
      console.error('Error creating role seed', error);
    }
    return role;
  }

  private async cleanDb(): Promise<void> {
    try {
      await this.mongodb.model(Role.name, RoleSchema).deleteMany({});
      await this.mongodb.model(User.name, UserSchema).deleteMany({});
    } catch (error) {
      console.error('Error cleaning db', error);
    }
  }

  private async generateSeeders(): Promise<void> {
    this.generateRoleSeed().then(async (role) => {
      await this.generateUserSeed(role._id);
    });
  }

  public async start(): Promise<void> {
    await this.generateDb();
    await this.cleanDb();
    await this.generateSeeders();
    await this.generateApp();
  }

  private async stopApp(): Promise<void> {
    try {
      await this.app.close();
    } catch (error) {
      console.error('Error closing app', error);
    }
  }

  private async stopDb(): Promise<void> {
    try {
      await this.mongodb.disconnect();
    } catch (error) {
      console.error('Error closing db');
    }
  }

  public async stop(): Promise<void> {
    await this.stopApp();
    await this.stopDb();
  }
}
