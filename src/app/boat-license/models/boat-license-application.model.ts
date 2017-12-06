export interface BoatLicenseApplication {
    id?: number;
    registrationNumber?: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender?: string;
    address: string;
    medicalConditions?: string;
    type: string;
    expiry: Date;
    status: string;
}
