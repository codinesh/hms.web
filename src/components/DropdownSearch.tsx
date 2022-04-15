import React, {PropsWithChildren} from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import AsyncCreatableSelect from 'react-select/async-creatable'
import CreatableSelect from 'react-select/creatable'

interface SearchProps<T extends {id: number; value: string; label: string}> {
  items?: T[]
  onSelect: (value: T, isNew: boolean) => void
  onSearch?: (query: string) => Promise<T[]>
  onClear?: () => void
  allowFreeText?: boolean
  placeholder: string
  disabled?: boolean
  selected?: number | string
}

function DropdownSearch<
  T extends {id: number; label: string; value: string; secondaryText?: string}
>(props: PropsWithChildren<SearchProps<T>>) {
  const promiseOptions = (inputValue: string) =>
    new Promise<T[]>(async (resolve, err) => {
      if (props.onSearch) {
        var res = await props.onSearch(inputValue)
        resolve(res)
      } else err()
    })

  const ch = (value: T | null) => {
    if (value) {
      let typ = value as T
      let isNew = typ.id == null || typ.id == undefined
      props.onSelect(typ, isNew)
    }
  }

  return (
    <div className='w-full'>
      {!props.onSearch ? (
        props.allowFreeText ? (
          <CreatableSelect
            isDisabled={props.disabled}
            placeholder={props.placeholder}
            defaultValue={props.items?.filter((x) => x.id == props.selected)[0]}
            options={props.items}
            filterOption={(input, raw: string) =>
              input.label.indexOf(raw) >= 0 ||
              input.data.id.toString().indexOf(raw) >= 0
            }
            onChange={ch}
          />
        ) : (
          <Select
            className='shadow-md rounded-md border'
            isDisabled={props.disabled}
            placeholder={props.placeholder}
            defaultValue={props.items?.filter((x) => x.id == props.selected)[0]}
            options={props.items}
            filterOption={(input, raw: string) =>
              input.label.indexOf(raw) >= 0 ||
              input.data.id.toString().indexOf(raw) >= 0
            }
            onChange={ch}
          />
        )
      ) : props.allowFreeText ? (
        <AsyncCreatableSelect
          isDisabled={props.disabled}
          placeholder={props.placeholder}
          defaultValue={props.items?.filter((x) => x.id == props.selected)[0]}
          options={props.items}
          onChange={ch}
          loadOptions={promiseOptions}
        />
      ) : (
        <AsyncSelect
          isDisabled={props.disabled}
          placeholder={props.placeholder}
          defaultValue={props.items?.filter((x) => x.id == props.selected)[0]}
          options={props.items}
          onChange={ch}
          loadOptions={promiseOptions}
        />
      )}
    </div>
  )
}

export default DropdownSearch
