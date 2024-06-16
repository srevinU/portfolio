import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as ShemaRef } from 'mongoose';

export type RoleSchemaT = HydratedDocument<Role>;

type RolePermissions = 'create' | 'read' | 'update' | 'delete';

@Schema()
export class Role {
  @Prop({
    type: ShemaRef.Types.ObjectId,
  })
  id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  permissions: Array<RolePermissions>;

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

export const RoleSchema = SchemaFactory.createForClass(Role);
