import { EjercicioRoutingPage } from './app.po';

describe('ejercicio-routing App', () => {
  let page: EjercicioRoutingPage;

  beforeEach(() => {
    page = new EjercicioRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
