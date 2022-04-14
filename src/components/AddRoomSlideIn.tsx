import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import clsx from 'clsx'
import {Field, Form, Formik} from 'formik'
import React, {Fragment, useState} from 'react'
import Room from '../models/Room'

const AddRoomSlideIn: React.FC<{
  room?: Room
  open: boolean
  setOpen: (open: boolean) => void
  onClose: () => void
  onSubmit: (room: Room) => Promise<void>
  onUpdate: (room: Room) => Promise<void>
}> = (props) => {
  const {room, open, setOpen} = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  let isEdit = room != null ?? false
  let curDate = new Date()
  let defaultExpiry = new Date()
  defaultExpiry.setUTCFullYear(curDate.getFullYear() + 1)

  const initialRoomData: Room = room ?? {
    id: 0,
    bedNumber: 0,
    buildingId: 0,
    floorNumber: 0,
    rent: 0,
    wardType: ''
  }

  let filteredRoom: Room[]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='z-30 fixed inset-0 overflow-hidden'
        open={open}
        onClose={() => {
          setLoading(false)
          setError(false)
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
                  initialValues={initialRoomData}
                  onSubmit={async (values, actions) => {
                    setError(false)
                    setLoading(true)
                    actions.setSubmitting(false)
                    try {
                      setLoading(true)
                      if (isEdit) {
                        await props.onSubmit(values)
                      } else {
                        await props.onSubmit(values)
                      }
                      setOpen(false)
                    } catch (er) {
                      console.error(er)
                      setError(true)
                    }

                    setLoading(false)
                    setError(false)
                  }}>
                  {({values, setFieldValue}) => (
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
                                {isEdit ? 'Edit room' : 'Add room'}
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
                          {/* Project name */}
                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='fullName'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Id
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='number'
                                name='Id'
                                id='Id'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='BedNumber'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Bed number
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='number'
                                name='BedNumber'
                                id='BedNumber'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='BuildingId'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Building id
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='number'
                                name='BuildingId'
                                id='BuildingId'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='Rent'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Rent
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='number'
                                name='Rent'
                                id='Rent'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='FloorNumber'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Floor number
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <div className='relative rounded-md shadow-sm'>
                                <Field
                                  type='number'
                                  name='FloorNumber'
                                  id='FloorNumber '
                                  className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                />
                              </div>
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='WardType'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Ward type
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <div className='relative rounded-md shadow-sm'>
                                <Field
                                  as='select'
                                  id='WardType'
                                  name='WardType'
                                  className='block w-full focus:ring-indigo-500 focus:border-indigo-500 h-full  sm:text-sm rounded-md'>
                                  <option value={1}>
                                    General
                                  </option>
                                  <option value={2}>
                                    ICU
                                  </option>
                                </Field>
                              </div>
                            </div>
                          </div>

                          {/* Project description */}
                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='description'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Description
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                as='textarea'
                                type='textarea'
                                id='description'
                                name='description'
                                rows={3}
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6'>
                        <div className='space-x-3 flex justify-between items-center'>
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
                              {isEdit ? 'Update' : 'Create'}
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

export default AddRoomSlideIn
