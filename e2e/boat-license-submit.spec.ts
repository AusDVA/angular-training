import { HomePage } from './home.po';

describe('Page: Home Page', () => {

  it(`should have a new message on button click`, async () => {
    HomePage.navigateTo();

    const firstMessage = await HomePage.getMessageText();

    HomePage.getNextMessage();

    const secondMessage = await HomePage.getMessageText();

    expect(firstMessage).not.toEqual(secondMessage);
  });

});
