import { DriversPage } from './drivers.po';

describe('Page: Home Page', () => {

  
  it(`should go to success page on save button click`, async () => {
    DriversPage.navigateTo();

    const driversForm = await DriversPage.navigateTo();
    const saveButton = await DriversPage.getSaveButton();
    const successPage = await DriversPage.getSuccessPage();
    expect(saveButton).toEqual(successPage);

  });
});
