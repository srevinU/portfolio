import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './shemas/role.schema';
import { Model, Types } from 'mongoose';
import Service from '../Service';

@Injectable()
export class RoleService extends Service {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {
    super(Role.name);
  }

  public async create(createRoleDto: CreateRoleDto): Promise<null | Role> {
    return await new this.roleModel(createRoleDto)
      .save()
      .then((result) => this.catcher(result));
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

  public async remove(name: string): Promise<any> {
    return this.roleModel
      .deleteOne()
      .where('name')
      .equals(name)
      .then((result) => this.catcher(result));
  }
}
