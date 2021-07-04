import clsx from 'clsx'
import React from 'react'
import { LabInvoice } from '../models/LabInvoice'
import PrintLayout from './PrintLayout'

const PrintLabInvoice: React.FC<LabInvoice> = (props) => {
  return (
    <PrintLayout
      address={'TPTY'}
      amount={props.amount}
      discount={props.discount}
      doctorName={props.refDoctor}
      invoiceDate={props.invoiceDate}
      patientId={props.patientId?.toString() ?? ''}
      total={props.invoiceDetail.reduce((a, b) => a + b.price, 0)}
      patientName={props.patientName}>
      <div className='align-middle inline-block min-w-full '>
        <div className=' overflow-hidden border-b  border-gray-200 sm:rounded-lg'>
          <table className=' min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  <div className='flex'>
                    <span className='inline'>S.No</span>
                  </div>
                </th>
                <th
                  scope='col'
                  className='  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Item
                </th>
                <th
                  scope='col'
                  className=' px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Price
                </th>
                <th
                  scope='col'
                  className=' px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Discount
                </th>
                <th
                  scope='col'
                  className=' px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Total
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {props.invoiceDetail.map((invoicedetail) => (
                <tr
                  className={clsx(
                    'hover:bg-gray-100 cursor-pointer select-none'
                  )}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                    {invoicedetail.id}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {invoicedetail.testName}
                  </td>
                  <td className='px-6 py-4 whitespace-n owrap text-sm text-gray-500'>
                    {invoicedetail.price}
                  </td>

                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {invoicedetail.service}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {invoicedetail.sacCode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrintLayout>
  )
}

export default PrintLabInvoice
