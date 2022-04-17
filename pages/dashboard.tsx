import {DocumentReportIcon, UserIcon} from "@heroicons/react/outline"
import {useState} from "react"
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import DateTimePicker from "../src/components/DateTimePicker"
import LoadingIndicator from "../src/components/LoadingIndicator"
import constants from "../src/const"
import {classNames} from "../src/helpers/csshelpers"
import {dateUtils} from "../src/helpers/JSUtils"
import useFetch from "../src/hooks/useFetch"
import useFetchMultiple from "../src/hooks/useFetchMultiple"

export default function Dashboard() {
  const curDate = new Date()
  curDate.setFullYear(curDate.getFullYear() - 1)
  const [dateRange, setDateRange] = useState<{start: Date, end: Date}>(
    {
      start: curDate,
      end: new Date()
    }
  )
  const {data, error, inProgress, beginWithQueryString} = useFetch<
    {
      patientCount: number,
      appointmentCount: number,
      opAmount: number
      ipAmount: number
      labAmount: number
      pharmacyAmount: number
    }>(constants.dashboardDataReport, 'GET')

  const patientRevenueResponse = useFetch<
    {
      patientCount: number,
      appointmentCount: number,
      opAmount: number
      ipAmount: number
      labAmount: number
      pharmacyAmount: number
    }>(constants.patientRevenueReport, 'GET')

  const patientReportResponse = useFetchMultiple<
    {
      Year: number,
      month: string,
      patientCount: number,
      price: number,
      discount: number,
      amount: number
    }>(constants.invoiceReport, 'GET')

  const opReportResponse = useFetchMultiple<
    {
      Year: number,
      month: string,
      patientCount: number,
      price: number,
      discount: number,
      amount: number
    }>(constants.invoiceReport, 'GET')


  const ipReportResponse = useFetchMultiple<
    {
      Year: number,
      month: string,
      patientCount: number,
      price: number,
      discount: number,
      amount: number
    }>(constants.invoiceReport, 'GET')

  const otherReportResponse = useFetchMultiple<
    {
      Year: number,
      month: string,
      patientCount: number,
      price: number,
      discount: number,
      amount: number
    }>(constants.invoiceReport, 'GET')

  return (
    <div className="grid gap-2 ">
      <section className="flex items-center  w-full justify-end align-middle">
        <LoadingIndicator open={inProgress || patientRevenueResponse.inProgress || patientReportResponse.inProgress} />
        <div className='flex gap-2'>
          <div>
            <label
              htmlFor='startTime'
              className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
              Start
            </label>
          </div>
          <div className=''>
            <DateTimePicker

              onSelect={(date) => {
                setDateRange({...dateRange, start: date})
              }}
              value={dateRange.start} />
          </div>
        </div>
        <div className=' flex gap-2'>
          <div>
            <label
              htmlFor='startTime'
              className='block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2'>
              End
            </label>
          </div>
          <div className=''>
            <DateTimePicker

              onSelect={(date) => {
                setDateRange({...dateRange, end: date})
              }}
              value={dateRange.end} />
          </div>
        </div>

        <button
          type='button'
          onClick={() => {
            beginWithQueryString(`?startDate=${dateUtils.getIsoDateString(dateRange.start)}&endDate=${dateUtils.getIsoDateString(dateRange.end)}`)
            opReportResponse.beginCall(`?startDate=${dateUtils.getIsoDateString(dateRange.start)}&endDate=${dateUtils.getIsoDateString(dateRange.end)}&type=1&frequency=${'Daily'}`)
            ipReportResponse.beginCall(`?startDate=${dateUtils.getIsoDateString(dateRange.start)}&endDate=${dateUtils.getIsoDateString(dateRange.end)}&type=2&frequency=${'Daily'}`)
            patientReportResponse.beginCall(`?startDate=${dateUtils.getIsoDateString(dateRange.start)}&endDate=${dateUtils.getIsoDateString(dateRange.end)}&type=3&frequency=${'Daily'}`)
            otherReportResponse.beginCall(`?startDate=${dateUtils.getIsoDateString(dateRange.start)}&endDate=${dateUtils.getIsoDateString(dateRange.end)}&type=4&frequency=${'Daily'}`)
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <DocumentReportIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Generate report
        </button>
      </section>
      <section className=' gap-4 w-full flex flex-wrap '>
        <Card color='bg-indigo-400' title="Patients" content={data.patientCount} />
        <Card color='bg-red-400' title="Appointments" content={data.appointmentCount} />
        <Card color='bg-yellow-400' title="Pharmacy" content={data.pharmacyAmount} />
        <Card color='bg-violet-400' title="Out patient" content={data.opAmount} />
        <Card color='bg-blue-400' title="In patient" content={data.ipAmount} />
        <Card color='bg-orange-400' title="Lab amount" content={data.labAmount} />
      </section>
      <section className=' gap-4 w-full flex flex-wrap '>
        <ResponsiveContainer width={'50%'} height="100%">
          <LineChart
            data={patientReportResponse.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            <Line type="monotone" dataKey="discount" stroke="#833a9d" />
            <Line type="monotone" dataKey="amount" stroke="#821234" />
          </LineChart>
        </ResponsiveContainer>
      </section>
      <section className=' gap-4 w-full flex flex-wrap '>
        <ResponsiveContainer width={'50%'} height="100%">
          <LineChart
            data={ipReportResponse.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            <Line type="monotone" dataKey="discount" stroke="#833a9d" />
            <Line type="monotone" dataKey="amount" stroke="#821234" />
          </LineChart>
        </ResponsiveContainer>
      </section>
      <section className=' gap-4 w-full flex flex-wrap '>
        <ResponsiveContainer width={'50%'} height="100%">
          <LineChart
            data={opReportResponse.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            <Line type="monotone" dataKey="discount" stroke="#833a9d" />
            <Line type="monotone" dataKey="amount" stroke="#821234" />
          </LineChart>
        </ResponsiveContainer>
      </section><section className=' gap-4 w-full flex flex-wrap '
      >
        <ResponsiveContainer width={'50%'} height="100%">
          <LineChart
            data={otherReportResponse.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
            <Line type="monotone" dataKey="discount" stroke="#833a9d" />
            <Line type="monotone" dataKey="amount" stroke="#821234" />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  )
}

const Card: React.FC<{
  Icon?: (props: React.ComponentProps<'svg'>) => JSX.Element,
  title: string,
  content: any
  color: string
}> = ({Icon, title, color, content}) => {
  return (
    <div className={classNames('hover:cursor-pointer hover:shadow-lg hover:scale-125 transition-transform shadow-md h-28 max-w-md w-44 flex flex-col justify-between rounded-md p-2', color)}>
      <div className="flex gap-2">
        <UserIcon width={22} className={classNames('rounded-md', color, ' border bg-opacity-50')} />
        <div className=''>
          {title}
        </div>
      </div>
      <div>
        {content}
      </div>
      <span className="text-sm font-thin">
        {'last 2 days'}
      </span>
    </div>
  )
}
