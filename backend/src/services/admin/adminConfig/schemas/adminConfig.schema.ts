import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import About from '../entities/about.entity';
import Home from '../entities/home.entity';
import Experience from '../entities/experience.entity';
import { ProjectConfig } from './projectConfig.schema';
import Project from '../entities/project.entity';
import { BaseSchema } from '../../../base/Schema';

export type AdminConfigSchemaT = HydratedDocument<AdminConfig>;

@Schema()
export class AdminConfig extends BaseSchema {
  @Prop({ required: true })
  home: Home;

  @Prop({ required: false })
  about: About;

  @Prop({
    required: true,
    type: Array<Project>,
    default: [],
  })
  projects: Array<ProjectConfig>;

  @Prop({ required: false })
  experiences: Array<Experience>;
}

export const AdminConfigSchema = SchemaFactory.createForClass(AdminConfig);
