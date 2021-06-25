/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationIcon } from '@heroicons/react/outline'
import DropdownSearch from './DropdownSearch'
import { PharmacyInvoice } from '../models/PharmacyInvoice'
import { useGlobalState } from '../store/GlobalStore'

const GenerateInvoiceModal: React.FC = (props) => {
  const { patients, doctors } = useGlobalState()

  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  const [doctorId, setDoctorId] = useState<number>(0)
  const [invoice, setInvoice] = useState<PharmacyInvoice>({
    patientId: 0,
    patientName: '',
    ref_Doctor: '',
    totalAmount: 0,
    discountAmount: 0,
    roundedOffAmount: 0,
    paymentMode: 0,
    createdOn: new Date(),
  })

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
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
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full sm:p-6'>
              <div className='mt-3  sm:mt-5'>
                <Dialog.Title
                  as='h3'
                  className='text-lg leading-6 font-medium text-gray-900'>
                  Generate Invoice
                </Dialog.Title>
                <div className='mt-2'>
                  <form className='space-y-8 divide-y divide-gray-200'>
                    <div className='mt-6 grid grid-cols-2 gap-y-6'>
                      <div className=''>
                        <label
                          htmlFor='patientId'
                          className='block text-sm font-medium text-gray-700'>
                          Patient
                        </label>
                        <div className='mt-1 flex rounded-md shadow-sm'>
                          <DropdownSearch
                            allowFreeText={true}
                            placeholder='select patient'
                            selected={invoice.patientId}
                            items={patients.map((x) => ({
                              id: x.id,
                              value: x.fullName,
                            }))}
                            onSelect={(e) => {
                              setInvoice({
                                ...invoice,
                                patientName: e.value,
                                patientId: e.id,
                              })
                            }}
                          />
                        </div>
                      </div>
                      <div className=''>
                        <label
                          htmlFor='doctorId'
                          className='block text-sm font-medium text-gray-700'>
                          Doctor
                        </label>
                        <div className='mt-1 flex rounded-md shadow-sm'>
                          <DropdownSearch
                            allowFreeText={true}
                            placeholder='select doctor'
                            selected={doctorId}
                            items={doctors.map((x) => ({
                              id: x.id,
                              value: x.fullName,
                            }))}
                            onSelect={(e) => {
                              setDoctorId(e.id)
                              setInvoice({ ...invoice, ref_Doctor: e.value })
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                      <div className='sm:col-span-4'>
                        <label
                          htmlFor='username'
                          className='block text-sm font-medium text-gray-700'>
                          Username
                        </label>
                        <div className='mt-1 flex rounded-md shadow-sm'>
                          <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
                            workcation.com/
                          </span>
                          <input
                            type='text'
                            name='username'
                            id='username'
                            autoComplete='username'
                            className='flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-4'>
                        <label
                          htmlFor='username'
                          className='block text-sm font-medium text-gray-700'>
                          Username
                        </label>
                        <div className='mt-1 flex rounded-md shadow-sm'>
                          <DropdownSearch
                            placeholder='select patient'
                            selected={doctorId}
                            items={doctors.map((x) => ({
                              id: x.id,
                              value: x.fullName,
                            }))}
                            onSelect={(e) => {
                              setDoctorId(e.id)
                            }}
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-6'>
                        <label
                          htmlFor='about'
                          className='block text-sm font-medium text-gray-700'>
                          About
                        </label>
                        <div className='mt-1'>
                          <textarea
                            id='about'
                            name='about'
                            rows={3}
                            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                            defaultValue={''}
                          />
                        </div>
                        <p className='mt-2 text-sm text-gray-500'>
                          Write a few sentences about yourself.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='mt-5 sm:mt-6 flex justify-end gap-3'>
                <button
                  type='button'
                  className='inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm'
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}>
                  Cancel
                </button>

                <button
                  type='button'
                  className='inline justify-between-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-end gap-3m'
                  onClick={() => setOpen(false)}>
                  Print
                </button>

                <button
                  type='button'
                  className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm'
                  onClick={() => setOpen(false)}>
                  Generate Invoice
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default GenerateInvoiceModal
