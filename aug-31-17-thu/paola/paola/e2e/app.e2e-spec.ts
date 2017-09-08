import { PaolaPage } from './app.po';

describe('paola App', () => {
  let page: PaolaPage;

  beforeEach(() => {
    page = new PaolaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
