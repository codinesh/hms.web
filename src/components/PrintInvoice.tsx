import React from 'react'
import { dateUtils } from '../helpers/JSUtils'
import Gender from '../models/Gender'
import { PaymentMode } from '../models/PaymentMode'
import { PharmacyInvoice } from '../models/PharmacyInvoice'
import PrintLayout from './PrintLayout'

const PrintInvoice: React.FC<PharmacyInvoice> = (props) => {
  return (
    <>
      <PrintLayout>
        <>
          <div className='print:overflow-hidden flex flex-col'>
            <div className='align-middle inline-block w-full '>
              <div className='overflow-hidden border border-gray-200 sm:rounded-lg'>
                <table className='print:overflow-hidden print:bg-white  divide-y divide-gray-200'>
                  <thead className=''>
                    <tr className='divide-x divide-gray-300'>
                      <th
                        scope='col'
                        className='px-1 w-6  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Medicine
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Unit
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        HSN
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Sch
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Batch
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Exp
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Mfg.
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        QTY
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        MRP
                      </th>
                      <th
                        scope='col'
                        className='px-1 w-4  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props?.pharmacyInvoiceMedicines &&
                      props.pharmacyInvoiceMedicines.map((medicine, idx) => (
                        <tr
                          key={medicine.itemName}
                          className='divide-x divide-gray-300'
                          onDoubleClick={() => {}}>
                          <td className='px-1  w-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            {medicine.itemName}
                          </td>
                          <td className='px-1 w-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            {medicine.measuringUnit}
                          </td>
                          <td className='px-1 w-3  py-4 whitespace-nowrap text-sm text-gray-500'>
                            {medicine.hsnCode}
                          </td>
                          <td className='px-1 w-3 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {medicine.schedule}
                          </td>
                          <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {medicine.batchNo}
                          </td>
                          <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {dateUtils.geLocalDateString(medicine.expiryDate)}
                          </td>
                          <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {medicine.manufacturer}
                          </td>
                          <td className='px-1 w-3 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {medicine.quantity}
                          </td>
                          <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {medicine.mrp}
                          </td>
                          <td className='px-1 w-4 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            {medicine.amount}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <section className='flex flex-col justify-end items-end px-4 py-4'>
                <div>Discount: {props.discountAmount}</div>
                <div className='font-bold'>Total: {props.roundedOffAmount}</div>
              </section>
            </div>
          </div>
        </>
      </PrintLayout>
    </>
  )
}

export default PrintInvoice
