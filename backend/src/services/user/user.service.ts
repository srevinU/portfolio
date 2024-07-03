import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  private async generateHash(password: string): Promise<null | string> {
    let hash: null | string;
    try {
      hash = await bcrypt.hash(
        password,
        parseInt(this.configService.get<string>('SALT_ROUNDS')),
      );
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return hash;
  }

  public async register(createUserDto: CreateUserDto): Promise<null | User> {
    let newUser: null | User;
    try {
      createUserDto.email = createUserDto.email?.toLowerCase();
      const userExisting = await this.findOne(createUserDto.email);
      if (userExisting) throw new UnauthorizedException();
      createUserDto.password = await this.generateHash(createUserDto.password);
      newUser = await new this.userModel(createUserDto).save();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return newUser;
  }

  public async findOne(email: string): Promise<null | User> {
    let user: null | User;
    try {
      user = await this.userModel.findOne({ email: email });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return user;
  }

  public async getUserRoles(email: string): Promise<Array<Types.ObjectId>> {
    let roles: Array<Types.ObjectId>;
    try {
      roles = (await this.findOne(email)).roles.map(
        (role) => new Types.ObjectId(role),
      );
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return roles;
  }

  public async remove(email: string): Promise<any> {
    let romovedUser: null | any;
    try {
      romovedUser = await this.userModel
        .deleteOne()
        .where('email')
        .equals(email);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return romovedUser;
  }
}
