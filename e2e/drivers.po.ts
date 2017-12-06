import { browser, by, element } from 'protractor';

export class DriversPage {
  static navigateTo() {
    return browser.get('/drivers/driversForm');
  }

  static getSaveButton() {
    return element(by.css('.btn.btn-success')).click();
  }

  static getSuccessPage() {
      return browser.get('/drivers/driversSuccess')
  }
  
}