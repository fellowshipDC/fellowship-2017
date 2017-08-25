import { JoseliosPage } from './app.po';

describe('joselios App', () => {
  let page: JoseliosPage;

  beforeEach(() => {
    page = new JoseliosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
