import { EjercicioPage } from './app.po';

describe('ejercicio App', () => {
  let page: EjercicioPage;

  beforeEach(() => {
    page = new EjercicioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
