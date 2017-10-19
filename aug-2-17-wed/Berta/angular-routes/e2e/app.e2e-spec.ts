import { AngularRoutesPage } from './app.po';

describe('angular-routes App', () => {
  let page: AngularRoutesPage;

  beforeEach(() => {
    page = new AngularRoutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
