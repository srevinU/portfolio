import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from '../../base/Schema';

export type RoleSchemaT = HydratedDocument<Role>;

export type RolePermissions = 'create' | 'read' | 'update' | 'delete';

@Schema()
export class Role extends BaseSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  permissions: Array<RolePermissions>;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
