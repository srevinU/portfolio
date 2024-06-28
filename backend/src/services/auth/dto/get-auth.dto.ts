import {
  IsEmail,
  IsNotEmpty,
  IsString,
  // IsStrongPassword,
} from 'class-validator';

export class GetAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  // @IsStrongPassword()
  password: string;
}
