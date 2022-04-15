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
  roomId: number
  patientId: number
  startTime: Date
  endTime: Date
  remarks: string
}

export enum RoomType {
  AC,
  NonAC,
}
