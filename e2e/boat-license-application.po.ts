import { browser, by, element } from 'protractor';

export class BoatApplicationPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getCurrentUrl() {
      return browser.getCurrentUrl();
  }

  static getFirstName() {
        return element(by.css('ngp-home h1'));
  }

  static getLastName() {
    return element(by.css('ngp-home h1'));
}

static getAddress() {
    return element(by.css('ngp-home h1'));
}

static getDOB() {
    return element(by.css('ngp-home h1'));
}

static getGender() {
    return element(by.css('ngp-home h1'));
}

static getTypeOfLicense() {
    return element(by.css('ngp-home h1'));
}

static getMedicalConditions() {
    return element(by.css('ngp-home h1'));
}

static submitApplication() {
    return element(by.css('ngp-home button')).click();
  }

}
