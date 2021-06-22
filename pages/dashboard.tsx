import React, { Fragment, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import DropdownSearch from '../src/components/DropdownSearch'
import { useGlobalState } from '../src/store/GlobalStore'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function Example() {
  const { patients, doctors } = useGlobalState()

  return (
    <div className='w-full fixed top-16'>
      <DropdownSearch
        selected={0}
        placeholder={'search patient'}
        items={patients.map((x) => ({
          id: x.id,
          value: { value: x.fullName },
        }))}
        onSelect={(e) => {
          console.log(e)
        }}
      />
    </div>
  )
}
