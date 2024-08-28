import { Model, Types } from 'mongoose';
import { CreateDtosT, UpdateDtosT } from 'src/utils/types/dtos';
import Handler from '../utils/Handler';
import Logger from '../utils/Logger';
import { AdminConfig } from './admin/adminConfig/schemas/adminConfig.schema';
import { User } from './user/schemas/user.schema';
import { Role } from './role/schemas/role.schema';
import { Language } from './referencials/languages/schemas/language.schema';
import { Techno } from './referencials/technos/schemas/techno.schema';

export default abstract class Service {
  model: Model<any>;
  createDto: CreateDtosT;
  updateDto?: UpdateDtosT;
  handler: Handler;
  logger: Logger;
  schema: AdminConfig | User | Role | Language | Techno;
  constructor(
    model: Model<any>,
    schema: AdminConfig | User | Role | Language | Techno,
    createDto: CreateDtosT,
    updateDto?: UpdateDtosT,
  ) {
    this.model = model;
    this.createDto = createDto;
    this.updateDto = updateDto;
    this.handler = new Handler();
    this.logger = new Logger(schema.constructor.name);
  }

  public async create(
    createDto: typeof this.createDto,
  ): Promise<null | typeof this.schema> {
    return (await this.model.create(createDto))
      .populate(this.getOptions().populate)
      .then((result) => this.catcher(result));
  }

  public async findOne(id: Types.ObjectId): Promise<null | typeof this.schema> {
    return this.model
      .findById(id)
      .populate(this.getOptions().populate)
      .then((result) => this.catcher(result));
  }

  public async findAll(): Promise<null | Array<typeof this.schema>> {
    return this.model
      .find()
      .populate(this.getOptions().populate)
      .then((result) => this.catcher(result));
  }

  public async update(
    updateDto: typeof this.updateDto,
  ): Promise<null | typeof this.schema> {
    const id: Types.ObjectId = updateDto._id;
    return this.model
      .findByIdAndUpdate(id, updateDto, {
        new: true,
      })
      .populate(this.getOptions().populate)
      .then((result) => this.catcher(result));
  }

  public async remove(id: Types.ObjectId): Promise<any> {
    return this.model
      .deleteOne()
      .where('_id')
      .equals(id)
      .then((result) => this.catcher(result));
  }

  public getOptions(): { populate: Array<any> } {
    return {
      populate: [],
    };
  }

  protected catcher<T>(data: T) {
    if (data === null) this.logger.logDataNotFound();
    if (data instanceof Error) {
      this.logger.logDataError(data);
      this.handler.handleException(data);
    }
    return data;
  }
}
