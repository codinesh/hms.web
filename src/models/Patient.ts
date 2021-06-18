export default interface Patient {
    patientCategory?: any;
    insuranceId: number;
    insuranceNumber: string;
    remarks?: any;
    address: string;
    healthConditions: any[];
    medicalHistory: string;
    diagnoses: any[];
    id: number;
    fullName: string;
    gender: number;
    maritialStatus?: any;
    bloodGroup?: any;
    contactNumber: string;
    alternateContactNumber?: any;
    email: string;
    role: number;
    age: number;
    ageInMonths: number;
    createdOn: Date;
    updatedOn: Date;
}