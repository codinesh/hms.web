export interface PharmacyItem {
  pharmacyStockId: number
  quantity: number
}

export interface PharmacyInvoice {
  patientId: number
  patientAge?: number
  patientGender?: number
  patientName?: string
  refDoctor: string
  totalAmount: number
  discountAmount: number
  roundedOffAmount: number
  paymentMode: number
  paymentReference?: string
  id?: number
  createdOn: Date
  updatedOn?: Date
  PharmacyItems: PharmacyItem[]
  pharmacyInvoiceMedicines?: PharmacyInvoiceMedicine[]
}

export interface PharmacyInvoiceMedicine {
  pharmacyStockId: number
  pharmacyInvoiceId: number
  itemName: string
  measuringUnit: string
  hsnCode: number
  schedule?: any
  manufacturer: string
  batchNo: string
  expiryDate: Date
  quantity: number
  quantityInStrips: boolean
  mrp: number
  amount: number
  id: number
  createdOn: Date
  updatedOn?: any
  deleted: boolean
}
