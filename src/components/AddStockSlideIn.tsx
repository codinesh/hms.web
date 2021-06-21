import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, XIcon } from '@heroicons/react/outline';
import { Field, FieldArray, Form, Formik, useFormik } from 'formik';
import Gender from '../models/Gender';
import clsx from 'clsx';
import enumKeys from '../helpers/enumUtils';
import HealthConditions from '../models/HealthCondition';
import { Stock } from '../models/Stock';

const AddStockSlideIn: React.FC<{
  stock?: Stock;
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
  onSubmit: (stock: Stock) => void;
  onUpdate: (stock: Stock) => void;
}> = (props) => {
  const { stock, open, setOpen } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  let isEdit = stock != null ?? false;
  const initialStockData: Stock = stock ?? {
    id: 0,
    itemName: '',
    measuringUnit: '',
    drugName: '',
    hsnCode: 0,
    schedule: '',
    manufacturer: '',
    batchNo: '',
    expiryDate: new Date(),
    totalQuantityAvailable: 0,
    quantityPerStrip: 0,
    mrpPerStrip: 0,
    mrpPerUnit: 0,
    discountPercent: 0,
    cgstPercent: 0,
    sgstPercent: 0,
    freeStrips: 0,
    isReturned: false,
    numberOfStrips: 0,
    ratePerStrip: 0,
    ratePerUnit: 0,
    totalQuantityProcured: 0,
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='z-30 fixed inset-0 overflow-hidden'
        open={open}
        onClose={() => {
          setLoading(false);
          setOpen(false);
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
                  initialValues={initialStockData}
                  onSubmit={async (values, actions) => {
                    setError(false);
                    setLoading(true);
                    actions.setSubmitting(false);
                    try {
                      setLoading(true);
                      if (isEdit) {
                        await props.onSubmit(values);
                      } else {
                        await props.onSubmit(values);
                      }
                      setOpen(false);
                    } catch (er) {
                      console.error(er);
                      setError(true);
                    }

                    setLoading(false);
                  }}
                  render={({ values }) => (
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
                                {isEdit ? 'Edit stock' : 'Add stock'}
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
                          {!values.isReturned && (
                            <>
                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='itemName'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Medicine name
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='itemName'
                                    id='itemName'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='drugName'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Drug name
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='drugName'
                                    id='drugName'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='manufacturer'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Manufacturer
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='manufacturer'
                                    id='manufacturer'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='batchNo'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Batch number
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='batchNo'
                                    id='batchNo'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='gender'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Schedule
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='schedule'
                                    id='schedule'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='hsnCode'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    HSN Code
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='hsnCode'
                                    id='hsnCode'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='numberOfStrips'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Quantity
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <div className='relative rounded-md shadow-sm'>
                                    <Field
                                      type='text'
                                      name='numberOfStrips'
                                      id='numberOfStrips'
                                      className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md'
                                      placeholder='age'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label
                                        htmlFor='measuringUnit'
                                        className='sr-only'>
                                        Measuring unit
                                      </label>
                                      <Field
                                        as='select'
                                        name='measuringUnit'
                                        id='measuringUnit'
                                        className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                                        <option value={'mg'}>mg</option>
                                        <option value={'ml'}>ml</option>
                                        <option value={'unit'}>unit</option>
                                        <option value={'other'}>other</option>
                                      </Field>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='quantityPerStrip'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Pack size
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='number'
                                    name='quantityPerStrip'
                                    id='quantityPerStrip'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='quantityPerStrip'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    MRP
                                  </label>
                                </div>
                                <div className='flex justify-between sm:col-span-2'>
                                  <div className='relative'>
                                    <Field
                                      type='text'
                                      name='mrpPerStrip'
                                      id='mrpPerStrip'
                                      className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label
                                        htmlFor='measuringUnit'
                                        className=' text-gray-500 pr-2 '>
                                        per strip
                                      </label>
                                    </div>
                                  </div>
                                  <div className='relative'>
                                    <Field
                                      type='text'
                                      name='mrpPerUnit'
                                      id='mrpPerUnit'
                                      className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label
                                        htmlFor='measuringUnit'
                                        className='text-gray-500 pr-2'>
                                        per unit
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='ratePerStrip'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Rate
                                  </label>
                                </div>
                                <div className='flex justify-between sm:col-span-2'>
                                  <div className='relative'>
                                    <Field
                                      type='text'
                                      name='ratePerStrip'
                                      id='ratePerStrip'
                                      className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label className=' text-gray-500 pr-2 '>
                                        per strip
                                      </label>
                                    </div>
                                  </div>
                                  <div className='relative'>
                                    <Field
                                      type='text'
                                      name='ratePerUnit'
                                      id='ratePerUnit'
                                      className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label className='text-gray-500 pr-2'>
                                        per unit
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='cgstPercent'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Tax %
                                  </label>
                                </div>
                                <div className='flex justify-between sm:col-span-2'>
                                  <div className='relative'>
                                    <Field
                                      type='text'
                                      name='cgstPercent'
                                      id='cgstPercent'
                                      className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label className=' text-gray-500 pr-2 '>
                                        cgst
                                      </label>
                                    </div>
                                  </div>
                                  <div className='relative'>
                                    <Field
                                      type='text'
                                      name='sgstPercent'
                                      id='sgstPercent'
                                      className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                    />
                                    <div className='absolute inset-y-0 right-0 flex items-center'>
                                      <label className='text-gray-500 pr-2'>
                                        sgst
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='discountPercent'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Discount percent
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='discountPercent'
                                    id='discountPercent'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>

                              <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                                <div>
                                  <label
                                    htmlFor='freeStrips'
                                    className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                    Free strips
                                  </label>
                                </div>
                                <div className='sm:col-span-2'>
                                  <Field
                                    type='text'
                                    name='freeStrips'
                                    id='freeStrips'
                                    className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {isEdit && (
                            <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                              <div>
                                <label
                                  htmlFor='isReturned'
                                  className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                  Return stock
                                </label>
                              </div>

                              <div className='sm:col-span-2'>
                                <Field
                                  type='checkbox'
                                  name='isReturned'
                                  id='isReturned'
                                  className='block w-6 h-6 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-800'
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className='flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6'>
                        <div className='space-x-3 flex justify-end'>
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
                            {isEdit ? 'Update' : 'Create'}
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddStockSlideIn;
