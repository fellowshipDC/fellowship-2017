import { TsExamplePage } from './app.po';

describe('ts-example App', () => {
  let page: TsExamplePage;

  beforeEach(() => {
    page = new TsExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
