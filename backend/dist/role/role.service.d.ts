import { CreateRoleDto } from './dto/create-role.dto';
export declare class RoleService {
    create(createRoleDto: CreateRoleDto): string;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
