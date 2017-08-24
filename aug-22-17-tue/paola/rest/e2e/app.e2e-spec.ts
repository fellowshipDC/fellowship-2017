import { RestPage } from './app.po';

describe('rest App', () => {
  let page: RestPage;

  beforeEach(() => {
    page = new RestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
