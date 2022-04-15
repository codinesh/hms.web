import {MenuAlt2Icon} from '@heroicons/react/outline'
import React, {useEffect, useState} from 'react'
import ApiHelper from '../ApiHelper'
import constants from '../const'
import Doctor, {AppConfig} from '../models/Doctor'
import Patient from '../models/Patient'
import {GlobalStateAction, useGlobalDispatch} from '../store/GlobalStore'
import {
  LoadingStateAction,
  useLoadingDispatch,
  useLoadingState
} from '../store/LoadingStore'
import LoadingIndicator from './LoadingIndicator'
import Page from './Page'
import Sidebar from './Sidebar'

const Layout: React.FC<any> = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const globalDispatch = useGlobalDispatch()
  const [loaded, setloaded] = useState(false)
  const loadingState = useLoadingState()
  const dispatch = useLoadingDispatch()

  useEffect(() => {
    if (!loaded)
      (async () => {
        dispatch({type: LoadingStateAction.Busy})
        const doctorsT = ApiHelper.getItems<Doctor>(constants.doctorUrl)
        const patientsT = ApiHelper.getItems<Patient>(constants.patientUrl)
        const configT = ApiHelper.getItem<AppConfig>(constants.configUrl)

        let res = await Promise.all([
          doctorsT,
          patientsT,
          configT,
        ])
        dispatch({type: LoadingStateAction.Idle})
        setloaded(true)
        globalDispatch({type: GlobalStateAction.Doctors, doctors: res[0]})
        globalDispatch({type: GlobalStateAction.Patients, patients: res[1]})
        globalDispatch({type: GlobalStateAction.AppConfig, config: res[2]})
      })()
  }, [])

  return (
    <>
      <LoadingIndicator open={loadingState.inProgress} />
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
    </>
  )
}

export default Layout
