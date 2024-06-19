import { Test } from '@nestjs/testing';
import { RoleService } from './role.service';
import { getModelToken } from '@nestjs/mongoose';
import { Role } from './shemas/role.schema';
import RoleModelMock from './mocks/RoleModelMock';

describe('RoleService', () => {
  let roleService: RoleService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RoleService,
        {
          provide: getModelToken(Role.name),
          useValue: RoleModelMock,
        },
      ],
    }).compile();
    roleService = module.get<RoleService>(RoleService);
  });
  it('should be defined', () => {
    expect(roleService).toBeDefined();
  });

  it('should create a role', async () => {
    const role = RoleModelMock.generateMockData();
    const result = await roleService.create(role);
    expect(result._id).toEqual(role._id);
  });

  it('Should validate role admin', async () => {
    const role = RoleModelMock.generateMockData();
    const result = await roleService.validateRoleAdmin([role._id]);
    expect(result).toBe(true);
  });

  it('Should remove a role', async () => {
    const role = RoleModelMock.generateMockData();
    const result = await roleService.remove('admin');
    expect(result._id).toBe(role._id);
  });
});
