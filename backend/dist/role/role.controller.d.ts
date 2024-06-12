import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): string;
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
