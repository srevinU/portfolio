import { Injectable } from '@nestjs/common';
import CreateAdminConfigDto from './dto/create-adminConfig.dto';
import UpdateAdminConfigDto from './dto/update-adminConfig.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AdminConfig } from './schemas/adminConfig.schema';
import { Model } from 'mongoose';
import Service from '../../base/Service';
import { Techno } from '../../referencials/technos/schemas/techno.schema';
import { Language } from '../../referencials/languages/schemas/language.schema';

@Injectable()
export class AdminConfigService extends Service {
  constructor(
    @InjectModel(AdminConfig.name) private adminConfigModel: Model<AdminConfig>,
  ) {
    super(
      adminConfigModel,
      new AdminConfig(),
      new CreateAdminConfigDto(),
      new UpdateAdminConfigDto(),
    );
  }

  public getOptions(): { populate: Array<any> } {
    return {
      populate: [
        {
          path: 'about.technos',
          model: Techno.name,
        },
        {
          path: 'about.languages',
          model: Language.name,
        },
        {
          path: 'projects.technos',
          model: Techno.name,
        },
      ],
    };
  }
}
