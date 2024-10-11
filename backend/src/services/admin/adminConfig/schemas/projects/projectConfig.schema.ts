import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from '../../../../base/Schema';
import { Techno } from 'src/services/referencials/technos/schemas/techno.schema';

export type ProjectConfigSchemaT = HydratedDocument<ProjectConfig>;

@Schema()
class languagesProjectConfig extends BaseSchema {
  @Prop({ required: true })
  label_link: string;

  @Prop({ required: true })
  title: string;
}

@Schema()
export class ProjectConfig extends BaseSchema {
  @Prop({ required: true })
  src: string;

  @Prop({ required: true, type: Types.ObjectId, ref: Techno.name })
  technos: Array<Types.ObjectId>;

  @Prop({ required: true })
  href: string;

  @Prop({ required: true })
  FR: languagesProjectConfig;

  @Prop({ required: true })
  EN: languagesProjectConfig;

  @Prop({ required: true })
  status: string;
}

export const ProjectConfigSchema = SchemaFactory.createForClass(ProjectConfig);
