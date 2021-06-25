import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserAddIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import ApiHelper from '../../src/ApiHelper'
import GenerateInvoiceModal from '../../src/components/GenerateInvoiceModal'
import SearchBox from '../../src/components/SearchBox'
import constants from '../../src/const'
import { PharmacyInvoice } from '../../src/models/PharmacyInvoice'
import { PageProps } from '../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const invoices = await ApiHelper.getItem<PharmacyInvoice[]>(
    constants.allinvoices
  )
  if (!invoices) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<PharmacyInvoice[]> = {
    pageContent: invoices,
  }

  return {
    props: { ...pageProps },
    revalidate: 1,
  }
}

const PharmacyInvoicePage: React.FC<PageProps<PharmacyInvoice[]>> = (props) => {
  const { pageContent: pharmacyInvoices } = props
  const [filteredPharmacyInvoices, setFilteredPharmacyInvoices] = useState([
    ...pharmacyInvoices,
  ])
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedPharmacyInvoice, setSelectedPharmacyInvoice] =
    useState<PharmacyInvoice>()

  const addPharmacyInvoice = async (pharmacyInvoice: PharmacyInvoice) => {
    await ApiHelper.postItem<PharmacyInvoice, number>(
      constants.addInvoice,
      pharmacyInvoice
    )

    // refreshData();
  }

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const updatePharmacyInvoice = async (pharmacyInvoice: PharmacyInvoice) => {
    await ApiHelper.postItem<PharmacyInvoice, number>(
      constants.addInvoice,
      pharmacyInvoice
    )

    // refreshData();
  }

  const search = async (a: string) => {
    if ((a?.length ?? 0) == 0) {
      setFilteredPharmacyInvoices([...pharmacyInvoices])
    } else {
      let results = await ApiHelper.getItem<PharmacyInvoice[]>(
        `${constants.searchInvoice}name=${a}`
      )

      setFilteredPharmacyInvoices(results)
    }
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedPharmacyInvoice(undefined)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <SearchBox
          className=''
          placeholderText='search invoices'
          onSearch={search}
          onClear={() => {}}
        />

        {/* <AddPharmacyInvoiceSlideIn
          onSubmit={addPharmacyInvoice}
          onUpdate={updatePharmacyInvoice}
          onClose={() => {}}
          pharmacyInvoice={selectedPharmacyInvoice}
          open={open || selectedPharmacyInvoice != undefined}
          setOpen={closeSlideIn}
        /> */}

        <GenerateInvoiceModal />

        <button
          type='button'
          onClick={() => {
            setOpen(true)
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Add pharmacyInvoice
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
                {filteredPharmacyInvoices.map((pharmacyInvoice) => (
                  <tr
                    onDoubleClick={() => {
                      setSelectedPharmacyInvoice(pharmacyInvoice)
                    }}
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={pharmacyInvoice.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {pharmacyInvoice.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {pharmacyInvoice.patientId}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {pharmacyInvoice.patientName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {pharmacyInvoice.ref_Doctor}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {pharmacyInvoice.totalAmount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {pharmacyInvoice.paymentMode}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {pharmacyInvoice.createdOn.toLocaleString()}
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

export default PharmacyInvoicePage
