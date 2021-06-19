import { Disclosure } from '@headlessui/react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { classNames } from '../helpers/csshelpers';
import { INavigationItem } from '../types/INavigationItem';

const SidebarItem: React.FC<{ item: INavigationItem }> = (props) => {
  const { asPath } = useRouter();
  const current = asPath == props.item.path ?? '';
  let isLink = (props.item.children?.length ?? 0) == 0;

  return isLink ? (
    <Link href={props.item.path ?? ''}>
      <a
        className={classNames(
          current
            ? 'bg-gray-700 bg-opacity-50 text-gray-200'
            : ' text-gray-400 hover:bg-gray-700 hover:bg-opacity-30 hover:text-gray-300',
          ' group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
        )}>
        {props.item.icon && (
          <props.item.icon
            className='flex-shrink-0 w-6 h-6 mr-3 text-gray-400 transition duration-200 transform group-hover:-translate-x-1 group-hover:scale-110 group-hover:text-gray-300'
            aria-hidden='true'
          />
        )}
        <span className='flex-1 text-lg'>{props.item.name}</span>
      </a>
    </Link>
  ) : (
    <Disclosure
      as='div'
      key={`props.item.name${Math.random()}`}
      className='space-y-1'>
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              onClick={() => {}}
              className={classNames(
                current
                  ? 'bg-gray-700 bg-opacity-50 text-gray-200'
                  : ' text-gray-400 hover:bg-gray-700 hover:bg-opacity-30 hover:text-gray-300',
                'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
              )}>
              <>
                {props.item.icon && (
                  <props.item.icon
                    className='flex-shrink-0 w-6 h-6 mr-3 text-gray-400 transition duration-200 transform group-hover:scale-110 group-hover:-translate-x-1 group-hover:text-gray-300'
                    aria-hidden='true'
                  />
                )}
                <span className='flex-1 text-lg'>{props.item.name}</span>

                {props.item.children && props.item.children.length > 0 && (
                  <svg
                    className={classNames(
                      open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                      'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                    )}
                    viewBox='0 0 20 20'
                    aria-hidden='true'>
                    <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
                  </svg>
                )}
              </>
            </Disclosure.Button>

            <Disclosure.Panel className='space-y-1'>
              {props.item.children &&
                props.item.children.map((subItem: INavigationItem) => (
                  <div key={subItem.name} className='ml-4 border-red-600'>
                    <SidebarItem item={subItem} />
                  </div>
                ))}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};

export default SidebarItem;
