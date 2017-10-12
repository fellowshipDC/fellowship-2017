import { JorgePage } from './app.po';

describe('jorge App', () => {
  let page: JorgePage;

  beforeEach(() => {
    page = new JorgePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
