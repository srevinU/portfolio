import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../services/user/user.service';
import { RoleService } from '../services/role/role.service';

@Injectable()
export class RoleAdminStrategy extends PassportStrategy(Strategy, 'role') {
  constructor(
    readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => request?.cookies['Authentication'],
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const roles = await this.userService.getUserRoles(payload.email);
    return await this.roleService.validateRoleAdmin(roles);
  }
}
