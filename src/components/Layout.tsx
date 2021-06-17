import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Sidebar from "./Sidebar";
import { classNames } from "../helpers/csshelpers";
import { INavigationItem } from "../types/INavigationItem";
import { data } from "../data";
import Page from "./Page";
import Image from "next/image";

const Layout: React.FC = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden bg-gray-100'>
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <div className='print:hidden relative z-10 flex flex-shrink-0 h-16 bg-white shadow'>
          <button
            className='px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}>
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='w-6 h-6' aria-hidden='true' />
          </button>
          <div className='flex justify-between flex-1 px-4'>
            <div className='flex flex-1'>
              <form className='flex w-full md:ml-0' action='#' method='GET'>
                <label htmlFor='search_field' className='sr-only'>
                  Search
                </label>
                <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                    <SearchIcon className='w-5 h-5' aria-hidden='true' />
                  </div>
                  <input
                    id='search_field'
                    className='block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                    placeholder='Search'
                    type='search'
                    name='search'
                  />
                </div>
              </form>
            </div>
            <div className='flex items-center ml-4 md:ml-6'>
              <button className='p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>View notifications</span>
                <BellIcon className='w-6 h-6' aria-hidden='true' />
              </button>

              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className='flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='w-8 h-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'>
                      <Menu.Items
                        static
                        className='absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {data.userNavigation.map((item: INavigationItem) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.path}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}>
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        {/* print only */}
        <div className='hidden print:flex w-full flex-col px-4 py-4'>
          <header className=' print:flex items-center'>
            <Image
              className='fixed left-0 '
              width={140}
              height={140}
              src='/logo.png'
              alt='logo'
            />
            <div className='mx-auto'>
              <h2 className='text-3xl font-medium'>Pragathi Hospital</h2>
              <span className='text-sm'>Tirupati, addressline1</span>
              <span className='text-sm'>Tirupati, addressline2</span>
              <div className='mt-6'>
                <span className='text-md'>GSTIN: 123456789</span>
                <span className='text-md'>
                  CIN No: 789456123145679846312132
                </span>
              </div>
              <h1 className='text-3xl font-medium mt-4'>Tax Invoice</h1>
            </div>
          </header>
          <main className='mt-6 flex flex-col'>
            <div className='flex border-t-2 justify-between border-b-2 py-2 border-black'>
              <div>
                <span className='text-md font-bold'>Invoice Number: </span>
                <span>OPH12353249</span>
              </div>
              <div>
                <span className='text-md font-bold'>Invoice Date: </span>
                <span>2021-01-17 16:54</span>
              </div>
              <div>
                <span className='text-md font-bold'>Patient Id: </span>
                <span>Random Id</span>
              </div>
            </div>
            <div className='flex '>
              <div className='flex py-4 justify-center  flex-col border-b-2 border-r-2 border-black pb-4'>
                <span className='font-bold'>Sold to: </span>
                <span>Name & Address: Name of Patient </span>
                <span>Contact Number: 123456789</span>
                <span>State Name & Code: AndhraPradesh & 123 </span>
                <span>GST Number: </span>
                <span>PAN: </span>
                <span>Aadhaar :</span>
              </div>
              <div className='flex-grow border-b-2 border-black '></div>
            </div>
          </main>
        </div>

        <main className='relative flex-1 overflow-y-auto focus:outline-none'>
          <div className='py-6'>
            <Page>{props.children}</Page>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
