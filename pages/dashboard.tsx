import React, { Fragment, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import DropdownSearch from '../src/components/DropdownSearch'
import { useGlobalState } from '../src/store/GlobalStore'
import { dateUtils } from '../src/helpers/JSUtils'
import DateTimePicker from '../src/components/DateTimePicker'

export default function Example() {
  const { patients, doctors } = useGlobalState()
  const [date, setDate] = useState(new Date())
  const [date1, setDate1] = useState(new Date())
  return (
    <div className='w-full fixed top-16 flex flex-col'>
      <div className='flex '>
        {date.toLocaleString()}
        <DateTimePicker
          value={date}
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
  )
}
