import { INestApplication } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import databaseE2E from '../constants/dataBaseTest';
import getAppTest from '../app';
import * as cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import Seeder from './Seeder';
import { User, UserSchema } from '../../src/services/user/schemas/user.schema';
import { Role, RoleSchema } from '../../src/services/role/schemas/role.schema';
import {
  AdminConfig,
  AdminConfigSchema,
} from '../../src/services/admin/adminConfig/schemas/adminConfig.schema';
import {
  Language,
  LanguageSchema,
} from '../../src/services/referencials/languages/schemas/language.schema';
import {
  Techno,
  TechnoSchema,
} from '../../src/services/referencials/technos/schemas/techno.schema';

export class MongoTestApp {
  static MongoTestApp: MongoTestApp;
  app: INestApplication;
  mongodb: Mongoose = mongoose;
  Sedder = new Seeder(this.mongodb);
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

  private async cleanDb(): Promise<void> {
    try {
      await this.mongodb.model(Role.name, RoleSchema).deleteMany({});
      await this.mongodb.model(User.name, UserSchema).deleteMany({});
      await this.mongodb
        .model(AdminConfig.name, AdminConfigSchema)
        .deleteMany({});
      await this.mongodb.model(Language.name, LanguageSchema).deleteMany({});
      await this.mongodb.model(Techno.name, TechnoSchema).deleteMany({});
    } catch (error) {
      console.error('Error cleaning db', error);
    }
  }

  public async start(): Promise<void> {
    await this.generateDb();
    await this.cleanDb();
    await this.Sedder.generateSeeders();
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
