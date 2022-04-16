export default interface Room {
  remarks?: string
  id: number
  name?: string
  bedNumber: number
  buildingId: number
  floorNumber: number
  wardType: number
  rent: number
  isAvailable?: boolean
  isCleaned?: boolean
}

export enum RoomType {
  AC,
  NonAC,
}
