import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

export class RoleAdminGuard extends AuthGuard('role') {
  constructor() {
    super();
  }

  canActivate(context: ExecutionContext): Promise<boolean> | boolean {
    const reflector = new Reflector();
    const skipGuards = reflector.get<boolean>(
      'skipGuards',
      context.getHandler(),
    );
    if (skipGuards) {
      return true;
    }
  }
}
