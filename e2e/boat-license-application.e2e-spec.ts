import { BoatApplicationPage } from './boat-license-application.po';

let firstName;
let lastName;
let address;
let dob;
let gender;
let typeOfLicense;
let medicalConditions;
let firstUrl;

describe('Page: Home Page', () => {

  beforeEach(function() {
    BoatApplicationPage.navigateTo();

    firstName = BoatApplicationPage.getFirstName();
    lastName = BoatApplicationPage.getLastName();
    address = BoatApplicationPage.getAddress();
    dob = BoatApplicationPage.getDOB();
    gender = BoatApplicationPage.getGender();
    typeOfLicense = BoatApplicationPage.getTypeOfLicense();
    medicalConditions = BoatApplicationPage.getMedicalConditions();
    firstUrl = BoatApplicationPage.getCurrentUrl();

  });

  it(`Boat License submission test`, async () => {

    firstName.sendKeys('MyFirstName');
    lastName.sendKeys('MyLastName');
    address.sendKeys('1 MyAddress Street');
    dob.sendKeys('25/02/1826');
    gender.sendKeys('Male');
    typeOfLicense.sendKeys('A');
    firstName.sendKeys('Blind');

    BoatApplicationPage.submitApplication();

    const secondUrl = BoatApplicationPage.getCurrentUrl();

    expect(firstUrl).not.toEqual(secondUrl);

  });




});
