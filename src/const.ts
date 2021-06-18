 class Constants {
    baseApiUrl = "http://localhost:5050/api/"
    // patient endpoints
    patientUrl = "patient/all"
    patientByIdUrl = "patient/byid?patientId="

    // doctor endpoints
    doctorUrl = "doctor/all"
    doctorByIdUrl = "doctor?doctorId="
}

const constants = new Constants()
export default constants