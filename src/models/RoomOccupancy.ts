export interface RoomOccupancy {
  id: number
  roomId: number
  roomName?: string
  patientId: number
  patientName?: string
  startDateTime: Date
  endDateTime: Date
  remarks?: string
}
