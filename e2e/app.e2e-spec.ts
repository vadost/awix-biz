import { ClubnikaFrontendPage } from './app.po';

describe('clubnika-frontend App', () => {
  let page: ClubnikaFrontendPage;

  beforeEach(() => {
    page = new ClubnikaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
