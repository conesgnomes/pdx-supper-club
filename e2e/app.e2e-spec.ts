import { SupperClubPage } from './app.po';

describe('supper-club App', () => {
  let page: SupperClubPage;

  beforeEach(() => {
    page = new SupperClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
