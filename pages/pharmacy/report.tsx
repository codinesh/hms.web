import {
  ArrowDownIcon,
  ArrowUpIcon,
  DocumentReportIcon,
  DownloadIcon
} from '@heroicons/react/outline'
import clsx from 'clsx'
import React, {useState} from 'react'
import DateTimePicker from '../../src/components/DateTimePicker'
import LoadingIndicator from '../../src/components/LoadingIndicator'
import constants from '../../src/const'
import {exportToCSV} from '../../src/helpers/export'
import {dateUtils} from '../../src/helpers/JSUtils'
import useFetchMultiple from '../../src/hooks/useFetchMultiple'
import {PharmacyReport} from '../../src/models/Stock'

const StockList: React.FC = (props) => {
  const curDate = new Date()
  curDate.setFullYear(curDate.getFullYear() - 1)
  const [dateRange, setDateRange] = useState<{start: Date, end: Date}>(
    {
      start: curDate,
      end: new Date()
    }
  )
  const {data, inProgress, error, beginCall} = useFetchMultiple<PharmacyReport>(constants.pharmacyReport, 'GET')

  const onExport = () => {
    let url = exportToCSV('pharmacyreport', data)
    window.open(url, '_self')
  }
  const generateReport = () => {
    beginCall(`?startDate=${dateUtils.getIsoDateString(dateRange.start)}&endDate=${dateUtils.getIsoDateString(dateRange.end)}`)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex  gap-4 justify-end items-center'>
        <LoadingIndicator open={inProgress} />

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

              onSelect={(date) => {
                setDateRange({...dateRange, start: date})
              }}
              value={dateRange.start} />
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

              onSelect={(date) => {
                setDateRange({...dateRange, end: date})
              }}
              value={dateRange.end} />
          </div>
        </div>

        <button
          type='button'
          onClick={() => {
            generateReport()
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <DocumentReportIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Generate report
        </button>

        <button
          type='button'
          onClick={() => {
            onExport()
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <DownloadIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Download
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
                      {inProgress ? (
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
                <>{data &&
                  data.map((stock, index) => (
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
                  ))
                }
                  {error && <span>Error: {error}</span>}
                </></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockList
