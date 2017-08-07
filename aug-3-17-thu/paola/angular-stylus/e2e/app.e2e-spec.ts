import { AngularStylusPage } from './app.po';

describe('angular-stylus App', () => {
  let page: AngularStylusPage;

  beforeEach(() => {
    page = new AngularStylusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
