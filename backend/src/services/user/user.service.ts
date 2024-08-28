import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import Service from '../Service';
@Injectable()
export class UserService extends Service {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {
    super(userModel, new User(), new CreateUserDto(), null);
  }

  private async generateHash(password: string): Promise<null | string> {
    return bcrypt
      .hash(password, parseInt(this.configService.get<string>('SALT_ROUNDS')))
      .then((hash: string) => this.catcher(hash));
  }

  public async register(createUserDto: CreateUserDto): Promise<null | User> {
    createUserDto.email = createUserDto.email?.toLowerCase();
    const userExisting = await this.findByEmail(createUserDto.email);
    if (userExisting) throw new UnauthorizedException();
    createUserDto.password = await this.generateHash(createUserDto.password);
    return new this.userModel(createUserDto)
      .save()
      .then((result) => this.catcher(result));
  }

  public async findByEmail(email: string): Promise<null | User> {
    const user: null | User = await this.userModel.findOne({ email: email });
    return this.catcher(user);
  }

  public async getUserRoles(email: string): Promise<Array<Types.ObjectId>> {
    return this.findByEmail(email)
      .then((user) => user.roles.map((role) => new Types.ObjectId(role)))
      .then((result) => this.catcher(result));
  }
}
