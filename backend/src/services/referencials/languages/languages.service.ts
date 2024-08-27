import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import Service from '../../Service';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Language } from './schemas/language.schema';
import { Language as LanguageEntity } from './entities/language.entity';

@Injectable()
export class LanguagesService extends Service {
  constructor(
    @InjectModel(Language.name) private LanguageModel: Model<Language>,
  ) {
    super(Language.name);
  }

  public async create(
    createLanguageDto: CreateLanguageDto,
  ): Promise<null | LanguageEntity> {
    return new this.LanguageModel(createLanguageDto)
      .save()
      .then((result) => this.catcher(result));
  }

  public async findAll(): Promise<null | Array<LanguageEntity>> {
    return this.LanguageModel.find().then((result) => this.catcher(result));
  }

  public async findOne(id: Types.ObjectId): Promise<null | LanguageEntity> {
    return this.LanguageModel.findById(id);
  }

  public async update(updateLanguageDto: UpdateLanguageDto) {
    const id: Types.ObjectId = updateLanguageDto._id;
    return this.LanguageModel.findByIdAndUpdate(id, updateLanguageDto, {
      new: true,
    }).then((result) => this.catcher(result));
  }
}
