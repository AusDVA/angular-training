import { HomePage } from './home.po';

describe('Page: Home Page', () => {

  
  it(`should go to drivers licence form on button click`, async () => {
    HomePage.navigateTo();

    const home = await HomePage.navigateTo();
    const driverButton = await HomePage.getDriverMenuItem();
    const driverForm = await HomePage.getDriverForm();
    expect(driverButton).toEqual(driverForm);

  });

    it(`should go the home page from the home page button click`, async () => {
        HomePage.navigateTo();

        const home = await HomePage.navigateTo();
        const homeButton = await HomePage.getHomeMenuItem();

        expect(home).toEqual(homeButton);


    });

});
