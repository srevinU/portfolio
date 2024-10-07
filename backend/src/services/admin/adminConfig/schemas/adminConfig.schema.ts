import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProjectConfig } from './projects/projectConfig.schema';
import { BaseSchema } from '../../../base/Schema';
import { AboutConfig } from './about/aboutConfig.schema';
import { HomeConfig } from './home/homeConfig.schema';

export type AdminConfigSchemaT = HydratedDocument<AdminConfig>;

@Schema()
export class AdminConfig extends BaseSchema {
  @Prop({ required: true, type: HomeConfig })
  home: HomeConfig;

  @Prop({
    required: true,
    default: [],
  })
  projects: Array<ProjectConfig>;

  @Prop({ required: true, type: AboutConfig })
  about: AboutConfig;
}

export const AdminConfigSchema = SchemaFactory.createForClass(AdminConfig);
