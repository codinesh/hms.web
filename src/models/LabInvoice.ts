export interface LabInvoice {
  type: number
  id: number
  patientId: number
  patientName: string
  refDoctor: string
  patientGender: number
  invoiceDate: Date
  appointmentId: number
  doctorId: number
  externalDoctor?: boolean
  service: string
  sacCode: string
  internalCode: string
  quantity: number
  price: number
  discount: number
  amount: number
  paymentMode: number
  paymentReference?: string
  invoiceDetail: IInvoiceDetail[]
}

interface IInvoiceDetail {
  testName: string
  invoiceId: number
  service: string
  sacCode: string
  internalCode: string
  quantity: number
  price: number
  labTestRecord: ILabTestRecord
  id: number
  createdOn: string
  updatedOn?: Date
  deleted: boolean
}

export interface ILabTestRecord {
  labTestId: number
  refDoctor: string
  receivedOn: string
  reportedOn: string
  ward_BedNo: string
  testResultStatus: string
  labTestResult: LabTestResult[]
  id: number
  createdOn: string
  updatedOn?: Date
  deleted: boolean
}

export interface LabTestResult {
  labTestRecordId: number
  id:number
  test: string
  unit: string
  result: string
  referenceRange: string
}

export interface AddLabInvoice {
  id?: number
  doctorId?: number
  patientId?: number
  patientName?: string
  paymentReference?: string
  refDoctor?: string
  invoiceType: number
  patientGender?: number
  invoiceDate: Date
  appointmentId?: number
  externalDoctor?: boolean
  price: number
  discount: number
  paymentMode: number
  labTestIdCollection: number[]
}

export interface LabTestTemplate {
  labTestId: number
  test: string
  unit: string
  referenceRange: string
  id: number
  createdOn: Date
  updatedOn?: Date
  deleted: boolean
}

export interface LabTest {
  name: string
  price: number
  labTestTemplate: LabTestTemplate[]
  id: number
  createdOn: Date
  updatedOn?: Date
  deleted: boolean
}
