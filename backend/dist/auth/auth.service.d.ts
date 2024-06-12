import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
