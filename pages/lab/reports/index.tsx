import {
  ArrowDownIcon,
  ArrowUpIcon,
  PrinterIcon,
  UserAddIcon,
} from '@heroicons/react/outline'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import ApiHelper from '../../../src/ApiHelper'
import SearchBox from '../../../src/components/SearchBox'
import constants from '../../../src/const'
import Gender from '../../../src/models/Gender'
import { PageProps } from '../../../src/types/PageProps'
import { useRouter } from 'next/dist/client/router'
import PrintLabInvoice from '../../../src/components/PrintLabInvoice'
import FullScreenModal from '../../../src/components/FullScreenModal'
import {
  AddLabInvoice,
  LabInvoice,
  LabTest,
} from '../../../src/models/LabInvoice'
import GenerateLabInvoiceModal from '../../../src/components/GeneralteLabInvoiceModal'
import {
  LoadingStateAction,
  useLoadingDispatch,
} from '../../../src/store/LoadingStore'
import { dateUtils } from '../../../src/helpers/JSUtils'
import PrintLabReport from '../../../src/components/PrintLabReport'

export const getStaticProps: GetStaticProps = async (context) => {
  const labInvoices = await ApiHelper.getItems<LabInvoice>(
    constants.allLabinvoices
  )

  if (!labInvoices) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<LabInvoice[]> = {
    pageContent: labInvoices,
  }

  return {
    props: { ...pageProps },
    revalidate: 1,
  }
}

const LabReportsPage: React.FC<PageProps<LabInvoice[]>> = (props) => {
  const router = useRouter()
  const { pageContent: labInvoices } = props
  const [filteredLabInvoice, setFilteredLabInvoices] = useState([
    ...labInvoices,
  ])
  const [tests, setTests] = useState<LabTest[]>([])

  const [selectedLabInvoice, setSelectedLabInvoice] = useState<LabInvoice>()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openPrintPage, setOpenPrintPage] = useState(false)
  const dispatch = useLoadingDispatch()

  useEffect(() => {
    ;(async () => {
      dispatch({ type: LoadingStateAction.Busy })
      const tests = await ApiHelper.getItems<LabTest>(constants.labTests)
      dispatch({ type: LoadingStateAction.Idle })
      setTests(tests)
    })()
  }, [])

  const search = async (a: string) => {
    if ((a?.length ?? 0) == 0) {
      setFilteredLabInvoices([...labInvoices])
    } else {
      dispatch({ type: LoadingStateAction.Busy })
      let results = await ApiHelper.getItems<LabInvoice>(
        `${constants.labInvoiceById}${a}`
      )
      dispatch({ type: LoadingStateAction.Idle })

      setFilteredLabInvoices(results)
    }
  }

  const addLabInvoice = async (labAddInvoice: AddLabInvoice) => {
    try {
      dispatch({ type: LoadingStateAction.Busy })
      let labInvoice = await ApiHelper.postItem<AddLabInvoice, LabInvoice>(
        `${constants.labAddInvoice}`,
        labAddInvoice
      )
      dispatch({ type: LoadingStateAction.Idle })

      setFilteredLabInvoices([...labInvoices, labInvoice])
    } catch (error) {}
    setOpen(false)
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedLabInvoice(undefined)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <SearchBox
            className='pb-4'
            placeholderText='search lab reports'
            onSearch={(a: string) => {
              search(a)
              return { id: a }
            }}
            onClear={() => {}}
          />
        </div>

        <GenerateLabInvoiceModal
          tests={tests}
          onSubmit={async (a) => {
            await addLabInvoice(a)
          }}
          open={open}
          setOpen={closeSlideIn}
        />

        <FullScreenModal
          onClose={() => {
            setOpenPrintPage(false)
          }}
          open={openPrintPage}>
          {selectedLabInvoice && (
            <PrintLabReport {...selectedLabInvoice}></PrintLabReport>
          )}
        </FullScreenModal>

        <button
          type='button'
          onClick={() => {
            setOpen(true)
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Add Lab invoice
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
                    className=' hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Patient id
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
                    Invoice time
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredLabInvoice.map((labInvoice) => (
                  <tr
                    onDoubleClick={() => {
                      setSelectedLabInvoice(labInvoice)
                      setloading(true)
                      router.push(`/lab/reports/${labInvoice.id}`)
                    }}
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={labInvoice.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {labInvoice.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {labInvoice.patientId}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {labInvoice.patientName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {labInvoice.refDoctor}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {Gender[labInvoice.patientGender]}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {dateUtils.geLocalDateTimeString(labInvoice.invoiceDate)}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {labInvoice ? (
                        <button
                          type='button'
                          className='text-center w-5 h-5'
                          onClick={() => {
                            setSelectedLabInvoice((prev) => labInvoice)
                            setTimeout(() => {
                              setOpenPrintPage(true)
                            }, 1)
                          }}>
                          <PrinterIcon className='' />
                        </button>
                      ) : (
                        <button
                          type='button'
                          onClick={() => {
                            setSelectedLabInvoice(labInvoice)
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

export default LabReportsPage
