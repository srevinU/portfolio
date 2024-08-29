import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from '../../../base/Schema';
import { Techno } from 'src/services/referencials/technos/schemas/techno.schema';

export type ProjectConfigSchemaT = HydratedDocument<ProjectConfig>;

@Schema()
export class ProjectConfig extends BaseSchema {
  @Prop({ required: true })
  src: string;

  @Prop({ required: true, type: Types.ObjectId, ref: Techno.name })
  technos: Array<Types.ObjectId>;

  @Prop({ required: true })
  href: string;

  @Prop({ required: true })
  FR: object;

  @Prop({ required: true })
  EN: object;

  @Prop({ required: true })
  status: string;
}

export const ProjectConfigSchema = SchemaFactory.createForClass(ProjectConfig);
