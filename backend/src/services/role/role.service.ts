import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './shemas/role.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  public async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return await new this.roleModel(createRoleDto).save();
  }

  private async getAdminRoleId(): Promise<Types.ObjectId> {
    return (await this.roleModel.findOne().where('name').equals('admin'))._id;
  }

  public async validateRoleAdmin(
    roles: Array<Types.ObjectId>,
  ): Promise<boolean> {
    const adminRoleId = await this.getAdminRoleId();
    return roles.some((role) => role.equals(adminRoleId));
  }

  public async remove(name: string): Promise<any> {
    return await this.roleModel.deleteOne().where('name').equals(name);
  }
}
