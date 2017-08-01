import { EjesangPage } from './app.po';

describe('ejesang App', () => {
  let page: EjesangPage;

  beforeEach(() => {
    page = new EjesangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
