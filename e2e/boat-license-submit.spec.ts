import { SubmitPage } from './boat-license-submit.po';

describe('Page: Submitted Page', () => {

  it(`should have a new message on button click`, async () => {
    SubmitPage.navigateTo();

    const firstMessage = await SubmitPage.getConfirmationLabel();

    SubmitPage.getConfirmationLabel();

    const secondMessage = await SubmitPage.getRegoLabel();

    SubmitPage.getRegoLabel();

    const thirdMessage = await SubmitPage.getStatusLabel();
    
        SubmitPage.getStatusLabel();

    expect(firstMessage).toEqual('confirmationLabel');
    expect(secondMessage).toEqual('registrationLabel');
    expect(thirdMessage).toEqual('statusLabel');

});
})