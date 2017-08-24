import { ProyectAPIPage } from './app.po';

describe('proyect-api App', () => {
  let page: ProyectAPIPage;

  beforeEach(() => {
    page = new ProyectAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
