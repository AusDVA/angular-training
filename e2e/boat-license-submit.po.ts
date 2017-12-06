import { browser, by, element } from 'protractor';

export class SubmitPage {
  static navigateTo() {
    return browser.get('/boatlicense/boatLicenseForm');
  }

  static getConfirmationLabel() {
    return element(by.id('confirmationLabel')).getText();
  }

  static getRegoLabel() {
    return element(by.id('registrationLabel')).getText();
  }

  static getStatusLabel() {
    return element(by.id('statusLabel')).getText();
  }

 

    }
