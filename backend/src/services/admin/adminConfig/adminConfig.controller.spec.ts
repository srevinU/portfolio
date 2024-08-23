import { Test, TestingModule } from '@nestjs/testing';
import { AdminConfigController } from './adminConfig.controller';
import { AdminConfigService } from './adminConfig.service';
import { getModelToken } from '@nestjs/mongoose';
import { AdminConfig } from './schemas/adminConfig.schema';
import AdminConfigModelMock from './mock/AdminConfigModelMock';

describe('AdminConfigController', () => {
  let controller: AdminConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminConfigController],
      providers: [
        AdminConfigService,
        {
          provide: getModelToken(AdminConfig.name),
          useValue: { AdminConfigModelMock },
        },
      ],
    }).compile();

    controller = module.get<AdminConfigController>(AdminConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
