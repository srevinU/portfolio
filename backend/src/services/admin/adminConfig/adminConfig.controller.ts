/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { AdminConfigService } from './adminConfig.service';
import CreateAdminConfigDto from './dto/create-adminConfig.dto';
import UpdateAdminConfigDto from './dto/update-adminConfig.dto';
import { JwtGuard } from '../../../guards/auth.guard';
import { RoleAdminGuard } from '../../../guards/role.guard';
import { Types } from 'mongoose';

@UseGuards(RoleAdminGuard)
@UseGuards(JwtGuard)
@Controller('api/adminConfig')
export class AdminConfigController {
  constructor(private readonly AdminConfigService: AdminConfigService) {}

  @Get(':id')
  @SetMetadata('skipGuards', true)
  findOne(@Param('id') id: Types.ObjectId) {
    return this.AdminConfigService.findOne(id);
  }

  @Post()
  create(@Body() createAdminConfigDto: CreateAdminConfigDto) {
    return this.AdminConfigService.create(createAdminConfigDto);
  }

  @Patch()
  @SetMetadata('skipGuards', true)
  update(@Body() updateAdminConfigDto: UpdateAdminConfigDto) {
    return this.AdminConfigService.update(updateAdminConfigDto);
  }
}
