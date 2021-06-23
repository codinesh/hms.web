import {
  ArrowDownIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import { ArrowUpIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import ApiHelper from '../../src/ApiHelper'
import SearchBox from '../../src/components/SearchBox'
import constants from '../../src/const'
import Doctor from '../../src/models/Doctor'
import Gender from '../../src/models/Gender'
import { PageProps } from '../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const doctors = await ApiHelper.getItem<Doctor[]>(constants.doctorUrl)

  if (!doctors) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<Doctor[]> = {
    pageContent: doctors,
  }

  return {
    props: { ...pageProps },
  }
}

const DoctorPage: React.FC<PageProps<Doctor[]>> = (props) => {
  const { pageContent: doctors } = props
  const [filteredDoctors, setFilteredDoctors] = useState([...doctors])
  const router = useRouter()
  const [loading, setloading] = useState(false)

  const search = (a: string) => {
    setFilteredDoctors(doctors.filter((d) => !d.fullName.search(a)))
  }
  return (
    <div className='flex flex-col'>
      <SearchBox
        className='pb-4'
        placeholderText='search doctors'
        onSearch={(a: string) => {
          search(a)
          return { id: a }
        }}
        onClear={() => {}}
      />

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
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredDoctors.map((doctor) => (
                  <tr
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={doctor.id}
                    onDoubleClick={(e) => {
                      setloading(true)
                      router.push(`/doctor/${doctor.id}`)
                    }}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {doctor.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {doctor.fullName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {doctor.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {doctor.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {doctor.age}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {Gender[doctor.gender]}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a
                        href={`/doctor/${doctor.id}`}
                        className='text-gray-600 bg-red-300 hover:text-indigo-900'>
                        <TrashIcon className='w-5 h-5 ' aria-hidden='true' />
                      </a>
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

export default DoctorPage
