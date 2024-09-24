import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './schemas/role.schema';
import { Model, Types } from 'mongoose';
import Service from '../base/Service';

@Injectable()
export class RoleService extends Service {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {
    super(roleModel, new Role(), new CreateRoleDto(), null);
  }

  private async getAdminRoleId(): Promise<null | Types.ObjectId> {
    return await this.roleModel
      .findOne()
      .where('name')
      .equals('admin')
      .then((role) => this.catcher(role._id));
  }

  public async validateRoleAdmin(
    roles: Array<null | Types.ObjectId>,
  ): Promise<boolean> {
    return this.getAdminRoleId()
      .then((adminRoleId) => roles.some((role) => role.equals(adminRoleId)))
      .then((result) => this.catcher(result));
  }
}
