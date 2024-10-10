import { Test, TestingModule } from '@nestjs/testing';
import { LanguagesService } from './languages.service';
import { Language } from './entities/language.entity';
import { getModelToken } from '@nestjs/mongoose';

describe('LanguagesService', () => {
  let service: LanguagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LanguagesService,
        {
          provide: getModelToken(Language.name),
          useValue: {},
        },
      ],
    }).compile();
    module.init();
    service = await module.resolve<LanguagesService>(LanguagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
