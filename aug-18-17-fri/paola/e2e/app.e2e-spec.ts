import { QuizPage } from './app.po';

describe('quiz App', () => {
  let page: QuizPage;

  beforeEach(() => {
    page = new QuizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
