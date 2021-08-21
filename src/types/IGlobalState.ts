import Doctor, { AppConfig } from '../models/Doctor'
import Patient from '../models/Patient'
import IUser from './IUser'

export interface IGlobalState {
  user?: IUser
  busy: boolean
  error: boolean
  errorMessage?: string
  pageTitle: string
  searchQuery?: string
  doctors: Doctor[]
  patients: Patient[]
  appConfig: AppConfig
}
