import { NellyNYTPage } from './app.po';

describe('nelly-nyt App', () => {
  let page: NellyNYTPage;

  beforeEach(() => {
    page = new NellyNYTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
