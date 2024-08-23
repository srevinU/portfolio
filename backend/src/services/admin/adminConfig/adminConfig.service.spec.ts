import { Test, TestingModule } from '@nestjs/testing';
import { AdminConfigService } from './adminConfig.service';
import { getModelToken } from '@nestjs/mongoose';
import { AdminConfig } from './schemas/adminConfig.schema';
import AdminConfigModelMock from './mock/AdminConfigModelMock';

describe('AdminConfigService', () => {
  let adminConfigService: AdminConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminConfigService,
        {
          provide: getModelToken(AdminConfig.name),
          useValue: AdminConfigModelMock,
        },
      ],
    }).compile();

    adminConfigService = module.get<AdminConfigService>(AdminConfigService);
  });

  it('should be defined', () => {
    expect(adminConfigService).toBeDefined();
  });

  it('should register admin configuration', async () => {
    const adminConfig = AdminConfigModelMock.data;
    const result = await adminConfigService.create(adminConfig);
    expect(result._id).toEqual(adminConfig._id);
  });

  it('should find admin configuration', async () => {
    const adminConfig = AdminConfigModelMock.data;
    const result = await adminConfigService.findOne(adminConfig._id);
    expect(result._id).toEqual(adminConfig._id);
  });

  it('should update admin configuration', async () => {
    const adminConfig = AdminConfigModelMock.data;
    const result = await adminConfigService.update(adminConfig);
    expect(result._id).toEqual(adminConfig._id);
  });
});
