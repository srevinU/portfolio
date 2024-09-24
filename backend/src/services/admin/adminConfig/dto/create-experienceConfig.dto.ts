import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { IsObjectId } from 'nestjs-object-id';

export default class ExperienceConfigDto {
  @IsNotEmpty()
  @IsObjectId()
  _id?: Types.ObjectId;

  @IsNotEmpty()
  @IsEnum(['active', 'inactive', 'in_progress'], {
    message: 'Status must be active, inactive or in_progress',
  })
  status: 'active' | 'inactive' | 'in_progress';

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  duration: string;

  @IsNotEmpty()
  @IsString()
  responsibilities: string;

  @IsNotEmpty()
  @IsString()
  start_date: string;

  @IsNotEmpty()
  @IsString()
  end_date: string;
}
