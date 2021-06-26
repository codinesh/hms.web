import React from 'react'

const PrintInvoice = () => {
  return (
    <div>
      {/* print only */}
      <div className='hidden bg-white print:flex w-full flex-col px-4'>
        <header className=' print:flex items-center'>
          {/* <Image
                className='fixed left-0 '
                width={140}
                height={140}
                src='/logo.png'
                alt='logo'
              /> */}
          <div className='mx-auto'>
            <h2 className='text-3xl font-medium'>Pragathi Hospital</h2>
            <span className='text-sm'>Tirupati, addressline1</span>
            <span className='text-sm'>Tirupati, addressline2</span>
            <div className='mt-6'>
              <span className='text-md'>GSTIN: 123456789</span>
              <span className='text-md'>CIN No: 789456123145679846312132</span>
            </div>
            <h1 className='text-3xl font-medium mt-4'>Tax Invoice</h1>
          </div>
        </header>
        <main className='mt-6 flex flex-col'>
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
            <div className='flex py-4 justify-center  flex-col border-b-2 border-r-2 border-black pb-4'>
              <span className='font-bold'>Sold to: </span>
              <span>Name & Address: Name of Patient </span>
              <span>Contact Number: 123456789</span>
              <span>State Name & Code: AndhraPradesh & 123 </span>
              <span>GST Number: </span>
              <span>PAN: </span>
              <span>Aadhaar :</span>
            </div>
            <div className='flex-grow border-b-2 border-black '></div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PrintInvoice
{
  /* print only */
}
;<div className='hidden print:flex w-full flex-col px-4 py-4'>
  <header className=' print:flex items-center'>
    {/* <Image
                className='fixed left-0 '
                width={140}
                height={140}
                src='/logo.png'
                alt='logo'
              /> */}
    <div className='mx-auto'>
      <h2 className='text-3xl font-medium'>Pragathi Hospital</h2>
      <span className='text-sm'>Tirupati, addressline1</span>
      <span className='text-sm'>Tirupati, addressline2</span>
      <div className='mt-6'>
        <span className='text-md'>GSTIN: 123456789</span>
        <span className='text-md'>CIN No: 789456123145679846312132</span>
      </div>
      <h1 className='text-3xl font-medium mt-4'>Tax Invoice</h1>
    </div>
  </header>
  <main className='mt-6 flex flex-col'>
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
      <div className='flex py-4 justify-center  flex-col border-b-2 border-r-2 border-black pb-4'>
        <span className='font-bold'>Sold to: </span>
        <span>Name & Address: Name of Patient </span>
        <span>Contact Number: 123456789</span>
        <span>State Name & Code: AndhraPradesh & 123 </span>
        <span>GST Number: </span>
        <span>PAN: </span>
        <span>Aadhaar :</span>
      </div>
      <div className='flex-grow border-b-2 border-black '></div>
    </div>
  </main>
</div>
