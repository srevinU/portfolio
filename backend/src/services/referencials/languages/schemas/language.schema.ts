import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
export type LanguageSchemaT = HydratedDocument<Language>;

@Schema({ timestamps: true, versionKey: false, validateBeforeSave: true })
export class Language {
  _id?: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  src: string;

  @Prop({ required: true, default: false })
  isActive?: boolean;

  // @Prop({ required: true })
  // createdBy: string;

  // @Prop({ required: true })
  // updatedBy: string;

  // @Prop({ required: true })
  // isDeleted: boolean;

  // @Prop({ required: true })
  // deletedAt: Date;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
