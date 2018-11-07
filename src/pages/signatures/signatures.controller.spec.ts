import { Test, TestingModule } from '@nestjs/testing';
import { SignaturesController } from './signatures.controller';

describe('Signatures Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SignaturesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SignaturesController = module.get<SignaturesController>(SignaturesController);
    expect(controller).toBeDefined();
  });
});
