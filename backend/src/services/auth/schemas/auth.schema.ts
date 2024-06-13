import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as ShemaRef } from 'mongoose';

export type AuthSchemaT = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop({
    required: true,
    unique: true,
    type: ShemaRef.Types.ObjectId,
    ref: 'User',
  })
  userId: string;

  @Prop({ required: true, unique: true })
  refreshToken: string;

  //   @Prop({ required: true })
  //   expiresAt: Date;

  @Prop({ required: false, default: Date.now() })
  createdAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
