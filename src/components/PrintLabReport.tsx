import clsx from 'clsx'
import React from 'react'
import { LabInvoice } from '../models/LabInvoice'
import PrintLayout from './PrintLayout'

const PrintLabReport: React.FC<LabInvoice> = (props) => {
  let index = 1
  return (
    <PrintLayout
      hideFooter={true}
      address={'TPTY'}
      amount={props.amount}
      title='LAB REPORT'
      id={props.id}
      nongstinvoice={true}
      discount={props.discount}
      doctorName={props.refDoctor}
      invoiceDate={props.invoiceDate}
      patientId={props.patientId?.toString() ?? ''}
      patientName={props.patientName}>
      <div className='align-middle inline-block min-w-full '>
        <div className=' overflow-hidden border-b  border-gray-200 sm:rounded-lg'>
          <table className=' min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  <span className='inline'>S.No</span>
                </th>
                <th
                  scope='col'
                  className='  px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Test
                </th>
                <th
                  scope='col'
                  className='  px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Result
                </th>
                <th
                  scope='col'
                  className='  px-6 py-3 print:py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Reference range
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {props.invoiceDetail.map((invoicedetail) =>
                invoicedetail.labTestRecord.labTestResult.map((x) => (
                  <tr
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}>
                    <td className='px-6 py-4  print:py-1 whitespace-nowrap text-sm text-gray-900'>
                      {index++}
                    </td>
                    <td className='px-6 py-4  print:py-1 whitespace-nowrap text-sm text-gray-900'>
                      {invoicedetail.testName}
                    </td>
                    <td className='px-6 py-4  print:py-1 whitespace-nowrap text-sm text-gray-900'>
                      {x.result}
                    </td>
                    <td className='px-6 py-4  print:py-1 whitespace-nowrap text-sm text-gray-900'>
                      {x.referenceRange}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </PrintLayout>
  )
}

export default PrintLabReport
