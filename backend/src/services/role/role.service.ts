import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  create(createRoleDto: CreateRoleDto) {
    console.log(createRoleDto);
    return 'This action adds a new role';
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
