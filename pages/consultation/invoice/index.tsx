import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserAddIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import ApiHelper from '../../../src/ApiHelper'
import GenerateConsultationInvoiceModal from '../../../src/components/GenerateConsultationInvoiceModal'
import PrintInvoice from '../../../src/components/PrintInvoice'
import SearchBox from '../../../src/components/SearchBox'
import constants from '../../../src/const'
import { dateUtils } from '../../../src/helpers/JSUtils'
import { ConsultationInvoice } from '../../../src/models/ConsultationInvoice'
import { PaymentMode } from '../../../src/models/PaymentMode'
import { PageProps } from '../../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const invoices = await ApiHelper.getItem<ConsultationInvoice[]>(
    constants.allinvoices
  )
  if (!invoices) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<ConsultationInvoice[]> = {
    pageContent: invoices,
  }

  return {
    props: { ...pageProps },
    revalidate: 1,
  }
}

const ConsultationInvoicePage: React.FC<PageProps<ConsultationInvoice[]>> = (
  props
) => {
  const { pageContent: consultationInvoices } = props
  const [filteredConsultationInvoices, setFilteredConsultationInvoices] =
    useState([...consultationInvoices])
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedConsultationInvoice, setSelectedConsultationInvoice] =
    useState<ConsultationInvoice>()

  const addConsultationInvoice = async (
    consultationInvoice: ConsultationInvoice
  ) => {
    await ApiHelper.postItem<ConsultationInvoice, number>(
      constants.addInvoice,
      consultationInvoice
    )

    refreshData()
  }

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const search = async (a: string) => {
    if ((a?.length ?? 0) == 0) {
      setFilteredConsultationInvoices([...consultationInvoices])
    } else {
      let results = await ApiHelper.getItem<ConsultationInvoice[]>(
        `${constants.searchInvoice}name=${a}`
      )

      setFilteredConsultationInvoices(results)
    }
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedConsultationInvoice(undefined)
  }

  return (
    <>
      {!open && <PrintInvoice />}

      <div className='print:hidden flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <SearchBox
            className=''
            placeholderText='search invoices'
            onSearch={search}
            onClear={() => {}}
          />

          <GenerateConsultationInvoiceModal
            open={open}
            setOpen={(open) => setOpen(open)}
            onSubmit={async (invoice) => {
              try {
                await addConsultationInvoice(invoice)
              } catch (error) {
                throw error
              }

              setOpen(false)
            }}
          />

          <button
            type='button'
            onClick={() => {
              setOpen(true)
            }}
            className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
            <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
            Add consultationInvoice
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
                        <span className='inline'>Invoice Id</span>
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
                      Patient Id
                    </th>
                    <th
                      scope='col'
                      className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Patient name
                    </th>
                    <th
                      scope='col'
                      className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Referring doctor
                    </th>
                    <th
                      scope='col'
                      className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Payment mode
                    </th>
                    <th
                      scope='col'
                      className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Invoice date
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {filteredConsultationInvoices.map((consultationInvoice) => (
                    <tr
                      onDoubleClick={() => {
                        setSelectedConsultationInvoice(consultationInvoice)
                        router.push(
                          `/consultation/invoice/${consultationInvoice.id}`
                        )
                      }}
                      className={clsx(
                        'hover:bg-gray-100 cursor-pointer select-none'
                      )}
                      key={consultationInvoice.id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                        {consultationInvoice.id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {consultationInvoice.patientId}
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {consultationInvoice.refDoctor}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {consultationInvoice.totalAmount}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {PaymentMode[consultationInvoice.paymentMode]}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {dateUtils.geLocalDateTimeString(
                          consultationInvoice.createdOn
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
    </>
  )
}

export default ConsultationInvoice
