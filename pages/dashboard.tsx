import React, { useState } from 'react'
import ApiHelper from '../src/ApiHelper'
import DropdownSearch from '../src/components/DropdownSearch'
import constants from '../src/const'
import Patient from '../src/models/Patient'

export default function Example() {
  const [state, setstate] = useState([
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' },
  ])

  const [id, setid] = useState<number>(-1)
  const [text, settext] = useState('')

  return (
    <div className='w-full flex flex-col'>
      <h1 className='animate-pulse'>Under construction...</h1>
      {text}
      {id}
      <DropdownSearch
        onSelect={(value) => {
          setid(value.id)
          settext(value.value)
        }}
        onSearch={async (query) => {
          return new Promise(async (resolve, _) => {
            let results = await ApiHelper.getItems<Patient>(
              `${constants.patientSearchUrl}${query}`
            )

            var filterItems = results.map((x) => ({
              id: x.id,
              value: x.fullName,
            }))
            setstate(filterItems)
            resolve(filterItems)
          })
        }}
        placeholder='test'
        allowFreeText={true}
      />
    </div>
  )
}
