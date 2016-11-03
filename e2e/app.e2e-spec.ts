import { MeetupCliPage } from './app.po';

describe('meetup-cli App', function() {
  let page: MeetupCliPage;

  beforeEach(() => {
    page = new MeetupCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
