import { GIFZZZPage } from './app.po';

describe('gifzzz App', () => {
  let page: GIFZZZPage;

  beforeEach(() => {
    page = new GIFZZZPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
