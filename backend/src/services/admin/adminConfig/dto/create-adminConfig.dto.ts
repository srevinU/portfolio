import {
  IsArray,
  // IsArray,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { HomeConfigDto } from './home/create-homeConfig.dto';
import { AboutConfigDto } from './about/create-aboutConfig.dto';
import ProjectConfigDto from './projects/create-projectConfig.dto';
import ExperienceConfigDto from './experiences/create-experienceConfig.dto';
import { Types } from 'mongoose';

export default class CreateAdminConfigDto {
  @IsOptional()
  _id?: Types.ObjectId;

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

  @ValidateNested({ each: true })
  @Type(() => ExperienceConfigDto)
  experiences: Array<ExperienceConfigDto>;
}
