import { NewApp2Page } from './app.po';

describe('new-app2 App', () => {
  let page: NewApp2Page;

  beforeEach(() => {
    page = new NewApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
