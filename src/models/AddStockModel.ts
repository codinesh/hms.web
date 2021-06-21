export default interface AddStockModel {
  id: number    
  itemName: string
  measuringUnit: string
  drugName: string
  hsnCode: number
  schedule?: string
  manufacturer: string
  batchNo: string
  expiryDate: Date
  totalQuantityProcured: number
  totalQuantityAvailable: number
  numberOfStrips: number
  freeStrips: number
  quantityPerStrip: number
  mrpPerStrip: number
  mrpPerUnit: number
  ratePerStrip: number
  ratePerUnit: number
  discountPercent: number
  cgstPercent: number
  sgstPercent: number
  isReturned: boolean
}
