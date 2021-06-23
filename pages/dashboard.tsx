import React, { Fragment, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import DropdownSearch from '../src/components/DropdownSearch'
import { useGlobalState } from '../src/store/GlobalStore'
import DropdownSearch1 from '../src/components/DropdownSearch1'
import { dateUtils } from '../src/helpers/JSUtils'
import DateTimePicker from '../src/components/DateTimePicker'

export default function Example() {
  const { patients, doctors } = useGlobalState()
  const [date, setDate] = useState(new Date())
  return (
    <div className='max-w-md fixed top-16 flex flex-col'>
      {date.toString()}
      <DateTimePicker
        value={new Date()}
        onSelect={(va) => {
          setDate(va)
        }}
      />
      <div>Test</div>
    </div>
  )
}
