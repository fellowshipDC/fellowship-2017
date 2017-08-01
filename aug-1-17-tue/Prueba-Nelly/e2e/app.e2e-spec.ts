import { PruebaPage } from './app.po';

describe('prueba App', () => {
  let page: PruebaPage;

  beforeEach(() => {
    page = new PruebaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
