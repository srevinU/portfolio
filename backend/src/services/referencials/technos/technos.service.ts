import { Injectable } from '@nestjs/common';
import { CreateTechnoDto } from './dto/create-techno.dto';
import { UpdateTechnoDto } from './dto/update-techno.dto';
import { Techno } from './schemas/techno.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import Service from '../../Service';

@Injectable()
export class TechnosService extends Service {
  constructor(@InjectModel(Techno.name) private technoModel: Model<Techno>) {
    super(Techno.name);
  }

  public async create(
    createTechnoDto: CreateTechnoDto,
  ): Promise<null | Techno> {
    return new this.technoModel(createTechnoDto)
      .save()
      .then((result) => this.catcher(result));
  }

  public async findAll(): Promise<null | Array<Techno>> {
    return this.technoModel.find().then((result) => this.catcher(result));
  }

  public async findOne(id: Types.ObjectId): Promise<null | Techno> {
    return this.technoModel.findById(id);
  }

  public async update(updateTechnoDto: UpdateTechnoDto) {
    const id: Types.ObjectId = updateTechnoDto._id;
    return this.technoModel
      .findByIdAndUpdate(id, updateTechnoDto, {
        new: true,
      })
      .then((result) => this.catcher(result));
  }
}
