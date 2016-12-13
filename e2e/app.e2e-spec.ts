import { RouterExmplePage } from './app.po';

describe('router-exmple App', function() {
  let page: RouterExmplePage;

  beforeEach(() => {
    page = new RouterExmplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
