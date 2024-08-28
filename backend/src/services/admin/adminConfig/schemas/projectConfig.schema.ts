import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Techno } from 'src/services/referencials/technos/schemas/techno.schema';

export type ProjectConfigSchemaT = HydratedDocument<ProjectConfig>;

@Schema({ timestamps: true, versionKey: false, validateBeforeSave: true })
export class ProjectConfig {
  _id?: Types.ObjectId;

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

export const ProjectConfigSchema = SchemaFactory.createForClass(ProjectConfig);
