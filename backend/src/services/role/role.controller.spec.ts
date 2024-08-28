import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { Role } from './schemas/role.schema';
import RoleModelMock from './mocks/RoleModelMock';
import { getModelToken } from '@nestjs/mongoose';

describe('RoleController', () => {
  let controller: RoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [
        RoleService,
        {
          provide: getModelToken(Role.name),
          useValue: RoleModelMock,
        },
      ],
    }).compile();

    controller = module.get<RoleController>(RoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a role', async () => {
    const role = RoleModelMock.generateMockData();
    const result = await controller.create(role);
    expect(result._id).toEqual(role._id);
  });
});
