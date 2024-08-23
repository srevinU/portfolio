import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { HomeConfigDto } from './create-homeConfig.dto';
import { AboutConfigDto } from './create-aboutConfig.dto';
import ProjectConfigDto from './create-projectConfig.dto';
import ExperienceConfigDto from './create-experienceConfig.dto';

export default class CreateAdminConfigDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => HomeConfigDto)
  home: HomeConfigDto;

  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AboutConfigDto)
  about: AboutConfigDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectConfigDto)
  projects: Array<ProjectConfigDto>;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExperienceConfigDto)
  experiences: Array<ExperienceConfigDto>;
}
