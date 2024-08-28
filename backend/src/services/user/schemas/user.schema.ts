import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Role } from '../../role/schemas/role.schema';

export type UserSchemaT = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false, validateBeforeSave: true })
export class User {
  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, type: Types.ObjectId, ref: Role.name })
  roles: Array<Types.ObjectId>;

  @Prop({ required: false, default: Date.now() })
  createdAt: Date;

  // @Prop({ required: true })
  // updatedAt: Date;

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

export const UserSchema = SchemaFactory.createForClass(User);
