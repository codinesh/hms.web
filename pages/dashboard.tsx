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
    <div className='w-full flex flex-col'>
      <h1 className='animate-pulse'>Under construction...</h1>
      {/* <span>{date.toString()}</span>

      <DateTimePicker
        value={date}
        showTime={true}
        min={new Date(2020, 12, 20)}
        onSelect={(va1) => {
          setDate(va1)
        }}
      />

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
      </FullScreenModal> */}
    </div>
  )
}
