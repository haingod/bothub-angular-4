import { BothubAng4Page } from './app.po';

describe('bothub-ang4 App', () => {
  let page: BothubAng4Page;

  beforeEach(() => {
    page = new BothubAng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
