export default interface IUser {
  id: string
  name: string
  loggedIn: boolean
}

export interface IRoom {
  bedNumber: number
  name: string
  buildingId: number
  floorNumber: number
  wardTypeId: number
  rent: number
  isAvailable: boolean
  isCleaned: boolean
  id: number
  createdOn: Date
  updatedOn: Date
  deleted: boolean
}
