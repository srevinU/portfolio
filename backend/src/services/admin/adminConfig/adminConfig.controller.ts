/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AdminConfigService } from './adminConfig.service';
import CreateAdminConfigDto from './dto/create-adminConfig.dto';
import UpdateAdminConfigDto from './dto/update-adminConfig.dto';
import { JwtGuard } from '../../../guards/auth.guard';
import { RoleAdminGuard } from '../../../guards/role.guard';
import { Types } from 'mongoose';

@UseGuards(JwtGuard)
@UseGuards(RoleAdminGuard)
@Controller('api/adminConfig')
export class AdminConfigController {
  constructor(private readonly AdminConfigService: AdminConfigService) {}

  @Post()
  create(@Body() createAdminConfigDto: CreateAdminConfigDto) {
    return this.AdminConfigService.create(createAdminConfigDto);
  }

  @Get(':id')
  findOne(@Param('id') id: Types.ObjectId) {
    return this.AdminConfigService.findOne(id);
  }

  @Patch()
  update(@Body() updateAdminConfigDto: UpdateAdminConfigDto) {
    return this.AdminConfigService.update(updateAdminConfigDto);
  }
}
