import { IsNotEmpty, IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { IsObjectId } from 'nestjs-object-id';

export default class ExperienceConfigDto {
  @IsObjectId()
  @IsOptional()
  _id?: Types.ObjectId;

  // @IsNotEmpty()
  // @IsEnum(['active', 'inactive', 'in_progress'], {
  //   message: 'Status must be active, inactive or in_progress',
  // })
  // status: 'active' | 'inactive' | 'in_progress';

  @IsNotEmpty()
  title: {
    FR: string;
    EN: string;
  };

  @IsNotEmpty()
  jobs: {
    FR: {
      title: string;
      company: string;
      duration: string;
      responsibilities: string;
    };
    EN: {
      title: string;
      company: string;
      duration: string;
      responsibilities: string;
    };
  };
}
