import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Field, Form, Formik } from 'formik'
import { Appointment } from '../models/Appointment'
import DateTimePicker from './DateTimePicker'
import clsx from 'clsx'
import { ConsultationInvoice } from '../models/ConsultationInvoice'
import { PaymentMode } from '../models/PaymentMode'
import enumKeys from '../helpers/enumUtils'

const GenerateConsultationInvoiceSlideIn: React.FC<{
  appointment: Appointment
  open: boolean
  setOpen: (isOpen: boolean) => void
  onSubmit: (appointment: ConsultationInvoice) => Promise<void>
}> = (props) => {
  const { appointment, open, setOpen } = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(true)
  let consultationInvoice: ConsultationInvoice = {
    appointmentId: appointment.id,
    invoiceDate: appointment.appointmentDate,
    discountAmount: 0,
    paymentMode: 0,
    price: 0,
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='z-30 fixed inset-0 overflow-hidden'
        open={open}
        onClose={() => {
          setLoading(false)
          setOpen(false)
        }}>
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'>
              <div className='w-screen max-w-2xl'>
                <Formik
                  initialValues={consultationInvoice}
                  onSubmit={async (values, actions) => {
                    setError(false)
                    setLoading(true)
                    try {
                      setLoading(true)

                      if (values.price > 0) {
                        await props.onSubmit(values)
                        setOpen(false)
                      } else {
                        setError(true)
                      }
                    } catch (error) {
                      setError(true)
                    }

                    setLoading(false)
                  }}>
                  {({ values }) => (
                    <Form className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                      <div className='flex-1'>
                        <Field
                          type='hidden'
                          name='id'
                          id='id'
                          className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                        />
                        <div className='py-6 bg-gray-100 sm:px-6'>
                          <div className='flex items-start justify-between space-x-3'>
                            <div className='space-y-1'>
                              <Dialog.Title className='text-lg font-medium text-gray-900'>
                                Generate invoice
                              </Dialog.Title>
                            </div>
                            <div className='h-7 flex items-center'>
                              <button
                                type='button'
                                className='bg-gray-100 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                onClick={() => setOpen(false)}>
                                <span className='sr-only'>Close panel</span>
                                <XIcon className='h-6 w-6' aria-hidden='true' />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200'>
                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='invoiceDate'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Invoice date
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <DateTimePicker
                                value={values.invoiceDate}
                                min={new Date()}
                                onSelect={(date) => {
                                  values.invoiceDate = date
                                }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                              <div>
                                <label
                                  htmlFor='issue'
                                  className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                  Price
                                </label>
                              </div>
                              <div className='sm:col-span-2'>
                                <Field
                                  as='input'
                                  type='number'
                                  id='price'
                                  name='price'
                                  className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                                />
                              </div>
                            </div>

                            <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                              <div>
                                <label
                                  htmlFor='issue'
                                  className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                  Discount
                                </label>
                              </div>
                              <div className='sm:col-span-2'>
                                <Field
                                  as='input'
                                  type='number'
                                  id='discountAmount'
                                  name='discountAmount'
                                  className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                              <div>
                                <label
                                  htmlFor='gender'
                                  className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                  Payment Mode
                                </label>
                              </div>
                              <div className='sm:col-span-2'>
                                <Field
                                  as='select'
                                  id='paymentMode'
                                  name='paymentMode'
                                  className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                                  {enumKeys(PaymentMode).map((a) => (
                                    <option value={PaymentMode[a]}>{a}</option>
                                  ))}
                                </Field>
                              </div>
                            </div>

                            <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                              <div>
                                <label
                                  htmlFor='issue'
                                  className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                  Payment reference
                                </label>
                              </div>
                              <div className='sm:col-span-2'>
                                <Field
                                  as='input'
                                  type='text'
                                  id='paymentReference'
                                  name='paymentReference'
                                  className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6'>
                        <div className='items-center space-x-3 flex justify-between'>
                          <span
                            className={clsx(
                              'text-red-700 opacity-0',
                              error && 'opacity-100'
                            )}>
                            Error! Please fix the errors and try again.
                          </span>

                          <div className='flex gap-2'>
                            <button
                              type='button'
                              className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                              onClick={() => setOpen(false)}>
                              Cancel
                            </button>
                            <button
                              type='submit'
                              disabled={loading}
                              className='text-center inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                              {loading && (
                                <svg
                                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'>
                                  <circle
                                    className='opacity-25'
                                    cx='12'
                                    cy='12'
                                    r='10'
                                    stroke='currentColor'
                                    stroke-width='4'></circle>
                                  <path
                                    className='opacity-75'
                                    fill='currentColor'
                                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                </svg>
                              )}
                              Generate invoice
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default GenerateConsultationInvoiceSlideIn
