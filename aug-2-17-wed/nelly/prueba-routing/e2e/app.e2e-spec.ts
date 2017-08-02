import { PruebaRoutingPage } from './app.po';

describe('prueba-routing App', () => {
  let page: PruebaRoutingPage;

  beforeEach(() => {
    page = new PruebaRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
