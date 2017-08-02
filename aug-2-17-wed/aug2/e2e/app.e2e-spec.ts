import { Aug2Page } from './app.po';

describe('aug2 App', () => {
  let page: Aug2Page;

  beforeEach(() => {
    page = new Aug2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
