import { Injectable } from '@nestjs/common';
import CreateAdminConfigDto from './dto/create-adminConfig.dto';
import UpdateAdminConfigDto from './dto/update-adminConfig.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AdminConfig } from './schemas/adminConfig.schema';
import { Model, Types } from 'mongoose';
import Service from '../../Service';

@Injectable()
export class AdminConfigService extends Service {
  constructor(
    @InjectModel(AdminConfig.name) private adminConfigModel: Model<AdminConfig>,
  ) {
    super(AdminConfig.name);
  }

  public async create(
    createAdminConfigDto: CreateAdminConfigDto,
  ): Promise<null | AdminConfig> {
    return new this.adminConfigModel(createAdminConfigDto)
      .save()
      .then((result) => this.catcher(result));
  }

  public async findOne(id: Types.ObjectId): Promise<null | AdminConfig> {
    return this.adminConfigModel
      .findById(id)
      .then((result) => this.catcher(result));
  }

  public async update(
    updateAdminConfigDto: UpdateAdminConfigDto,
  ): Promise<null | AdminConfig> {
    const id: Types.ObjectId = updateAdminConfigDto._id;
    return this.adminConfigModel
      .findByIdAndUpdate(id, updateAdminConfigDto, { new: true })
      .then((result) => this.catcher(result));
  }
}
