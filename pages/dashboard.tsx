import React, { useState } from 'react'
import { useGlobalState } from '../src/store/GlobalStore'
import DateTimePicker from '../src/components/DateTimePicker'
import FullScreenModal from '../src/components/FullScreenModal'
import PrintInvoice from '../src/components/PrintInvoice'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts'

export default function Example() {
  const { patients, doctors } = useGlobalState()
  const [date, setDate] = useState(new Date())
  const [date1, setDate1] = useState(new Date())

  const [open, setOpen] = useState(false)

  return (
    <div className='w-full flex flex-col hidden'>
      <LineChart
        width={400}
        height={400}
        data={[1, 2, 3, 94, 5, 6, 7]}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey='name' />
        <Tooltip />
        <CartesianGrid stroke='#f5f5f5' />
        <Line type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0} />
        <Line type='monotone' dataKey='pv' stroke='#387908' yAxisId={1} />
      </LineChart>
      <button
        className='print:hidden w-24 bg-red-600'
        onClick={() => {
          setOpen(true)
        }}>
        Open
      </button>

      <FullScreenModal
        title='test'
        open={open}
        onClose={() => {
          setOpen(false)
        }}>
        <>
          <div className='print:hidden flex '>
            <div className=' '>
              {date.toLocaleString()}
              <DateTimePicker
                value={date}
                min={new Date(2020, 12, 20)}
                onSelect={(va1) => {
                  setDate(va1)
                }}
              />
            </div>
            <div className='flex'>
              {date1.toLocaleString()}
              <DateTimePicker
                showTime={true}
                value={date1}
                onSelect={(va) => {
                  setDate1(va)
                }}
              />
            </div>
          </div>
        </>
      </FullScreenModal>
    </div>
  )
}
