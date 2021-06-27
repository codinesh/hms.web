export interface ConsultationInvoice
{
    id?:number;
    appointmentId: number
    patientId?: number
    doctorId?: number
    refDoctor?: string
    price: number
    discountAmount: number
    paymentMode: number
    paymentReference?: string
    invoiceDate: Date
}

export interface ConsultationInvoice1 {
    type: number;
    patientId: number;
    patientName?: any;
    refDoctor?: any;
    patientGender: number;
    invoiceDate: Date;
    appointmentId: number;
    doctorId: number;
    externalDoctor?: any;
    service?: any;
    sacCode?: any;
    internalCode?: any;
    quantity: number;
    price: number;
    discount: number;
    amount: number;
    paymentMode: number;
    invoiceDetail: InvoiceDetail[];
    id: number;
    createdOn: Date;
    updatedOn?: any;
    deleted: boolean;
}



   export interface InvoiceDetail {
        invoiceId: number;
        service?: any;
        sacCode?: any;
        internalCode?: any;
        quantity: number;
        price: number;
        labTestRecord?: any;
        id: number;
        createdOn: Date;
        updatedOn?: any;
        deleted: boolean;
    }
