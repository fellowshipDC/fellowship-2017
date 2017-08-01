import { JoseluisPage } from './app.po';

describe('joseluis App', () => {
  let page: JoseluisPage;

  beforeEach(() => {
    page = new JoseluisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
