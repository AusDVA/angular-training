export interface BoatLicenseApplication {
    applicationID?: number;
    registrationNumber?: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender?: string;
    address: string;
    medicalConditions?: string;
    typeOfLicense: string;
    expiry: Date;
    status: string;   
}