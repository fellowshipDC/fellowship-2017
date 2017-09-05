import { AlexPage } from './app.po';

describe('alex App', () => {
  let page: AlexPage;

  beforeEach(() => {
    page = new AlexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
