import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import DropdownSearch from './DropdownSearch'
import { useGlobalState } from '../store/GlobalStore'
import DateTimePicker from './DateTimePicker'
import { Stock } from '../models/Stock'
import ApiHelper from '../ApiHelper'
import constants from '../const'
import { ConsultationInvoice } from '../models/ConsultationInvoice'

const GenerateConsultationInvoiceModal: React.FC<{
  open: boolean
  setOpen: (open: boolean) => void
  onSubmit: (invoice: ConsultationInvoice) => void
}> = (props) => {
  const { patients, doctors } = useGlobalState()
  const [medicines, setMedicines] = useState<Stock[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [invoiceGenerated, setInvoiceGenerated] = useState(false)

  const cancelButtonRef = useRef(null)

  const [doctorId, setDoctorId] = useState<number>(0)
  const [invoice, setInvoice] = useState<ConsultationInvoice>({
    id: 0,
    refDoctor: '',
    amount: 0,
    patientId: 0,
    totalAmount: 0,
    discountAmount: 0,
    roundedOffAmount: 0,
    paymentMode: 0,
    createdOn: new Date(),
  })

  useEffect(() => {
    ;(async () => {
      const stocks = await ApiHelper.getItem<Stock[]>(constants.stockUrl)
      setMedicines(stocks)
    })()
  }, [])

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        open={props.open}
        onClose={props.setOpen}>
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
              <form
                className=''
                onSubmit={async (e) => {
                  e.preventDefault()

                  try {
                    setLoading(true)
                    await props.onSubmit(invoice)
                    setInvoiceGenerated(true)
                  } catch (error) {
                    setError(true)
                  }

                  setLoading(false)
                }}>
                <div className='mt-3  sm:mt-5'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg leading-6 font-medium text-gray-900'>
                    Generate Invoice
                  </Dialog.Title>
                  <div className='mt-2'>
                    <div className='divide-y-2 space-y-8 divide-gray-200 divide-dashed divide-opacity-60'>
                      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
                        <div className=''>
                          <label
                            htmlFor='patientId'
                            className='block text-sm font-medium text-gray-700'>
                            Patient
                          </label>
                          <div className='mt-1 flex rounded-md '>
                            <DropdownSearch
                              allowFreeText={true}
                              placeholder='select patient'
                              selected={invoice.patientId}
                              items={patients.map((x) => ({
                                id: x.id,
                                value: x.fullName,
                              }))}
                              onSelect={(e) => {
                                let patient = patients.find((x) => x.id == e.id)
                                if (patient) {
                                  setInvoice({
                                    ...invoice,
                                    patientId: e.id,
                                  })
                                }
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
                          <div className='mt-1 flex rounded-md ='>
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
                                setInvoice({ ...invoice, refDoctor: e.value })
                              }}
                            />
                          </div>
                        </div>
                        <div className=''>
                          <label
                            htmlFor='discountAmount'
                            className='block text-sm font-medium text-gray-700'>
                            Discount amount
                          </label>
                          <div className='mt-1 flex rounded-md '>
                            <input
                              type='number'
                              min={0}
                              step={0.01}
                              name='discountAmount'
                              className='shadow-md rounded-md'
                              placeholder='discount amount'
                              value={invoice.discountAmount}
                              onChange={(e) =>
                                setInvoice({
                                  ...invoice,
                                  discountAmount: parseFloat(e.target.value),
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className=''>
                          <label
                            htmlFor='discountAmount'
                            className='block text-sm font-medium text-gray-700'>
                            Payment reference
                          </label>
                          <div className='mt-1 flex rounded-md '>
                            <input
                              type='text'
                              name='paymentReference'
                              className='shadow-md rounded-md'
                              placeholder='payment reference'
                              value={invoice.paymentReference}
                              onChange={(e) =>
                                setInvoice({
                                  ...invoice,
                                  paymentReference: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className=''>
                          <label
                            htmlFor='patientGender'
                            className='block text-sm font-medium text-gray-700'>
                            Invoice date
                          </label>
                          <div className='mt-1 flex rounded-md ='>
                            <DateTimePicker
                              value={invoice.createdOn}
                              onSelect={(e) =>
                                setInvoice({
                                  ...invoice,
                                  createdOn: e,
                                })
                              }
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className='flex pt-10 sm:mt-6 items-center justify-between'>
                  <span className='text-red-900'>
                    {error && 'Error! Please fix and try again.'}
                  </span>

                  <div className='print:hidden  flex items-center justify-end gap-3'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm'
                      onClick={() => props.setOpen(false)}
                      ref={cancelButtonRef}>
                      Cancel
                    </button>

                    <button
                      type='button'
                      className='inline justify-between-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-end gap-3m'
                      disabled={!invoiceGenerated}
                      onClick={() => {}}>
                      Print
                    </button>

                    <button
                      disabled={loading}
                      className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:text-sm'>
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
                      Generate Invoice
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default GenerateConsultationInvoiceModal
