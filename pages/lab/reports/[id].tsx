import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { LabInvoice } from '../../../src/models/LabInvoice'
import ApiHelper from '../../../src/ApiHelper'
import Gender from '../../../src/models/Gender'
import constants from '../../../src/const'
import {
  LoadingStateAction,
  useLoadingDispatch,
} from '../../../src/store/LoadingStore'
import FullScreenModal from '../../../src/components/FullScreenModal'
import PrintLabReport from '../../../src/components/PrintLabReport'
import { PrinterIcon, UploadIcon } from '@heroicons/react/outline'

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.id) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(
    `${constants.baseApiUrl}${constants.labInvoiceById}${context.params.id}`
  )

  const labInvoice: LabInvoice = await res.json()

  if (!labInvoice) {
    return {
      notFound: true,
    }
  }

  return {
    props: { labInvoice },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${constants.baseApiUrl}${constants.allLabinvoices}`)
  const labInvoices: LabInvoice[] = await res.json()

  if (!labInvoices) {
    return {
      notFound: true,
    }
  }

  return {
    paths: labInvoices.map((p) => ({
      params: {
        id: p.id.toString(),
      },
    })),
    fallback: true,
  }
}

type TestUpdateModel = {
  id: number
  result: string
}

const LabInvoiceDetail: React.FC<{ labInvoice: LabInvoice }> = (props) => {
  const { labInvoice } = props
  let laResultsMap: Map<string, object> = new Map()

  labInvoice &&
    labInvoice.invoiceDetail &&
    labInvoice.invoiceDetail
      .flatMap((x) => x.labTestRecord)
      .map((x) => ({ id: x.id, result: x.labTestResult }))
      .forEach((m) => {
        let obj: any = {}
        m.result.forEach((mx) => {
          obj[mx.id.toString()] = mx.result
        })

        laResultsMap.set(m.id.toString(), obj)
      })
  const [testResultsState, setTestResultsState] = useState(laResultsMap)
  const router = useRouter()
  const dispatch = useLoadingDispatch()
  const [openPrintPage, setOpenPrintPage] = useState(false)

  const updateTestResult = async (
    labTestRecordId: string,
    labTestResults: any[]
  ) => {
    dispatch({ type: LoadingStateAction.Busy })
    await ApiHelper.postItem<
      { labTestResults: TestUpdateModel[]; labTestRecordId: string },
      any
    >(constants.updateLabTestResult, {
      labTestRecordId,
      labTestResults,
    })
    dispatch({ type: LoadingStateAction.Idle })
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <FullScreenModal
        onClose={() => {
          setOpenPrintPage(false)
        }}
        open={openPrintPage}>
        {labInvoice && <PrintLabReport {...labInvoice}></PrintLabReport>}
      </FullScreenModal>
      <div className='mb-3 bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Lab reports
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Personal details and tests.
          </p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
          <dl className='sm:divide-y sm:divide-gray-200'>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Patient name
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {labInvoice.patientName}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Gender</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {Gender[labInvoice.patientGender]}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Referring doctor
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {labInvoice.refDoctor}
              </dd>
            </div>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                Health conditions
              </dt>
              <dd className='mt-1 text-sm flex gap-1 text-gray-900 sm:mt-0 sm:col-span-2'>
                {labInvoice.invoiceDetail &&
                  labInvoice.invoiceDetail.map((x) => (
                    <span
                      key={x.id}
                      className=' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 text-opacity-75'>
                      {x.testName}
                    </span>
                  ))}
              </dd>
              <dd>
                <button
                  type='button'
                  onClick={() => {
                    setOpenPrintPage(true)
                  }}
                  className='text-center w-5 h-5'>
                  <PrinterIcon />
                </button>
              </dd>
            </div>
            {/* Attachments */}
            {/* <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                  <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                    <div className='w-0 flex-1 flex items-center'>
                      <PaperClipIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-2 flex-1 w-0 truncate'>
                        Lab Report
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Download
                      </a>
                    </div>
                  </li>
                  <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                    <div className='w-0 flex-1 flex items-center'>
                      <PaperClipIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-2 flex-1 w-0 truncate'>
                        prescription.pdf
                      </span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>*/}
          </dl>
        </div>
      </div>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Lab tests
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>test reports.</p>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
          <dl className='sm:divide-y sm:divide-gray-200'>
            {labInvoice.invoiceDetail.map((test) => {
              return (
                <div className='flex items-center pr-4'>
                  <div className='flex-grow py-4  flex gap-1 px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      {test.testName}
                    </dt>
                    <dd className='mt-1 divide-y flex flex-col text-sm text-gray-900 sm:mt-0 '>
                      {test.labTestRecord.labTestResult.map((x) => {
                        let value: any = testResultsState.get(
                          x.labTestRecordId.toString()
                        )
                        let testResult = ''
                        if (value) {
                          testResult = value[x.id]
                        }

                        return (
                          <dl className='sm:divide-y sm:divide-gray-200'>
                            <div className='flex gap-4 py-4 sm:py-5 px-6'>
                              <dt className=' flex flex-col w-full  text-sm font-medium text-gray-500'>
                                <span>{x.test}</span>
                                <span>{x.referenceRange}</span>
                              </dt>
                              <dd className='mt-1 text-sm  text-gray-900 sm:mt-0'>
                                <input
                                  type='text'
                                  className=' shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                                  value={testResult}
                                  onChange={(e) => {
                                    var res: any = testResultsState.get(
                                      test.labTestRecord.id.toString()
                                    )
                                    res[x.id.toString()] = e.target.value

                                    testResultsState.set(
                                      test.labTestRecord.id.toString(),
                                      res
                                    )
                                    setTestResultsState(
                                      new Map(testResultsState)
                                    )
                                  }}
                                />
                              </dd>
                            </div>
                          </dl>
                        )
                      })}
                    </dd>
                  </div>
                  <button
                    type='button'
                    onClick={() => {
                      let results = testResultsState.get(
                        test.labTestRecord.id.toString()
                      )
                      let c = Object.entries(results ?? {}).map((a) => ({
                        id: a[0],
                        result: a[1],
                      }))

                      updateTestResult(test.labTestRecord.id.toString(), c)
                    }}
                    className=' flex-shrink inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
                    <UploadIcon
                      className='-ml-1 mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                    Save
                  </button>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default LabInvoiceDetail
