export interface ConsultationInvoice
{
    id:number;
    amount: number
    patientId: number
    refDoctor: string
    totalAmount: number
    discountAmount: number
    roundedOffAmount: number
    paymentMode: number
    paymentReference?: string
    createdOn: Date
    updatedOn?: Date  
}