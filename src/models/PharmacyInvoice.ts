export interface PharmacyInvoice {
    patientId: number;
    patientName: string;
    ref_Doctor: string;
    totalAmount: number;
    discountAmount: number;
    roundedOffAmount: number;
    paymentMode: number;
    paymentReference?: string;
    id?: number;
    createdOn: Date;
    updatedOn?: Date
}
