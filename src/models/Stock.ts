export interface Stock {
  id: number
  itemName: string
  measuringUnit: string
  drugName: string
  hsnCode: number
  manufacturer: string
  batchNo: string
  expiryDate: Date
  totalQuantityAvailable: number
  quantityPerStrip: number
  mrpPerStrip: number
  mrpPerUnit: number
  discountPercent: number
  cgstPercent: number
  sgstPercent: number
  totalQuantityProcured: number
  numberOfStrips: number
  freeStrips: number
  ratePerStrip: number
  ratePerUnit: number
  isReturned: boolean
}

export interface PharmacyReport {
  itemName: string
  date: Date
  manufacturer: string
  quantitySold: number
}
