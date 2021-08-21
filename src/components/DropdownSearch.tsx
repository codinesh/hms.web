import React, { PropsWithChildren, useEffect, useState } from 'react'

interface SearchProps<T extends { id: number; value: string }> {
  items?: T[]
  onSelect: (value: T) => void
  onSearch?: (query: string) => Promise<T[]>
  onClear?: () => void
  allowFreeText?: boolean
  placeholder: string
  selected?: number | string
}

function DropdownSearch<
  T extends { id: number; value: string; secondaryText?: string }
>(props: PropsWithChildren<SearchProps<T>>) {
  const [searchItems, setSearchItems] = useState([...(props.items ?? [])])
  const [selected, setSelected] = useState<number | string | undefined>(
    props.selected
  )
  const [show, setShow] = useState(false)
  const selectedItem = searchItems.filter((x) => x.id == props.selected)
  const selectedItemName = selectedItem.length > 0 ? selectedItem[0].value : ''
  const [query, setQuery] = useState(selectedItemName)

  useEffect(() => {
    setSearchItems([...(props.items ?? [])])
  }, [props.items])

  useEffect(() => {
    setSelected(props.selected)
    const selectedItem = searchItems.filter((x) => x.id == props.selected)
    const selectedItemName =
      selectedItem.length > 0 ? selectedItem[0].value : ''

    setQuery(selectedItemName)
  }, [props.selected])

  return (
    <div className='relative'>
      <input
        type='text'
        value={query}
        onFocus={() => {
          setShow(true)
        }}
        onBlur={() => {
          setTimeout(() => setShow(false), 3000)
        }}
        onChange={async (e) => {
          setSelected(undefined)
          setShow(true)
          setQuery(e.target.value)
          if (e.target.value == '') {
            setSearchItems([])
            return
          } else {
            if (props.items && props.items.length > 0) {
              setSearchItems(
                props.items.filter(
                  (x) =>
                    e.target.value == '' ||
                    x.value.toLowerCase().match(e.target.value.toLowerCase()) ||
                    x.id.toLocaleString().match(e.target.value.toLowerCase())
                )
              )
            } else if (props.onSearch) {
              let searchedItems = await props.onSearch(e.target.value)
              setSearchItems(searchedItems)
            }
          }

          if (props.allowFreeText && query.length > 0 && !selected) {
            props.onSelect({ id: -1, value: query } as T)
          }
        }}
        className='rounded-md focus:ring-2 w-full z-10'
      />
      {show && searchItems.length > 0 && (
        <div className='absolute z-50 py-1 top-12 w-full bg-white shadow-md rounded-md'>
          <ul className='divide-y divide-opacity-40 rounded-md divide-gray-400'>
            {searchItems.slice(0, 5).map((x) => (
              <li
                key={x.id}
                className='flex justify-between w-full px-2 py-2 rounded-md hover:bg-gray-200 text-bold cursor-pointer'
                onClick={(e) => {
                  setQuery(x.value ?? '')
                  setSelected(x.id)
                  setShow(false)
                  props.onSelect(x)
                }}>
                <div className='flex flex-col'>
                  <span>{x.value}</span>
                  {x.secondaryText && (
                    <span className='font-thin'>{x.secondaryText}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownSearch
