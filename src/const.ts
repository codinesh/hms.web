class Constants {
  baseApiUrl = process.env.NEXT_PUBLIC_API_HOST
  // baseApiUrl='https://phmsapi.azurewebsites.net/api/'

  // patient endpoints
  patientUrl = 'patient/all'
  patientSearchUrl = 'patient?searchFilter='
  addPatientUrl = 'patient/add'
  editPatientUrl = 'patient/edit'
  patientByIdUrl = 'patient/byid?patientId='

  // doctor endpoints
  doctorUrl = 'doctor/all'
  doctorByIdUrl = 'doctor?doctorId='

  // stock endpoints
  stockUrl = 'pharmacy/stock'
  stockSearchUrl = 'pharmacy/availabilitybyname?medicineName='
  expiringStockUrl = 'pharmacy/expiringstock?'
  addStockUrl = 'pharmacy/addStock'
  updateStockUrl = 'pharmacy/editStock'

  //appointment endpoints
  appointmentUrl = 'appointment/all'
  addAppointmentUrl = 'appointment/add'
  updateAppointmentUrl = 'appointment/edit'
  createConsultationInvoice = 'appointment/generateinvoice'
  consultationInvoices = 'appointment/invoices'

  //pharmacy invoice
  allinvoices = 'pharmacy/invoice/all'
  invoiceById = 'pharmacy/invoice?invoiceId='
  searchInvoice = 'pharmacy/searchinvoice?'
  addInvoice = 'pharmacy/prepareinvoice'

  // lab invoice
  allLabinvoices = 'lab/invoices'
  labTests = 'lab/tests'
  labInvoiceById = 'lab/testResult?invoiceId='
  labSearchInvoice = 'lab/searchinvoice?'
  labAddInvoice = 'lab/addinvoice'
}

const constants = new Constants()
export default constants
