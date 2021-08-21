import clsx from 'clsx'
import React from 'react'
import { Appointment } from '../models/Appointment'
import PrintLayout from './PrintLayout'

const PrintConsultationInvoice: React.FC<Appointment> = (props) => {
  return (
    <PrintLayout
      id={props.invoice.id}
      address={props.address}
      amount={props.invoice.amount}
      doctorName={props.doctorName}
      discount={props.invoice.discount}
      invoiceDate={props.invoice.invoiceDate}
      total={props.invoice.invoiceDetail.reduce((a, b) => a + b.price, 0)}
      patientId={props.patientId?.toString() ?? ''}
      patientName={props.patientName}>
      <div className='align-middle inline-block min-w-full'>
        <div className=' overflow-hidden border-b  border-gray-200 sm:rounded-lg'>
          <table className=' min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  <div className='flex'>
                    <span className='inline'>S.No</span>
                  </div>
                </th>
                <th
                  scope='col'
                  className='  px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Item
                </th>
                <th
                  scope='col'
                  className=' px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Price
                </th>
                <th
                  scope='col'
                  className=' px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Discount
                </th>
                <th
                  scope='col'
                  className=' px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Total
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              <tr
                className={clsx(
                  'hover:bg-gray-100 cursor-pointer select-none'
                )}>
                <td className='px-6 py-4 print:py-1 whitespace-nowrap text-sm text-gray-900'>
                  {props.id}
                </td>
                <td className='px-6 py-4 print:py-1 whitespace-nowrap text-sm text-gray-500'>
                  {'Doctor Consultation'}
                </td>
                <td className='px-6 py-4 print:py-1 whitespace-nowrap text-sm text-gray-500'>
                  {props.invoice.price}
                </td>

                <td className='px-6 py-4 print:py-1 whitespace-nowrap text-sm text-gray-500'>
                  {props.invoice.discount}
                </td>
                <td className='px-6 py-4 print:py-1 whitespace-nowrap text-sm text-gray-500'>
                  {props.invoice.amount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PrintLayout>
  )
}

export default PrintConsultationInvoice
