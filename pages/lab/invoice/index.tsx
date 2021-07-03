import {
  ArrowDownIcon,
  ArrowUpIcon,
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

const LabInvoicePage: React.FC<PageProps<LabInvoice[]>> = (props) => {
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

  useEffect(() => {
    ;(async () => {
      const tests = await ApiHelper.getItem<LabTest[]>(constants.labTests)
      setTests(tests)
    })()
  }, [])

  const search = async (a: string) => {
    if ((a?.length ?? 0) == 0) {
      setFilteredLabInvoices([...labInvoices])
    } else {
      let results = await ApiHelper.getItem<LabInvoice[]>(
        `${constants.labInvoiceById}${a}`
      )

      setFilteredLabInvoices(results)
    }
  }

  const addLabInvoice = async (labAddInvoice: AddLabInvoice) => {
    try {
      let labInvoice = await ApiHelper.postItem<AddLabInvoice, LabInvoice>(
        `${constants.labAddInvoice}`,
        labAddInvoice
      )

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
            placeholderText='search labInvoices'
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
            <PrintLabInvoice {...selectedLabInvoice}></PrintLabInvoice>
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
                    LabInvoice time
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
                {filteredLabInvoice.map((labInvoice) => (
                  <tr
                    onDoubleClick={() => {
                      setSelectedLabInvoice(labInvoice)
                    }}
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={labInvoice.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {labInvoice.id}
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
                      {/* {labInvoice.contactNumber} */}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {/* {dateUtils.geLocalDateTimeString(
                        labInvoice.labInvoiceDate
                      )} */}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {/* {labInvoice.healthConditions &&
                        labInvoice.healthConditions.map((x) => (
                          <span
                            key={x}
                            className=' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 text-opacity-75'>
                            {HealthCondition[x]}
                          </span>
                        ))} */}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {labInvoice ? (
                        <button
                          type='button'
                          onClick={() => {
                            setSelectedLabInvoice((prev) => labInvoice)
                            setTimeout(() => {
                              setOpenPrintPage(true)
                            }, 1)
                          }}
                          className='text-center inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          Print invoice
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

export default LabInvoicePage
