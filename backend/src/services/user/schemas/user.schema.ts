import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Role } from '../../role/schemas/role.schema';
import { BaseSchema } from '../../base/Schema';

export type UserSchemaT = HydratedDocument<User>;

@Schema()
export class User extends BaseSchema {
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
}

export const UserSchema = SchemaFactory.createForClass(User);
