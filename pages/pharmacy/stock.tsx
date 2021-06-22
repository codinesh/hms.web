import { Switch } from '@headlessui/react'
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
import AddStockSlideIn from '../../src/components/AddStockSlideIn'
import SearchBox from '../../src/components/SearchBox'
import constants from '../../src/const'
import { dateUtils } from '../../src/helpers/JSUtils'
import { Stock } from '../../src/models/Stock'
import { PageProps } from '../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const stocks = await ApiHelper.getItem<Stock[]>(constants.stockUrl)
  if (!stocks) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<Stock[]> = {
    pageContent: stocks,
  }

  return {
    props: { ...pageProps },
  }
}

const StockList: React.FC<PageProps<Stock[]>> = (props) => {
  const { pageContent: stocks } = props
  const [filteredStocks, setFilteredStocks] = useState([...stocks])
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [isExpiringStock, setIsExpiringStock] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedStock, setSelectedStock] = useState<Stock>()

  const addStock = async (stock: Stock) => {
    await ApiHelper.postItem<Stock, number>(constants.addStockUrl, stock)

    // refreshData();
  }

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const updateStock = async (stock: Stock) => {
    await ApiHelper.postItem<Stock, number>(constants.addStockUrl, stock)

    // refreshData();
  }

  const search = async (a: string) => {
    console.log(a.length, (a?.length ?? 0) == 0)
    if ((a?.length ?? 0) == 0) {
      setFilteredStocks([...stocks])
    } else {
      let results = await ApiHelper.getItem<Stock[]>(
        `${constants.stockSearchUrl}${a}`
      )

      setFilteredStocks(results)
    }
  }
  useEffect(() => {
    console.log('useEffect')

    if (isExpiringStock) {
      console.log('expiring')
      fetchExpiringStock()
    } else {
      console.log('not expiring')

      setFilteredStocks([...stocks])
    }
  }, [isExpiringStock])

  const fetchExpiringStock = async () => {
    let results = await ApiHelper.getItem<Stock[]>(
      `${constants.expiringStockUrl}`
    )

    setFilteredStocks(results)
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedStock(undefined)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <SearchBox
            className=''
            placeholderText='search stocks'
            onSearch={search}
            onClear={() => {}}
          />

          <div className='flex pl-6 items-start'>
            <div className='flex items-center h-5'>
              <input
                id='expiringStock'
                name='expiringStock'
                checked={isExpiringStock}
                onChange={(e) => {
                  console.log('useEffect outside')

                  setIsExpiringStock((val) => {
                    return !val
                  })
                }}
                type='checkbox'
                className='focus:ring-indigo-500 h-6 w-6  text-indigo-600 border-gray-300 rounded-md'
              />
            </div>
            <div className='ml-1 text-sm'>
              <label
                htmlFor='expiringStock'
                className='font-medium text-gray-700'>
                Show expiring stock?
              </label>
            </div>
          </div>
        </div>

        <AddStockSlideIn
          onSubmit={addStock}
          onUpdate={updateStock}
          onClose={() => {}}
          stock={selectedStock}
          open={open || selectedStock != undefined}
          setOpen={closeSlideIn}
        />

        <button
          type='button'
          onClick={() => {
            setOpen(true)
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Add stock
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
                    Name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Drug
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Unit
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Mfg
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Batch
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Avl Qty
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    MRP
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Expiry
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredStocks.map((stock) => (
                  <tr
                    onDoubleClick={() => {
                      setSelectedStock(stock)
                    }}
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={stock.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {stock.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.itemName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.drugName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.measuringUnit.toString()}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.manufacturer}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.batchNo}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.totalQuantityAvailable}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {stock.mrpPerStrip}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {dateUtils.geLocalDateString(stock.expiryDate)}
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
