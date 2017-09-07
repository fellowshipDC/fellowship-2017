import { ProyectClasPage } from './app.po';

describe('proyect-clas App', () => {
  let page: ProyectClasPage;

  beforeEach(() => {
    page = new ProyectClasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
