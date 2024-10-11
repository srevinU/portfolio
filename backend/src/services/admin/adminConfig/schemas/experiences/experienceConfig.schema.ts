import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from '../../../../base/Schema';

export type ExperienceConfigSchemaT = HydratedDocument<ExperiencesConfig>;

class Jobs extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  responsibilities: string;
}

@Schema()
export class ExperiencesConfig extends BaseSchema {
  @Prop({ required: true, type: Object })
  title: {
    EN: string;
    FR: string;
  };

  @Prop({ required: true, type: Object })
  jobs: {
    EN: Array<Jobs>;
    FR: Array<Jobs>;
  };
}

export const HomeConfigSchema = SchemaFactory.createForClass(ExperiencesConfig);
