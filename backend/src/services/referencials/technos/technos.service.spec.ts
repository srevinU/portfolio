import { Test, TestingModule } from '@nestjs/testing';
import { TechnosService } from './technos.service';
import { getModelToken } from '@nestjs/mongoose';
import { Techno } from './schemas/techno.schema';

describe('TechnosService', () => {
  let service: TechnosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechnosService,
        { provide: getModelToken(Techno.name), useValue: {} },
      ],
    }).compile();
    module.init();
    service = await module.resolve<TechnosService>(TechnosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
