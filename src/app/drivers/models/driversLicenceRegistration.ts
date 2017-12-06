export interface DriversLicenceRegistration {
    ID?: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    type: string;
    address: string;
    medicalConditions: boolean;
    lengthOfLicenceYears: string;
    drivingOffences: boolean;
}
