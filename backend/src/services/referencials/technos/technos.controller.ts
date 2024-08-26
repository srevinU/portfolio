import { Controller, Get, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { TechnosService } from './technos.service';
import { CreateTechnoDto } from './dto/create-techno.dto';
import { UpdateTechnoDto } from './dto/update-techno.dto';
import { JwtGuard } from '../../../guards/auth.guard';
import { RoleAdminGuard } from '../../../guards/role.guard';

@UseGuards(JwtGuard)
@UseGuards(RoleAdminGuard)
@Controller('api/referencials/technos')
export class TechnosController {
  constructor(private readonly technosService: TechnosService) {}

  @Post()
  create(@Body() createTechnoDto: CreateTechnoDto) {
    return this.technosService.create(createTechnoDto);
  }

  @Get()
  findAll() {
    return this.technosService.findAll();
  }

  @Patch()
  update(@Body() updateTechnoDto: UpdateTechnoDto) {
    return this.technosService.update(updateTechnoDto);
  }
}
