import Gender from './Gender'

export interface Department {
  name: string
  id: number
  createdOn: Date
  updatedOn?: any
  deleted: boolean
}

export interface AppConfig {
  contactNumber: string
  pharmacyContactNumber: string
  gstin: string
  cin: string
  dl1: string
  dl2: string
}

export interface WardType {
  id: number
  name: string
}

interface Doctor {
  experience: number
  qualification: string
  departmentId: number
  payGradeId: number
  registrationNo: string
  department: Department
  payGrade?: any
  id: number
  fullName: string
  gender: Gender
  maritialStatus: string
  bloodGroup?: any
  contactNumber: string
  alternateContactNumber?: any
  email: string
  role: number
  age: number
  ageInMonths: number
  createdOn: Date
  updatedOn: Date
}

export default Doctor
