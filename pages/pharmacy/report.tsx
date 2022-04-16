import {
  ArrowDownIcon,
  ArrowUpIcon,
  DocumentReportIcon
} from '@heroicons/react/outline'
import clsx from 'clsx'
import {GetStaticProps} from 'next'
import {useRouter} from 'next/dist/client/router'
import React, {useState} from 'react'
import ApiHelper from '../../src/ApiHelper'
import DateTimePicker from '../../src/components/DateTimePicker'
import constants from '../../src/const'
import {dateUtils} from '../../src/helpers/JSUtils'
import {PharmacyReport} from '../../src/models/Stock'
import {
  useLoadingDispatch
} from '../../src/store/LoadingStore'
import {PageProps} from '../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const stocks = await ApiHelper.getItems<PharmacyReport>(`${constants.pharmacyReport}`)
  if (!stocks) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<PharmacyReport[]> = {
    pageContent: stocks,
  }

  return {
    props: {...pageProps},
    revalidate: 1,
  }
}

const StockList: React.FC<PageProps<PharmacyReport[]>> = (props) => {
  const {pageContent: stocks} = props
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useLoadingDispatch()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex  gap-4 justify-end items-center'>

        <div className='flex gap-2'>
          <div>
            <label
              htmlFor='startTime'
              className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
              Start
            </label>
          </div>
          <div className=''>
            <DateTimePicker

              min={new Date()}
              onSelect={(date) => {
              }}
              value={new Date()} />
          </div>
        </div>
        <div className='flex gap-2'>
          <div>
            <label
              htmlFor='startTime'
              className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
              End
            </label>
          </div>
          <div className=''>
            <DateTimePicker

              min={new Date()}
              onSelect={(date) => {
              }}
              value={new Date()} />
          </div>
        </div>

        <button
          type='button'
          onClick={() => {
            setOpen(true)
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <DocumentReportIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Generate report
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
                      <span className='inline'>Date</span>
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
                    Item name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Manufacturer
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Quantity sold
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {stocks.map((stock, index) => (
                  <tr
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {dateUtils.geLocalDateString(stock.date)}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.itemName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.manufacturer}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.quantitySold}
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

export default StockList
