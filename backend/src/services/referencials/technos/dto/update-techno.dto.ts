import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnoDto } from './create-techno.dto';

export class UpdateTechnoDto extends PartialType(CreateTechnoDto) {}
