import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from '../../../../base/Schema';

export type ProjectConfigSchemaT = HydratedDocument<HomeConfig>;

@Schema()
class languagesHomeConfig extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;
}

@Schema()
export class HomeConfig extends BaseSchema {
  @Prop({ required: true })
  FR: languagesHomeConfig;

  @Prop({ required: true })
  EN: languagesHomeConfig;
}

export const HomeConfigSchema = SchemaFactory.createForClass(HomeConfig);
