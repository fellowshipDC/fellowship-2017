import { ProyctGotPage } from './app.po';

describe('proyct-got App', () => {
  let page: ProyctGotPage;

  beforeEach(() => {
    page = new ProyctGotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
