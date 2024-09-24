import { Injectable } from '@nestjs/common';
import { CreateTechnoDto } from './dto/create-techno.dto';
import { UpdateTechnoDto } from './dto/update-techno.dto';
import { Techno } from './schemas/techno.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import Service from '../../base/Service';

@Injectable()
export class TechnosService extends Service {
  constructor(@InjectModel(Techno.name) private technoModel: Model<Techno>) {
    super(
      technoModel,
      new Techno(),
      new CreateTechnoDto(),
      new UpdateTechnoDto(),
    );
  }
}
