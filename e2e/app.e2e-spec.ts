import { ClubnikaFrontendPage } from './app.po';

describe('clubnika-frontend App', () => {
  let page: ClubnikaFrontendPage;

  beforeEach(() => {
    page = new ClubnikaFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HOME PAGE');
  });
});
