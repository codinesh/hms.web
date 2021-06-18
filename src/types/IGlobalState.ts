import IUser from "./IUser"

export interface IGlobalState {
  user?: IUser
  busy: boolean
  error: boolean
  errorMessage?: string
  pageTitle: string
  searchQuery?: string
}
