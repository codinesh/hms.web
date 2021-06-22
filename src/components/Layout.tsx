import React, { useEffect, useState } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import Sidebar from './Sidebar'
import Page from './Page'
import Image from 'next/image'
import { GlobalStateAction, useGlobalDispatch } from '../store/GlobalStore'
import ApiHelper from '../ApiHelper'
import Doctor from '../models/Doctor'
import Patient from '../models/Patient'
import constants from '../const'

const Layout: React.FC = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const globalDispatch = useGlobalDispatch()
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    console.log('layout')
    if (!loaded)
      (async () => {
        console.log('async layout')

        const doctorsT = ApiHelper.getItem<Doctor[]>(constants.doctorUrl)
        const patientsT = ApiHelper.getItem<Patient[]>(constants.patientUrl)

        let res = await Promise.all<Doctor[], Patient[]>([doctorsT, patientsT])
        setloaded(true)
        globalDispatch({ type: GlobalStateAction.Doctors, doctors: res[0] })
        globalDispatch({ type: GlobalStateAction.Patients, patients: res[1] })
      })()
  }, [])

  return (
    <div className='flex h-screen overflow-hidden bg-gray-100'>
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <button
          className='px-4 py-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
          onClick={() => setSidebarOpen(true)}>
          <span className='sr-only'>Open sidebar</span>
          <MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
        </button>

        {/* print only */}
        <div className='hidden print:flex w-full flex-col px-4 py-4'>
          <header className=' print:flex items-center'>
            <Image
              className='fixed left-0 '
              width={140}
              height={140}
              src='/logo.png'
              alt='logo'
            />
            <div className='mx-auto'>
              <h2 className='text-3xl font-medium'>Pragathi Hospital</h2>
              <span className='text-sm'>Tirupati, addressline1</span>
              <span className='text-sm'>Tirupati, addressline2</span>
              <div className='mt-6'>
                <span className='text-md'>GSTIN: 123456789</span>
                <span className='text-md'>
                  CIN No: 789456123145679846312132
                </span>
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

        <main className='relative flex-1 overflow-y-auto focus:outline-none'>
          <div className='py-6'>
            <Page>{props.children}</Page>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
