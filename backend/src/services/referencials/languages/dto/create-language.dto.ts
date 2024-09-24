import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateLanguageDto {
  @IsOptional()
  _id?: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  src: string;

  @IsBoolean()
  active: boolean;
}
