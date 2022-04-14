export default interface Room {
  remarks?: string
  id: number
  bedNumber: number
  buildingId: number
  floorNumber: number
  wardTypeId: string
  rent: number
  isAvailable?: boolean
  isCleaned?: boolean
}

export enum RoomType {
  AC,
  NonAC,
}
