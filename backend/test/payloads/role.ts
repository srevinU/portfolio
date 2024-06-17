type RolePayload = {
  name: string;
  description: string;
  permissions: Array<string>;
};

export default {
  name: 'test_e2e_role',
  description: 'Test E2E role',
  permissions: ['read', 'write', 'update', 'delete'],
} as RolePayload;
