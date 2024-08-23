import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class LanguageAboutDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class AboutConfigDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LanguageAboutDto)
  EN: LanguageAboutDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LanguageAboutDto)
  FR: LanguageAboutDto;
}
