import React, { PropsWithChildren, useState } from 'react'

interface SearchProps<T extends { id: string | number; value: string }> {
  items: T[]
  onSelect: (value: T) => void
  onClear?: () => void
  allowFreeText?: boolean
  placeholder: string
  selected?: number | string
}

// const DropdownSearch: React.FC<SearchProps<A, DropdownItemType<A>>> = (props) => {

function DropdownSearch<T extends { id: string | number; value: string }>(
  props: PropsWithChildren<SearchProps<T>>
) {
  const { items } = props

  const [selected, setSelected] = useState<number | string | undefined>(
    props.selected
  )
  const [show, setShow] = useState(false)
  const selectedItem = props.items.filter((x) => x.id == props.selected)
  const selectedItemName = selectedItem.length > 0 ? selectedItem[0].value : ''
  const [query, setQuery] = useState(selectedItemName)

  return (
    <div className='relative'>
      <input
        type='text'
        value={query}
        onFocus={() => {
          setShow(true)
        }}
        onBlur={(e) => {
          if (props.allowFreeText) {
            props.onSelect({ id: -1, value: query } as T)
          }
        }}
        onChange={(e) => {
          setShow(true)
          setQuery(e.target.value)
        }}
        className='rounded-md focus:ring-2 w-full z-10'
      />
      {show &&
        items.filter((x) => query == '' || x.value.match(query)).length > 0 && (
          <div className='absolute z-50 py-1 top-12 w-full bg-white shadow-md rounded-md'>
            <ul>
              {items
                .filter((x) => query == '' || x.value.match(query))
                .slice(0, 5)
                .map((x) => (
                  <li
                    key={x.id}
                    className='flex justify-between w-full px-2 py-1 hover:bg-gray-200 text-bold cursor-pointer hover:underline'
                    onClick={(e) => {
                      setQuery(e.currentTarget.textContent ?? '')
                      setSelected(x.id)
                      setShow(false)
                      props.onSelect(x)
                    }}>
                    <span>{x.value}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
    </div>
  )
}

export default DropdownSearch
