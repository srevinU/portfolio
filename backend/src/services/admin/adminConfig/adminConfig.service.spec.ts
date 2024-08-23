import { Test, TestingModule } from '@nestjs/testing';
import { AdminConfigService } from './adminConfig.service';
import { getModelToken } from '@nestjs/mongoose';
import { AdminConfig } from './schemas/adminConfig.schema';
import AdminConfigModelMock from './mock/AdminConfigModelMock';

describe('AdminConfigService', () => {
  let service: AdminConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminConfigService,
        {
          provide: getModelToken(AdminConfig.name),
          useValue: { AdminConfigModelMock },
        },
      ],
    }).compile();

    service = module.get<AdminConfigService>(AdminConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
