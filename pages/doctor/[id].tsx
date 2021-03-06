import React from 'react'
import Doctor from '../../src/models/Doctor'
import { PaperClipIcon } from '@heroicons/react/solid'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import constants from '../../src/const'
import { useRouter } from 'next/dist/client/router'

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) {
    return {
      notFound: true,
    }
  }
  const res = await fetch(
    `${constants.baseApiUrl}${constants.doctorByIdUrl}${context.params.id}`
  )

  const doctor: Doctor = await res.json()

  if (!doctor) {
    return {
      notFound: true,
    }
  }

  return {
    props: { doctor },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch(`${constants.baseApiUrl}${constants.doctorUrl}`)
    const doctors: any[] = await res.json()
    return {
      paths: doctors.map((p) => ({
        params: {
          id: p.id.toString(),
        },
      })),
      fallback: true,
    }
  } catch (error) {
    console.error(error)
  }

  return {
    notFound: true,
  }
}

const DoctorDetail: React.FC<{ doctor: Doctor }> = (props) => {
  const { doctor } = props
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>
          Doctor Details
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
              {doctor.fullName}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Contact number
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {doctor.contactNumber}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Registration number
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {doctor.registrationNo}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {doctor.email}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Age</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {doctor.experience}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Department</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {doctor.department.name}
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Qualification</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {doctor.qualification}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default DoctorDetail
