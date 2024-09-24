import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';
import { IsObjectId } from 'nestjs-object-id';

class ProjectConfigLanguageDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  label_link: string;
}

export default class ProjectConfigDto {
  @IsNotEmpty()
  @IsObjectId()
  _id?: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  src: string;

  @IsArray()
  technos: Array<Types.ObjectId>;

  @IsNotEmpty()
  @IsString()
  href: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProjectConfigLanguageDto)
  FR: ProjectConfigLanguageDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProjectConfigLanguageDto)
  EN: ProjectConfigLanguageDto;

  @IsNotEmpty()
  @IsString()
  status: string;
}
