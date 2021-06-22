import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SearchIcon } from '@heroicons/react/outline'
import React, { Fragment, PropsWithChildren, useRef, useState } from 'react'

type DropdownItemType<T extends { value: string }> = {
  id: number | string
  value: T
}

interface SearchProps<T extends { value: string }> {
  items: DropdownItemType<T>[]
  onSelect: (value: T) => void
  onClear?: () => void
  placeholder: string
  selected: number | string
}

// const DropdownSearch: React.FC<SearchProps<A, DropdownItemType<A>>> = (props) => {

function DropdownSearch<T extends { value: string }>(
  props: PropsWithChildren<SearchProps<T>>
) {
  const [selected, setSelected] = useState<number | string>(props.selected)
  const [query, setQuery] = useState('')
  const tes = useRef<HTMLButtonElement>(null)

  return (
    <div className='w-72 fixed top-16'>
      <Listbox
        value={selected}
        onChange={(b) => {
          if (b) {
            setSelected(b)
            setQuery(props.items.filter((x) => x.id == b)[0].value.value)
          }
        }}>
        <div className='relative mt-1'>
          <>
            <input
              type='text'
              name='age'
              id='age'
              value={query}
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md'
              placeholder={props.placeholder}
              onChange={(e) => {
                setQuery(e.target.value)
                if (e.target.value.length > 3) {
                  tes && tes.current?.click()
                }
              }}
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <label htmlFor='insuranceId' className='sr-only'>
                AgeType
              </label>
              <button
                onClick={() => {
                  tes && tes.current?.click()
                }}
                className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                <SearchIcon className='w-5 h-5' />
              </button>
            </div>
          </>

          <div className='w-full flex bg-red-300'>
            <Listbox.Button ref={tes}></Listbox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {props.items
                .filter(
                  (x) =>
                    query == '' ||
                    x.value.value.toLowerCase().match(query.toLowerCase())
                )
                .map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${
                        active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                      }
                            cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={person}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } block truncate`}>
                          {person.value.value}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-amber-600' : 'text-amber-600'
                            }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}>
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default DropdownSearch
