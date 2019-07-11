import { AngularProjektPage } from './app.po';

describe('angular-projekt App', function() {
  let page: AngularProjektPage;

  beforeEach(() => {
    page = new AngularProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
