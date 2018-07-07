import { BertaPage } from './app.po';

describe('berta App', () => {
  let page: BertaPage;

  beforeEach(() => {
    page = new BertaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
