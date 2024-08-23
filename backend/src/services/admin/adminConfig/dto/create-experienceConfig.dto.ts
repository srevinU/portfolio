import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export default class ExperienceConfigDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

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
