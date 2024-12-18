import { Test } from '@nestjs/testing';
import { RoleService } from './role.service';
import { getModelToken } from '@nestjs/mongoose';
import RoleModelMock from './mocks/RoleModelMock';
import { Role } from './schemas/role.schema';

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
    module.init();
    roleService = await module.resolve<RoleService>(RoleService);
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
    const result = await roleService.remove(role._id);
    expect(result._id).toBe(role._id);
  });
});
