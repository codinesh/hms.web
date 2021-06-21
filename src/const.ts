 class Constants {
    baseApiUrl = "http://localhost:5050/api/"
    // patient endpoints
    patientUrl = "patient/all"
    patientSearchUrl = "patient?searchFilter="
    addPatientUrl = "patient/add"
    editPatientUrl = "patient/edit"
    patientByIdUrl = "patient/byid?patientId="

    // doctor endpoints
    doctorUrl = "doctor/all"
    doctorByIdUrl = "doctor?doctorId="

    stockUrl = "pharmacy/stock"
    stockSearchUrl = "pharmacy/availabilitybyname?medicineName="
    expiringStockUrl = "pharmacy/expiringstock?startDate="
    addStockUrl = "pharmacy/addStock"
}

const constants = new Constants()
export default constants