import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserAddIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import ApiHelper from '../../src/ApiHelper'
import AddAppointmentSlideIn from '../../src/components/AddAppointmentSlideIn'
import GenerateConsultationInvoiceSlideIn from '../../src/components/GenerateConsultationinvoiceSlideIn'
import SearchBox from '../../src/components/SearchBox'
import constants from '../../src/const'
import { dateUtils } from '../../src/helpers/JSUtils'
import { AddAppointment, Appointment } from '../../src/models/Appointment'
import { ConsultationInvoice } from '../../src/models/ConsultationInvoice'
import Gender from '../../src/models/Gender'
import HealthCondition from '../../src/models/HealthCondition'
import { PageProps } from '../../src/types/PageProps'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import PrintConsultationInvoice from '../../src/components/PrintConsultationInvoice'
import FullScreenModal from '../../src/components/FullScreenModal'

export const getStaticProps: GetStaticProps = async (context) => {
  const appointments = await ApiHelper.getItems<Appointment>(
    constants.appointmentUrl
  )

  if (!appointments) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<Appointment[]> = {
    pageContent: appointments,
  }

  return {
    props: { ...pageProps },
    revalidate: 1,
  }
}

const AppointmentPage: React.FC<PageProps<Appointment[]>> = (props) => {
  const router = useRouter()
  const { pageContent: appointments } = props
  const [filteredAppointment, setFilteredAppointments] = useState([
    ...appointments,
  ])
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openConsultation, setOpenConsultation] = useState(false)
  const [openPrintPage, setOpenPrintPage] = useState(false)

  const search = async (a: string) => {
    if ((a?.length ?? 0) == 0) {
      setFilteredAppointments([...appointments])
    } else {
      let results = await ApiHelper.getItem<Appointment[]>(
        `${constants.appointmentUrl}${a}`
      )

      setFilteredAppointments(results)
    }
  }

  const addAppointment = async (appointment: AddAppointment) => {
    await ApiHelper.postItem<AddAppointment, number>(
      `${constants.addAppointmentUrl}`,
      appointment
    )
  }

  const editAppointment = async (appointment: AddAppointment) => {
    await ApiHelper.postItem<AddAppointment, number>(
      `${constants.updateAppointmentUrl}`,
      appointment
    )
  }

  const addConsultationInvoice = async (
    consultationInvoice: ConsultationInvoice
  ) => {
    await ApiHelper.postItem<ConsultationInvoice, number>(
      constants.createConsultationInvoice,
      consultationInvoice
    )
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedAppointment(undefined)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex  justify-between items-center'>
        <SearchBox
          className=''
          placeholderText='search appointments'
          onSearch={(a: string) => {
            search(a)
            return { id: a }
          }}
          onClear={() => {}}
        />
        <button
          type='button'
          onClick={() => {
            setOpen(true)
          }}
          className='flex-shrink inline-flex  justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:w-auto sm:text-sm'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Appointment
        </button>

        <AddAppointmentSlideIn
          onSubmit={async (a) => {
            await addAppointment(a)
          }}
          onUpdate={editAppointment}
          onClose={() => {}}
          appointment={
            selectedAppointment != undefined
              ? {
                  patientId: selectedAppointment?.patientId,
                  doctorId: selectedAppointment?.doctorId,
                  id: selectedAppointment.id,
                  appointmentDate: selectedAppointment.appointmentDate,
                }
              : undefined
          }
          open={open}
          setOpen={closeSlideIn}
        />

        {selectedAppointment && (
          <GenerateConsultationInvoiceSlideIn
            open={openConsultation}
            appointment={selectedAppointment}
            setOpen={(open) => setOpenConsultation(open)}
            onSubmit={async (invoice) => {
              try {
                await addConsultationInvoice(invoice)
              } catch (error) {
                throw error
              }

              setOpen(false)
            }}
          />
        )}

        <FullScreenModal
          onClose={() => {
            setOpenPrintPage(false)
          }}
          open={openPrintPage}>
          {selectedAppointment?.invoice && (
            <PrintConsultationInvoice
              {...selectedAppointment}></PrintConsultationInvoice>
          )}
        </FullScreenModal>
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
                    className=' hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Patient name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Doctor name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    gender
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Contact number
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Appointment time
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Health conditions
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredAppointment.map((appointment) => (
                  <tr
                    onDoubleClick={() => {
                      setSelectedAppointment(appointment)
                      setOpen(true)
                    }}
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={appointment.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {appointment.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.patientName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.doctorName}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {Gender[appointment.patientGender]}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {dateUtils.geLocalDateTimeString(
                        appointment.appointmentDate
                      )}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.healthConditions &&
                        appointment.healthConditions.map((x) => (
                          <span
                            key={x}
                            className=' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 text-opacity-75'>
                            {HealthCondition[x]}
                          </span>
                        ))}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.invoice ? (
                        <button
                          type='button'
                          onClick={() => {
                            setSelectedAppointment(appointment)
                            setOpenPrintPage(true)
                          }}
                          className='text-center inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          Print invoice
                        </button>
                      ) : (
                        <button
                          type='button'
                          onClick={() => {
                            setSelectedAppointment(appointment)

                            setOpenConsultation(!openConsultation)
                          }}
                          className='text-center inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          Generate invoice
                        </button>
                      )}
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

export default AppointmentPage
