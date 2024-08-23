import { PartialType } from '@nestjs/mapped-types';
import CreateAdminConfigDto from './create-adminConfig.dto';

export default class UpdateAdminConfigDto extends PartialType(
  CreateAdminConfigDto,
) {}
