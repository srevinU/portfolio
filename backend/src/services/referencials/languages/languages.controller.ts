import { Controller, Get, Post, Body, UseGuards, Patch } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { JwtGuard } from '../../../guards/auth.guard';
import { RoleAdminGuard } from '../../../guards/role.guard';

@UseGuards(JwtGuard)
@UseGuards(RoleAdminGuard)
@Controller('api/referencials/languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  findAll() {
    return this.languagesService.findAll();
  }

  @Patch()
  update(@Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languagesService.update(updateLanguageDto);
  }
}
