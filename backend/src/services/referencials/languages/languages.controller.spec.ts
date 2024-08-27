import { Test, TestingModule } from '@nestjs/testing';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';
import { getModelToken } from '@nestjs/mongoose';
import { Language } from './entities/language.entity';

describe('LanguagesController', () => {
  let controller: LanguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguagesController],
      providers: [
        LanguagesService,
        { provide: getModelToken(Language.name), useValue: {} },
      ],
    }).compile();

    controller = module.get<LanguagesController>(LanguagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
