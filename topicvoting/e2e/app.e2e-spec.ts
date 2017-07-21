import { TopicvotingPage } from './app.po';

describe('topicvoting App', () => {
  let page: TopicvotingPage;

  beforeEach(() => {
    page = new TopicvotingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
