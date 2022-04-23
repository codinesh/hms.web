import {
  ArrowDownIcon,
  ArrowUpIcon,
  PrinterIcon,
  UserAddIcon
} from '@heroicons/react/outline'
import clsx from 'clsx'
import {GetStaticProps} from 'next'
import {useRouter} from 'next/dist/client/router'
import React, {useState} from 'react'
import ApiHelper from '../../../src/ApiHelper'
import FullScreenModal from '../../../src/components/FullScreenModal'
import GenerateInvoiceModal from '../../../src/components/GenerateInvoiceModal'
import PrintInvoice from '../../../src/components/PrintInvoice'
import SearchBox from '../../../src/components/SearchBox'
import constants from '../../../src/const'
import {dateUtils} from '../../../src/helpers/JSUtils'
import {PaymentMode} from '../../../src/models/PaymentMode'
import {PharmacyInvoice} from '../../../src/models/PharmacyInvoice'
import {
  LoadingStateAction,
  useLoadingDispatch
} from '../../../src/store/LoadingStore'
import {PageProps} from '../../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const invoices = await ApiHelper.getItems<PharmacyInvoice>(
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
    props: {...pageProps},
    revalidate: 1,
  }
}

const PharmacyInvoicePage: React.FC<PageProps<PharmacyInvoice[]>> = (props) => {
  const {pageContent: pharmacyInvoices} = props
  const [filteredPharmacyInvoices, setFilteredPharmacyInvoices] = useState([
    ...pharmacyInvoices,
  ])
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openPrintPage, setOpenPrintPage] = useState(false)
  const [selectedPharmacyInvoice, setSelectedPharmacyInvoice] =
    useState<PharmacyInvoice>()
  const dispatch = useLoadingDispatch()

  const addPharmacyInvoice = async (pharmacyInvoice: PharmacyInvoice) => {
    dispatch({type: LoadingStateAction.Busy})
    await ApiHelper.postItem<PharmacyInvoice, number>(
      constants.addInvoice,
      pharmacyInvoice
    )
    dispatch({type: LoadingStateAction.Idle})

    refreshData()
  }

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const search = async (a: string) => {
    if ((a?.length ?? 0) == 0) {
      setFilteredPharmacyInvoices([...pharmacyInvoices])
    } else {
      dispatch({type: LoadingStateAction.Busy})
      let results = await ApiHelper.getItems<PharmacyInvoice>(
        `${constants.searchInvoice}nameOrId=${a}`
      )
      dispatch({type: LoadingStateAction.Idle})

      setFilteredPharmacyInvoices(results)
    }
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedPharmacyInvoice(undefined)
  }

  return (
    <>
      <FullScreenModal
        onClose={() => {
          setOpenPrintPage(false)
        }}
        open={openPrintPage}>
        {selectedPharmacyInvoice && (
          <PrintInvoice {...selectedPharmacyInvoice}></PrintInvoice>
        )}
      </FullScreenModal>
      <GenerateInvoiceModal
        open={open}
        setOpen={(open) => setOpen(open)}
        onSubmit={async (invoice) => {
          try {
            await addPharmacyInvoice(invoice)
          } catch (error) {
            throw error
          }

          setOpen(false)
        }}
      />

      <div className='print:hidden flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <SearchBox
            className=''
            placeholderText='search invoices'
            onSearch={search}
            onClear={() => { }}
          />

          <button
            type='button'
            onClick={() => {
              setOpen(true)
            }}
            className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
            <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
            Add Pharmacy Invoice
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
                        // router.push(`/pharmacy/invoice/${pharmacyInvoice.id}`)
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
                        {pharmacyInvoice.refDoctor}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {pharmacyInvoice.roundedOffAmount}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {PaymentMode[pharmacyInvoice.paymentMode]}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {dateUtils.geLocalDateTimeString(
                          pharmacyInvoice.createdOn
                        )}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        <button
                          type='button'
                          onClick={() => {
                            setSelectedPharmacyInvoice(pharmacyInvoice)
                            setOpenPrintPage(true)
                          }}
                          className='text-center w-5 h-5'>
                          <PrinterIcon className='' />
                        </button>
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

export default PharmacyInvoicePage
