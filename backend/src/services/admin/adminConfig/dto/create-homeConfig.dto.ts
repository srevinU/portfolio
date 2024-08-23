import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class HomeLanguageDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  subtitle: string;
}

export class HomeConfigDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => HomeLanguageDto)
  EN: HomeLanguageDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => HomeLanguageDto)
  FR: HomeLanguageDto;
}
