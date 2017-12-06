import { browser, by, element } from 'protractor';

export class HomePage {
  static navigateTo() {
    return browser.get('/home');
  }

  static getDriverMenuItem() {
    return element(by.css('.DriverButton')).click();
  }

  static getDriverForm() {
    return browser.get('/drivers/driversForm');
  }

  static getHomeMenuItem() {
    return element(by.css('.HomeButton')).click();
  }

  static getMessageText() {
    return element(by.css('ngp-home h1')).getText();
  }

  static getDetails() {
    return element(by.css('ngp-home button')).click();
  }
}
