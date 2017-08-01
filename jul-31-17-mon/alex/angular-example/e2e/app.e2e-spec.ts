import { AngularExamplePage } from './app.po';

describe('angular-example App', () => {
  let page: AngularExamplePage;

  beforeEach(() => {
    page = new AngularExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
