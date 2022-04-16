class Constants {
  baseApiUrl = process.env.NEXT_PUBLIC_API_HOST
  // baseApiUrl='https://phmsapi.azurewebsites.net/api/'

  // patient endpoints
  patientUrl = 'patient/all'
  configUrl = 'general/configuration'
  wardType = 'general/wardtype'
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
  appointmentsByPatientUrl = 'appointment/bypatient?nameOrId='
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
  updateLabReports = 'lab/invoice'
  updateLabTestResult = 'lab/updateTestResult'
  labTests = 'lab/tests'
  labInvoiceById = 'lab/testResult?invoiceId='
  labSearchInvoice = 'lab/searchinvoice?nameOrId='
  labAddInvoice = 'lab/addinvoice'

  // room
  availableRooms = 'room/availableRooms'
  roomByIdUrl = 'room/byid?byid='
  extendRooom = 'room/extend'
  assignRooom = 'room/assign'
  assignedRooms = 'room/assigned'
  addRooom = 'room/add'
  allRooms = 'room/all'
  roomSearchUrl = 'room/search?searchFilter='
}

const constants = new Constants()
export default constants
