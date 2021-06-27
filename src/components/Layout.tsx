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
    if (!loaded)
      (async () => {
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
          className='print:hidden px-4 py-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
          onClick={() => setSidebarOpen(true)}>
          <span className='sr-only'>Open sidebar</span>
          <MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
        </button>

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
