import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { GetUserDto } from '../user/dto/get-user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  private readonly saltRounds: string = '10';
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  private async generateHash(password: string): Promise<string> {
    console.log('SALT_ROUNDS', this.configService.get<string>('SALT_ROUNDS'));
    return await bcrypt.hash(
      password,
      parseInt(this.configService.get<string>('SALT_ROUNDS')),
    );
  }

  public async register(user: CreateUserDto): Promise<GetUserDto> {
    user.email = user.email.toLowerCase();
    const userExisting = await this.findOne(user.email);
    if (userExisting) throw new UnauthorizedException();
    user.password = await this.generateHash(user.password);
    return new this.userModel(user).save();
  }

  findOne(email: string) {
    const user = this.userModel.findOne({ email: email });
    return user;
  }
}
