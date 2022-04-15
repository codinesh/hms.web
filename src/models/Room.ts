export default interface Room {
  remarks?: string
  id: number
  bedNumber: number
  buildingId: number
  floorNumber: number
  wardType: number
  rent: number
  isAvailable?: boolean
  isCleaned?: boolean
}

export interface RoomOccupancy {
  id: number
  roomId: number
  patientId: number
  patientName?: string
  startDateTime: Date
  endDateTime: Date
  remarks?: string
}

export enum RoomType {
  AC,
  NonAC,
}
