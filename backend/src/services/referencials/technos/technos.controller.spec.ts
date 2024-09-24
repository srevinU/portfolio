import { Test, TestingModule } from '@nestjs/testing';
import { TechnosController } from './technos.controller';
import { TechnosService } from './technos.service';
import { getModelToken } from '@nestjs/mongoose';
import { Techno } from './schemas/techno.schema';

describe('TechnosController', () => {
  let controller: TechnosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnosController],
      providers: [
        TechnosService,
        { provide: getModelToken(Techno.name), useValue: {} },
      ],
    }).compile();

    controller = module.get<TechnosController>(TechnosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
