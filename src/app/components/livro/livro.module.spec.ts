import { LivroModule } from './livro.module';

describe('LivroModule', () => {
  let livroModule: LivroModule;

  beforeEach(() => {
    livroModule = new LivroModule();
  });

  it('should create an instance', () => {
    expect(livroModule).toBeTruthy();
  });
});
