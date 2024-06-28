import { AuthGuard } from '@nestjs/passport';

export class RoleAdminGuard extends AuthGuard('role') {}
