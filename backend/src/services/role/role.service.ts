import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './shemas/role.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  public async create(createRoleDto: CreateRoleDto): Promise<null | Role> {
    let role: null | Role;
    try {
      role = await new this.roleModel(createRoleDto).save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return role;
  }

  private async getAdminRoleId(): Promise<null | Types.ObjectId> {
    let adminRoleId: null | Types.ObjectId;
    try {
      adminRoleId = (
        await this.roleModel.findOne().where('name').equals('admin')
      )._id;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return adminRoleId;
  }

  public async validateRoleAdmin(
    roles: Array<null | Types.ObjectId>,
  ): Promise<boolean> {
    let hasRoleAdmin: boolean;
    try {
      const adminRoleId = await this.getAdminRoleId();
      hasRoleAdmin = roles.some((role) => role.equals(adminRoleId));
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return hasRoleAdmin;
  }

  public async remove(name: string): Promise<any> {
    let removed: null | any;
    try {
      removed = await this.roleModel.deleteOne().where('name').equals(name);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return removed;
  }
}
