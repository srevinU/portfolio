import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import Service from '../../base/Service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language } from './schemas/language.schema';
import { Language as LanguageEntity } from './entities/language.entity';

@Injectable()
export class LanguagesService extends Service {
  constructor(
    @InjectModel(Language.name) private LanguageModel: Model<Language>,
  ) {
    super(
      LanguageModel,
      new LanguageEntity(),
      new CreateLanguageDto(),
      new UpdateLanguageDto(),
    );
  }
}
