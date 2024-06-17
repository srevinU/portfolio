import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtGuard } from '../../guards/auth.guard';
import { RoleAdminGuard } from '../../guards/role.guard';

@UseGuards(JwtGuard)
@UseGuards(RoleAdminGuard)
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }
}
