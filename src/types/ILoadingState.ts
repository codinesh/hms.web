import Doctor from '../models/Doctor';
import Patient from '../models/Patient';
import IUser from "./IUser"

export interface ILoadingState {
  inProgress: boolean
  error: boolean
  errorMessge: string
}
