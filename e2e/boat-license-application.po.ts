import { browser, by, element } from 'protractor';

export class BoatApplicationPage {
  static navigateTo() {
    return browser.get('/boatlicense/boatLicenseForm');
  }

  static getCurrentUrl() {
      return browser.getCurrentUrl();
  }

  static getFirstName() {
        return element(by.id('firstName'));
  }

  static getLastName() {
    return element(by.id('lastName'));
}

static getAddress() {
    return element(by.id('address'));
}

static getDOB() {
    return element(by.id('dateOfBirth'));
}

static getGender() {
    return element(by.id('gender'));
}

static getTypeOfLicense() {
    return element(by.id('typeOfLicense'));
}

static getMedicalConditions() {
    return element(by.id('medicalConditions'));
}

static submitApplication() {
    return element(by.id('submit')).click();
  }

}
