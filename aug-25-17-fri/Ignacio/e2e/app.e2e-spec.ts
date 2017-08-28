import { ProyectGiftsPage } from './app.po';

describe('proyect-gifts App', () => {
  let page: ProyectGiftsPage;

  beforeEach(() => {
    page = new ProyectGiftsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
