import { NellyPage } from './app.po';

describe('nelly App', () => {
  let page: NellyPage;

  beforeEach(() => {
    page = new NellyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
