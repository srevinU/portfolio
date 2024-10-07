import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseSchema } from '../../../../base/Schema';
import { Techno } from '../../../../../services/referencials/technos/schemas/techno.schema';
import { Language } from '../../../../../services/referencials/languages/schemas/language.schema';

export type AboutConfigSchemaT = HydratedDocument<AboutConfig>;

@Schema()
class languagesAboutConfig extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;
}

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
class experienceAboutConfig extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  jobs: Jobs;
}

@Schema()
class experiencesAboutConfig extends BaseSchema {
  @Prop({ required: true })
  EN: experienceAboutConfig;

  @Prop({ required: true })
  FR: experienceAboutConfig;
}

@Schema()
export class AboutConfig extends BaseSchema {
  @Prop({ required: true })
  FR: languagesAboutConfig;

  @Prop({ required: true })
  EN: languagesAboutConfig;

  @Prop({ required: true })
  experiences: experiencesAboutConfig;

  @Prop({ required: true, type: Types.ObjectId, ref: Techno.name })
  technos: Array<Types.ObjectId>;

  @Prop({ required: true, type: Types.ObjectId, ref: Language.name })
  languages: Array<Types.ObjectId>;

  @Prop({ required: true })
  disciplines: Array<string>;
}

export const HomeConfigSchema = SchemaFactory.createForClass(AboutConfig);
