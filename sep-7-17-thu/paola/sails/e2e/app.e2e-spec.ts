import { SailsPage } from './app.po';

describe('sails App', () => {
  let page: SailsPage;

  beforeEach(() => {
    page = new SailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
