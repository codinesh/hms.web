import {PrinterIcon} from '@heroicons/react/solid'
import React, {PropsWithChildren} from 'react'
import {dateUtils} from '../helpers/JSUtils'
import {useGlobalState} from '../store/GlobalStore'

interface PrintDetails {
  id?: number
  patientName: string
  address: string
  doctorName: string
  invoiceDate: Date
  patientId: string
  discount: number
  hideFooter?: boolean
  title?: string
  total?: number
  nongstinvoice?: boolean
  amount: number
}



const PrintLayout: React.FC<PropsWithChildren<PrintDetails>> = (props) => {
  const {appConfig} = useGlobalState()
  return (
    <div className='border border-black  bg-white w-full h-full flex justify-between items-stretch flex-col'>
      <header className='flex justify-between'>
        <div className=''>
          <h2 className='text-xl font-medium'>Pragathi Hospital</h2>
          <span className='text-sm block'>
            Near Gopal Reddy Statue, Ravi Nagar, Kota,
          </span>
          <span className='text-sm block'>
            Nellore Dt., Andhra Pradesh - 524411
          </span>
          <span className='text-sm block'>
            Phone: {appConfig.contactNumber}
          </span>
        </div>
        <div className=''>
          <h2 className='text-lg font-medium'>
            Patient Name: {props.patientName}
          </h2>
          <span className='text-sm block'>
            Patient Address: {props.address}
          </span>
          {!props.nongstinvoice && (
            <span className='text-sm block'>Bill No.: {props.id}</span>
          )}
          <span className='text-sm block'>Dr Name: {props.doctorName}</span>
          {props.id && (
            <span className='text-sm block'>Invoice Id: {props.id}</span>
          )}
        </div>
      </header>
      <main className='mt-2 flex-grow flex flex-col'>
        <div className='flex items-center border-t justify-between border-b border-black'>
          <div className='text-xs '>
            {!props.nongstinvoice && (
              <>
                <span className='text-md block'>GSTIN: {appConfig.gstin}</span>
                <span className='text-md block'>CIN No: {appConfig.cin}</span>
              </>
            )}
          </div>
          <div>
            <span className='text-lg font-bold '>
              {props.title ?? 'GST INVOICE'}
            </span>
          </div>
          <div>
            <div>
              <span className='text-xs'>
                {!props.nongstinvoice ? `Invoice date:` : 'Report date'}
              </span>
              <span className='text-xs'>
                {dateUtils.geLocalDateTimeString(props.invoiceDate)}
              </span>
            </div>
            <div>
              <span className='text-xs'>Patient Id: </span>
              <span className='text-xs'>{props.patientId}</span>
            </div>
          </div>
        </div>

        <div className=''>{props.children}</div>
        <div className='block absolute top-0 right-10 pt-4 pr-4'>
          <button
            type='button'
            className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={() => window.print()}>
            <span className='sr-only'>Print</span>
            <PrinterIcon className='print:hidden h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </main>
      {!props.hideFooter && (
        <footer className='text-xs font-thin flex border justify-between'>
          <div className='flex flex-col flex-grow border-r'>
            <span className='underline'>Terms & Conditions</span>
            <span className=''>
              Goods once sold will not be taken back or exchanged
            </span>
            <span className=''>
              Bills not paid due date will attract 24% interest
            </span>
            <span className=''>All disputes subject to Jurisdiction only</span>
            <span className=''>
              Presbribed Sales Tax declaration will be given
            </span>
            <span className=''>Remark:</span>
          </div>
          <div className=' flex flex-col justify-between items-center'>
            <div>
              <span className='block'>Sub Total: {props.amount}</span>
              <span>Discount: {props.discount}</span>
            </div>
            <span className='p-2 text-md border-t'>
              Grand Total: {props.total}
            </span>
          </div>
        </footer>
      )}
    </div>
  )
}

export default PrintLayout
