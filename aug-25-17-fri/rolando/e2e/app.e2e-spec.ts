import { RolandoPage } from './app.po';

describe('rolando App', () => {
  let page: RolandoPage;

  beforeEach(() => {
    page = new RolandoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
