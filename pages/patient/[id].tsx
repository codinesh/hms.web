import React, { useState } from 'react'
import Patient from '../../src/models/Patient'
import { PaperClipIcon, PencilIcon, UserAddIcon } from '@heroicons/react/solid'
import { GetStaticProps } from 'next'
import constants from '../../src/const'
import ApiHelper from '../../src/ApiHelper'
import AddPatientSlideIn from '../../src/components/AddPatientSlideIn'
import HealthCondition from '../../src/models/HealthCondition'
import { useRouter } from 'next/dist/client/router'
import {
  LoadingStateAction,
  useLoadingDispatch,
} from '../../src/store/LoadingStore'

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(
    `${constants.baseApiUrl}${constants.patientByIdUrl}${context.params.id}`
  )

  const patient: Patient = await res.json()

  if (!patient) {
    return {
      notFound: true,
    }
  }

  return {
    props: { patient },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${constants.baseApiUrl}${constants.patientUrl}`)
  const patients: Patient[] = await res.json()

  if (!patients) {
    return {
      notFound: true,
    }
  }

  return {
    paths: patients.map((p) => ({
      params: {
        id: p.id.toString(),
      },
    })),
    fallback: true,
  }
}

const PatientDetail: React.FC<{ patient: Patient }> = (props) => {
  const { patient } = props
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const dispatch = useLoadingDispatch()

  const editPatientUrl = async (patientToEdit: Patient) => {
    dispatch({ type: LoadingStateAction.Busy })
    var response = await ApiHelper.postItem<Patient, number>(
      constants.editPatientUrl,
      patientToEdit
    )
    dispatch({ type: LoadingStateAction.Idle })
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button
        type='button'
        onClick={() => {
          setOpen(true)
        }}
        className='mb-3 flex-shrink inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-indigo-500
        sm:ml-3 sm:w-auto sm:text-sm'>
        <PencilIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
        Edit
      </button>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Patient Details
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Personal details and appointments.
          </p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
          <dl className='sm:divide-y sm:divide-gray-200'>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Full name</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {patient.fullName}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Contact number
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {patient.contactNumber}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Email address
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {patient.email}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Age</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {`${patient.age} Years, ${patient.ageInMonths} Months`}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Medical history
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {patient.medicalHistory}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Medical history
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {patient.address}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Health conditions
              </dt>
              <dd className='mt-1 text-sm flex gap-1 text-gray-900 sm:mt-0 sm:col-span-2'>
                {patient.healthConditions &&
                  patient.healthConditions.map((x) => (
                    <span
                      key={x}
                      className=' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 text-opacity-75'>
                      {HealthCondition[x]}
                    </span>
                  ))}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                  <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                    <div className='w-0 flex-1 flex items-center'>
                      <PaperClipIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-2 flex-1 w-0 truncate'>
                        Lab Report 1
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Download
                      </a>
                    </div>
                  </li>
                  <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                    <div className='w-0 flex-1 flex items-center'>
                      <PaperClipIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-2 flex-1 w-0 truncate'>
                        prescription.pdf
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <AddPatientSlideIn
        onSubmit={editPatientUrl}
        patient={patient}
        onClose={async () => {}}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default PatientDetail
