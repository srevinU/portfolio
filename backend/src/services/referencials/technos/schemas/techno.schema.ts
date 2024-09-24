import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
export type TechnoSchemaT = HydratedDocument<Techno>;

@Schema({ timestamps: true, versionKey: false, validateBeforeSave: true })
export class Techno {
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

export const TechnoSchema = SchemaFactory.createForClass(Techno);
