import React, { Fragment, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import DropdownSearch from '../src/components/DropdownSearch'
import { useGlobalState } from '../src/store/GlobalStore'
import DropdownSearch1 from '../src/components/DropdownSearch1'

export default function Example() {
  const { patients, doctors } = useGlobalState()

  return (
    <div className='max-w-md fixed top-16'>
      <DropdownSearch1
        selected={1}
        placeholder={'search patient'}
        items={patients.map((x) => ({
          id: x.id,
          value: x.fullName,
        }))}
        onSelect={(e) => {
          console.log(e)
        }}
      />

      <div>Test</div>
    </div>
  )
}
