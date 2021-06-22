import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HomeIcon, XIcon } from '@heroicons/react/outline'
import { Field, FieldArray, Form, Formik, useFormik } from 'formik'

import Patient from '../models/Patient'
import Gender from '../models/Gender'
import clsx from 'clsx'
import enumKeys from '../helpers/enumUtils'
import HealthConditions from '../models/HealthCondition'

const AddPatientSlideIn: React.FC<{
  patient?: Patient
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onClose: () => void
  onSubmit: (patient: Patient) => void
}> = (props) => {
  const { patient, open, setOpen } = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(true)
  const [ageType, setAgeType] = useState(0)
  let isEdit = patient != null ?? false

  const initialPatientData: Patient = patient ?? {
    address: '',
    age: 0,
    ageInMonths: 0,
    contactNumber: '',
    createdOn: new Date(),
    diagnoses: [],
    email: '',
    fullName: '',
    gender: Gender.Male,
    healthConditions: [],
    id: 0,
    insuranceId: 0,
    insuranceNumber: '',
    medicalHistory: '',
    role: 0,
    updatedOn: new Date(),
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
                  initialValues={initialPatientData}
                  onSubmit={async (values, actions) => {
                    setError(false)
                    setLoading(true)
                    actions.setSubmitting(false)
                    try {
                      setLoading(true)
                      if (ageType == 1) {
                        values.ageInMonths = values.age
                        values.age = 0
                      }

                      values.gender = parseInt(values.gender.toString())

                      await props.onSubmit(values)
                      setOpen(false)
                    } catch (error) {
                      setError(true)
                    }

                    setLoading(false)
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
                                {isEdit ? 'Edit patient' : 'Add patient'}
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
                                Patient name
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='text'
                                name='fullName'
                                id='fullName'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='email'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Email
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='email'
                                name='email'
                                id='email'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='contactNumber'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Mobile number
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                type='tel'
                                name='contactNumber'
                                id='contactNumber'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='gender'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Gender
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                as='select'
                                id='gender'
                                name='gender'
                                className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                                {enumKeys(Gender).map((a) => (
                                  <option value={Gender[a]}>{a}</option>
                                ))}
                              </Field>
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='age'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Age
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <div className='relative rounded-md shadow-sm'>
                                <Field
                                  type='text'
                                  name='age'
                                  id='age'
                                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md'
                                  placeholder='age'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center'>
                                  <label
                                    htmlFor='insuranceId'
                                    className='sr-only'>
                                    AgeType
                                  </label>
                                  <Field
                                    as='select'
                                    onChange={(e: any) => {
                                      setAgeType(e.target.value)
                                    }}
                                    value={ageType}
                                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                                    <option value={0}>Years</option>
                                    <option value={1}>Months</option>
                                  </Field>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='insuranceNumber'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Insurance Number
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <div className='relative rounded-md shadow-sm'>
                                <Field
                                  type='text'
                                  name='insuranceNumber'
                                  id='insuranceNumber'
                                  className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md'
                                  placeholder='AAGYD112545'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center'>
                                  <label
                                    htmlFor='insuranceId'
                                    className='sr-only'>
                                    Insurance Provider
                                  </label>
                                  <Field
                                    as='select'
                                    id='insuranceId'
                                    name='insuranceId'
                                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                                    <option value='AarogyaSree'>
                                      Aarogya Sree
                                    </option>
                                  </Field>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Project description */}
                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='medicalHistory'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Medical history
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                as='textarea'
                                type='textarea'
                                id='medicalHistory'
                                name='medicalHistory'
                                rows={3}
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          <div className='space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5'>
                            <div>
                              <label
                                htmlFor='medicalHistory'
                                className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
                                Address
                              </label>
                            </div>
                            <div className='sm:col-span-2'>
                              <Field
                                as='textarea'
                                type='textarea'
                                id='address'
                                name='address'
                                rows={3}
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                              />
                            </div>
                          </div>

                          {/* Team members */}
                          <div className='space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:px-6 sm:py-5'>
                            <div>
                              <h3 className='text-sm font-medium text-gray-900'>
                                Health conditions
                              </h3>
                            </div>
                            <div className='sm:col-span-2'>
                              <div className='flex space-x-2'>
                                <FieldArray
                                  name='healthConditions'
                                  render={(arrhelpers) =>
                                    enumKeys(HealthConditions).map((hc) => (
                                      <span
                                        onClick={() => {
                                          let item =
                                            values.healthConditions.indexOf(
                                              HealthConditions[hc]
                                            )

                                          if (item >= 0) {
                                            arrhelpers.remove(item)
                                          } else
                                            arrhelpers.push(
                                              HealthConditions[hc]
                                            )
                                        }}
                                        className={clsx(
                                          'inline-flex cursor-pointer items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800',
                                          values.healthConditions.some(
                                            (x) => x == HealthConditions[hc]
                                          ) && 'bg-red-200'
                                        )}>
                                        {hc}
                                      </span>
                                    ))
                                  }
                                />
                              </div>
                            </div>
                          </div>
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
  )
}

export default AddPatientSlideIn
