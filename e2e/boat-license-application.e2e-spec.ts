//import { tick, ComponentFixture, TestBed } from '@angular/core/testing';
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
    //tick(500);
    lastName.sendKeys('MyLastName');
    //tick(500);
    address.sendKeys('1 MyAddress Street');
    //tick(500);
    dob.sendKeys('25/02/1826');
    //tick(500);
    gender.sendKeys('Male');
    //tick(500);
    typeOfLicense.sendKeys('A');
    //tick(500);
    firstName.sendKeys('Blind');
    //tick(500);

    BoatApplicationPage.submitApplication();

    const secondUrl = BoatApplicationPage.getCurrentUrl();

    expect(firstUrl).not.toEqual(secondUrl);

  });




});
