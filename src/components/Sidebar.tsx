import { Dialog, Transition } from '@headlessui/react'
import { UserCircleIcon, XIcon } from '@heroicons/react/outline'
import React, { Dispatch, Fragment, SetStateAction } from 'react'
import { data } from '../data'
import SidebarItem from './SideBarItem'

const Sidebar: React.FC<{
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}> = (props) => {
  const { sidebarOpen, setSidebarOpen } = props
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='print:hidden fixed inset-0 z-40 flex md:hidden'
          open={sidebarOpen}
          onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'>
            <div className='relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='absolute top-0 right-0 pt-2 -mr-12'>
                  <button
                    className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}>
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex items-center flex-shrink-0 h-16 px-4 bg-gray-800'>
                <span className='text-2xl text-gray-300'>
                  Pragathi Hospital
                </span>
              </div>
              <div className='flex flex-col flex-1 h-0 mt-5 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {data.navigation.map((item) => (
                    <Transition.Child
                      key={item.name}
                      enter='ease-in transition transition duration-600'
                      enterFrom=''
                      enterTo='opacity-100'
                      leave='ease-in-out duration-300'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'>
                      <SidebarItem key={item.name} item={item} />
                    </Transition.Child>
                  ))}
                </nav>

                <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                  <a href='#' className='flex-shrink-0 group block'>
                    <div className='flex items-center'>
                      <div>
                        <UserCircleIcon className='w-8 h-8 text-gray-300' />
                      </div>
                      <div className='ml-3'>
                        <p className='text-base font-medium text-white'>
                          User name
                        </p>
                        <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                          Sign out
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='print:hidden  hidden h-full md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-64'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-1 h-0'>
            <div className='flex items-center flex-shrink-0 h-16 px-4 bg-gray-900'>
              <span className='text-2xl text-gray-300'>Pragathi Hospital</span>
            </div>
            <div className='flex flex-col flex-1 overflow-y-auto'>
              <nav className='flex-1 px-2 py-4 space-y-1 bg-gray-800'>
                {data.navigation.map((item) => (
                  <SidebarItem key={item.name} item={item} />
                ))}
              </nav>
              <div className='flex-shrink-0 px-2 flex bg-gray-700 p-4'>
                <a href='#' className='flex-shrink-0 group block'>
                  <div className='flex items-center'>
                    <div>
                      <UserCircleIcon className='w-8 h-8 text-gray-300' />
                    </div>
                    <div className='ml-3'>
                      <p className='text-base font-medium text-white'>
                        User name
                      </p>
                      <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                        Sign out
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
