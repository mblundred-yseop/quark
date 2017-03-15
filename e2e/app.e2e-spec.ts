import { QuarkPage } from './app.po';

describe('quark App', () => {
  let page: QuarkPage;

  beforeEach(() => {
    page = new QuarkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
