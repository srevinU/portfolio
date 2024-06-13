import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { GetUserDto } from '../user/dto/get-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly saltRounds: string = '10';
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private async generateHash(password: string): Promise<string> {
    return await bcrypt.hash(password, parseInt(this.saltRounds));
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
