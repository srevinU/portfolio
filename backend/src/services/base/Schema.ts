import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BaseSchemaT = HydratedDocument<BaseSchema>;

@Schema({ timestamps: true, versionKey: false, validateBeforeSave: true })
export class BaseSchema {
  _id?: Types.ObjectId;

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

export const AdminConfigSchema = SchemaFactory.createForClass(BaseSchema);
