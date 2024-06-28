type RolePayload = {
  name: string;
  description: string;
  permissions: Array<string>;
};

export const roleTest: RolePayload = {
  name: 'test_e2e_role',
  description: 'Test E2E role',
  permissions: ['read', 'write', 'update', 'delete'],
};

export const roleAdmin: RolePayload = {
  name: 'admin',
  description: 'admin role',
  permissions: ['create', 'read', 'update', 'delete'],
};
