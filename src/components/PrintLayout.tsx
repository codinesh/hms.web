import React, { useEffect } from 'react'
import Image from 'next/image'
import { PrinterIcon } from '@heroicons/react/solid'

const PrintLayout: React.FC = (props) => {
  useEffect(() => {
    // setTimeout(() => {
    //   window.print()
    // }, 5000)
  })
  return (
    <div className='px-4 bg-white w-full h-full flex justify-between flex-col'>
      <header className='flex text-center justify-center items-center'>
        <Image
          className='fixed left-0 '
          width={140}
          height={140}
          src='/logo.png'
          alt='logo'
        />

        <div className='mx-auto'>
          <h2 className='text-3xl font-medium'>Pragathi Hospital</h2>
          <span className='text-sm block'>
            Near Gopal Reddy Statue, Ravi Nagar, Kota,
          </span>
          <span className='text-sm block'>
            Nellore Dt., Andhra Pradesh - 524411
          </span>

          <div className='mt-6'>
            <span className='text-md'>GSTIN: 123456789</span>
            <span className='text-md'>CIN No: 789456123145679846312132</span>
          </div>
          <h1 className='text-3xl font-medium mt-4'>Tax Invoice</h1>
        </div>
      </header>
      <main className='mt-6 flex-grow flex flex-col'>
        <div className='flex border-t-2 justify-between border-b-2 py-2 border-black'>
          <div>
            <span className='text-md font-bold'>Invoice Number: </span>
            <span>OPH12353249</span>
          </div>
          <div>
            <span className='text-md font-bold'>Invoice Date: </span>
            <span>2021-01-17 16:54</span>
          </div>
          <div>
            <span className='text-md font-bold'>Patient Id: </span>
            <span>Random Id</span>
          </div>
        </div>
        <div className='flex '>
          <div className='flex py-4 text-left   flex-col border-b-2 border-r-2 border-black pb-4'>
            <span className='font-bold'>Sold to: </span>
            <span>Name & Address: Name of Patient </span>
            <span>Contact Number: 123456789</span>
            <span>State Name & Code: AndhraPradesh & 123 </span>
            <span>GST Number: </span>
            <span>PAN: </span>
            <span>Aadhaar :</span>
          </div>
          <div className='flex-grow border-b-2 border-black'></div>
        </div>

        <div className='mt-4'>{props.children}</div>
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
      <footer className='mt-8 border-t-2 border-dashed'></footer>
    </div>
  )
}

export default PrintLayout
