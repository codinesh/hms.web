import {
  ArrowDownIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/outline'
import { ArrowUpIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import ApiHelper from '../../src/ApiHelper'
import AddPatientSlideIn from '../../src/components/AddPatientSlideIn'
import SearchBox from '../../src/components/SearchBox'
import constants from '../../src/const'
import Gender from '../../src/models/Gender'
import Patient from '../../src/models/Patient'
import { PageProps } from '../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const patients = await ApiHelper.getItem<Patient[]>(constants.patientUrl)
  if (!patients) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<Patient[]> = {
    pageContent: patients,
  }

  return {
    props: { ...pageProps },
    revalidate: 1,
  }
}

const PatientPage: React.FC<PageProps<Patient[]>> = (props) => {
  const { pageContent: patients } = props
  const [filteredPatients, setFilteredPatients] = useState([...patients])
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)

  const addPatient = async (patient: Patient) => {
    await ApiHelper.postItem<Patient, number>(constants.addPatientUrl, patient)

    refreshData()
  }

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const search = async (a: string) => {
    let results = await ApiHelper.getItem<Patient[]>(
      `${constants.patientSearchUrl}${a}`
    )

    setFilteredPatients(results)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <SearchBox
          className=''
          placeholderText='search patients'
          onSearch={search}
          onClear={() => {}}
        />

        <AddPatientSlideIn
          onSubmit={addPatient}
          onClose={async () => {}}
          open={open}
          setOpen={setOpen}
        />

        <button
          type='button'
          onClick={() => {
            setOpen(true)
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Add patient
        </button>
      </div>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className=' py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className=' min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    <div className='flex'>
                      <span className='inline'>Id</span>
                      {loading ? (
                        <ArrowUpIcon className='inline' width='16' />
                      ) : (
                        <ArrowDownIcon className='inline' width='16' />
                      )}
                    </div>
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Phone Number
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Age
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredPatients.map((patient) => (
                  <tr
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={patient.id}
                    onDoubleClick={(e) => {
                      setloading(true)
                      router.push(`/patient/${patient.id}`)
                    }}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {patient.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.fullName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.age}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {Gender[patient.gender]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientPage
