import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserAddIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import ApiHelper from '../../src/ApiHelper';
import AddStockSlideIn from '../../src/components/AddStockSlideIn';
import SearchBox from '../../src/components/SearchBox';
import constants from '../../src/const';
import AddStockModel from '../../src/models/AddStockModel';
import { Stock } from '../../src/models/Stock';
import { PageProps } from '../../src/types/PageProps';

export const getStaticProps: GetStaticProps = async (context) => {
  const stocks = await ApiHelper.getItem<Stock[]>(constants.stockUrl);
  if (!stocks) {
    return {
      notFound: true,
    };
  }

  let pageProps: PageProps<Stock[]> = {
    pageContent: stocks,
  };

  return {
    props: { ...pageProps },
  };
};

const StockList: React.FC<PageProps<Stock[]>> = (props) => {
  const { pageContent: stocks } = props;
  const [filteredStocks, setFilteredStocks] = useState([...stocks]);
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);

  const addStock = async (stock: AddStockModel) => {
    await ApiHelper.postItem<AddStockModel, number>(
      constants.addStockUrl,
      stock
    );

    // refreshData();
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const search = async (a: string) => {
    console.log(a.length, (a?.length ?? 0) == 0);
    if ((a?.length ?? 0) == 0) {
      setFilteredStocks([...stocks]);
    } else {
      let results = await ApiHelper.getItem<Stock[]>(
        `${constants.stockSearchUrl}${a}`
      );

      setFilteredStocks(results);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <SearchBox
          className=''
          placeholderText='search stocks'
          onSearch={search}
          onClear={() => {}}
        />

        <AddStockSlideIn
          onSubmit={addStock}
          onClose={() => {}}
          open={open}
          setOpen={setOpen}
        />

        <button
          type='button'
          onClick={() => {
            setOpen(true);
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
                      {stock.expiryDate ?? ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockList;
