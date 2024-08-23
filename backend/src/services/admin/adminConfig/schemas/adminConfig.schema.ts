import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import About from '../entities/about.entity';
import Home from '../entities/home.entity';
import Project from '../entities/project.entity';
import Experience from '../entities/experience.entity';

export type AdminConfigSchemaT = HydratedDocument<AdminConfig>;

@Schema()
export class AdminConfig {
  _id: Types.ObjectId;

  @Prop({ required: true })
  home: Home;

  @Prop({ required: false })
  about: About;

  @Prop({ required: true })
  projects: Array<Project>;

  @Prop({ required: false })
  experiences: Array<Experience>;

  // @Prop({ required: false, default: Date.now() })
  // createdAt: Date;

  // @Prop({ required: true })
  // updatedAt: Date;

  // @Prop({ required: true })
  // createdBy: string;

  // @Prop({ required: true })
  // updatedBy: string;

  // @Prop({ required: true })
  // isActive: boolean;

  // @Prop({ required: true })
  // isDeleted: boolean;

  // @Prop({ required: true })
  // deletedAt: Date;
}

export const AdminConfigSchema = SchemaFactory.createForClass(AdminConfig);
