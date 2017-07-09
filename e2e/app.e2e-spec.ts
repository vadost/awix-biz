import { AwixPage } from './app.po';

describe('awix-biz App', () => {
  let page: AwixPage;

  beforeEach(() => {
    page = new AwixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HOME PAGE');
  });
});
