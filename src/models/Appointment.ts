import { ConsultationInvoice1 } from './ConsultationInvoice'

export interface Appointment {
    id: number;
    createdOn: Date;
    updatedOn?: Date;
    deleted: boolean;
    patientId: number;
    doctorId: number;
    appointmentDate: Date;
    validTill: Date;
    patientCategory?: string;
    address: string;
    healthConditions: number[];
    medicalHistory?: string;
    patientName: string;
    doctorName: string;
    patientGender: number;
    contactNumber: string;
    age: number;
    ageInMonths: number;
    invoice: ConsultationInvoice1
}


export interface AddAppointment {
    id: number
    patientId: number
    doctorId: number
    appointmentDate: Date
    issue?: string
}