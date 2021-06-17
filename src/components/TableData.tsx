import React, { Fragment, useState } from "react";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";

import { Dialog, Transition } from "@headlessui/react";
import TableItem from "./TableItem";

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane2.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane3.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane4.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane5.cooper@example.com",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane6.cooper@example.com",
  },
  // More people...
];

export default function TableData() {
  const [open, setOpen] = useState(false);
  const [cur, setPeople] = useState(people[0]);

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Role
                  </th>
                  <th scope='col' className='print:hidden relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 '>
                {people.map((person) => (
                  <tr className='group hover:bg-gray-100' key={person.email}>
                    <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
                      {person.name}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      {person.title}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      {person.email}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      {person.role}
                    </td>
                    <td className='print:hidden px-6 py-4 space-x-4 text-sm font-medium text-right whitespace-nowrap'>
                      <button
                        type='button'
                        className='inline-flex items-center p-1 text-gray-200 transform bg-gray-600 border border-transparent rounded-full shadow-sm group-hover:bg-gray-900 group-hover:scale-110 active:ring-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                        <PencilIcon className='w-6 h-6 ' aria-hidden='true' />
                      </button>
                      <button
                        onClick={() => {
                          setOpen(true);
                          setPeople(person);
                        }}
                        type='button'
                        className='inline-flex items-center p-1 text-gray-200 transform bg-gray-600 border border-transparent rounded-full shadow-sm group-hover:bg-gray-900 group-hover:scale-110 active:ring-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
                        <TrashIcon className='w-6 h-6 ' aria-hidden='true' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          id='asdf'
          static
          className='fixed inset-0 z-10 overflow-y-auto print:m-5'
          open={open}
          onClose={setOpen}>
          <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                <div>
                  <div className='flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full'>
                    <CheckIcon
                      className='w-6 h-6 text-green-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'>
                      Payment successful
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm print:bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
                    onClick={() => {
                      setOpen(false);
                    }}>
                    Go back to dashboard
                  </button>
                  <div></div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
