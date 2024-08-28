import { CreateUserDto } from 'src/services/user/dto/create-user.dto';
import CreateAdminConfigDto from '../../services/admin/adminConfig/dto/create-adminConfig.dto';
import UpdateAdminConfigDto from '../../services/admin/adminConfig/dto/update-adminConfig.dto';
import { CreateRoleDto } from 'src/services/role/dto/create-role.dto';
import { CreateLanguageDto } from 'src/services/referencials/languages/dto/create-language.dto';
import { UpdateLanguageDto } from 'src/services/referencials/languages/dto/update-language.dto';
import { CreateTechnoDto } from 'src/services/referencials/technos/dto/create-techno.dto';
import { UpdateTechnoDto } from 'src/services/referencials/technos/dto/update-techno.dto';

export type CreateDtosT =
  | CreateAdminConfigDto
  | CreateUserDto
  | CreateRoleDto
  | CreateLanguageDto
  | CreateTechnoDto;

export type UpdateDtosT =
  | UpdateAdminConfigDto
  | UpdateLanguageDto
  | UpdateTechnoDto;
