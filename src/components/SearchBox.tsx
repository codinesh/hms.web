import React, { PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import { SearchIcon } from '@heroicons/react/outline';

interface ISearchBoxProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  className: string;
  placeholderText: string;
}

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
  const [searchString, setsearchString] = useState('');

  return (
    <div className={clsx('max-w-lg ', props.className)}>
      <form
        className='mt-3'
        onSubmit={(e) => {
          e.preventDefault();
          props.onSearch(searchString);
        }}>
        <div className='flex w-full sm:max-w-xs'>
          <label htmlFor='email' className='sr-only'>
            Search
          </label>

          <div className='flex-grow relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
              <SearchIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </div>
            <input
              type='text'
              value={searchString}
              onChange={(e) => setsearchString(e.target.value)}
              className='pl-8 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
              placeholder={props.placeholderText}
            />
          </div>
          <button
            type='submit'
            className='flex-shrink mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
