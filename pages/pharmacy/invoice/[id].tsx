import { PaperClipIcon } from '@heroicons/react/outline'
import { GetStaticProps } from 'next'
import React from 'react'
import PrintInvoice from '../../../src/components/PrintInvoice'
import constants from '../../../src/const'
import { dateUtils } from '../../../src/helpers/JSUtils'
import Gender from '../../../src/models/Gender'
import { PaymentMode } from '../../../src/models/PaymentMode'
import { PharmacyInvoice } from '../../../src/models/PharmacyInvoice'
import { PageProps } from '../../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(
    `${constants.baseApiUrl}${constants.invoiceById}${context.params.id}`
  )

  const pharmacyInvoice: PharmacyInvoice = await res.json()

  if (!pharmacyInvoice) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<PharmacyInvoice> = {
    pageContent: pharmacyInvoice,
  }

  return {
    props: { ...pageProps },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${constants.baseApiUrl}${constants.allinvoices}`)
  const patients: PharmacyInvoice[] = await res.json()

  if (!patients) {
    return {
      notFound: true,
    }
  }

  return {
    paths: patients.map((p) => ({
      params: {
        id: p.id?.toString(),
      },
    })),
    fallback: true,
  }
}

const InvoiceDetail: React.FC<PageProps<PharmacyInvoice>> = (props) => {
  const invoice = props.pageContent

  return invoice ? (
    <>
      <PrintInvoice />
      <div className='print:overflow-hidden flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className=' py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <section className='print:hidden '>
                <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                  <div className='px-4 py-5 sm:px-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      {`Invoice detail - ${dateUtils.geLocalDateString(
                        invoice.createdOn
                      )}`}
                    </h3>
                  </div>
                  <div className='border-t border-gray-200'>
                    <dl>
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Patient name
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {invoice.patientName}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Reference Doctor
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {invoice.refDoctor}
                        </dd>
                      </div>
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Patient age - Gender
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {`${invoice.patientAge ?? ''} - ${
                            Gender[invoice.patientGender ?? 2]
                          }`}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Payment details (Payment Mode, reference)
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {`${PaymentMode[invoice.paymentMode ?? 0]} - ${
                            invoice.paymentReference
                          }`}
                        </dd>
                      </div>
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          About
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          a
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
              <table className='print:overflow-hidden print:bg-white min-w-full mt-8 divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr className='divide-x divide-gray-300'>
                    <th
                      scope='col'
                      className='px-1 w-6  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Medicine
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Unit
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      HSN
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Sch
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Batch
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Exp
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Mfg.
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      QTY
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      MRP
                    </th>
                    <th
                      scope='col'
                      className='px-1 w-4  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice?.pharmacyInvoiceMedicines &&
                    invoice.pharmacyInvoiceMedicines.map((medicine, idx) => (
                      <tr
                        key={medicine.itemName}
                        className='divide-x divide-gray-300'
                        onDoubleClick={() => {}}>
                        <td className='px-1 w-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {medicine.itemName}
                        </td>
                        <td className='px-1 w-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {medicine.measuringUnit}
                        </td>
                        <td className='px-1 w-3  py-4 whitespace-nowrap text-sm text-gray-500'>
                          {medicine.hsnCode}
                        </td>
                        <td className='px-1 w-3 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {medicine.schedule}
                        </td>
                        <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {medicine.batchNo}
                        </td>
                        <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {dateUtils.geLocalDateString(medicine.expiryDate)}
                        </td>
                        <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {medicine.manufacturer}
                        </td>
                        <td className='px-1 w-3 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {medicine.quantity}
                        </td>
                        <td className='px-1 w-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {medicine.mrp}
                        </td>
                        <td className='px-1 w-4 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          {medicine.amount}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <section className='flex flex-col justify-end items-end px-4 py-4'>
              <div>Discount: {invoice.discountAmount}</div>
              <div className='font-bold'>Total: {invoice.roundedOffAmount}</div>
            </section>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>loading...</div>
  )
}

export default InvoiceDetail
