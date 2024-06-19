import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  private async generateHash(password: string): Promise<string> {
    return await bcrypt.hash(
      password,
      parseInt(this.configService.get<string>('SALT_ROUNDS')),
    );
  }

  public async register(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.email = createUserDto.email?.toLowerCase();
    const userExisting = await this.findOne(createUserDto.email);
    if (userExisting) throw new UnauthorizedException();
    createUserDto.password = await this.generateHash(createUserDto.password);
    return await new this.userModel(createUserDto).save();
  }

  public async findOne(email: string) {
    return this.userModel.findOne({ email: email });
  }

  public async getUserRoles(email: string): Promise<Array<Types.ObjectId>> {
    return (await this.findOne(email)).roles.map(
      (role) => new Types.ObjectId(role),
    );
  }

  public async remove(email: string): Promise<any> {
    return await this.userModel.deleteOne().where('email').equals(email);
  }
}
