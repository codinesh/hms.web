import React, { useEffect, useState } from 'react'
import { dateUtils } from '../helpers/JSUtils'

const AgeInput: React.FC<{
  years?: number
  months?: number
  showMonths?: boolean
  readonly?: boolean
  onSelect: (years: number, months: number) => void
}> = (props) => {
  const [touched, setTouched] = useState({
    years: false,
    months: false,
  })

  const [age, setAge] = useState({
    years: props.years,
    months: props.months,
    showMonths: props.showMonths ?? true,
  })

  useEffect(() => {
    if (age.years || age.months) {
      props.onSelect(age.years ?? 0, age.months ?? 0)
    }
  }, [touched])

  useEffect(() => {
    setAge({ ...age, years: props.years, months: props.months })
  }, [props])

  return (
    <div className='flex gap-1 w-full'>
      <input
        type='number'
        value={age.years}
        disabled={props.readonly}
        placeholder={'years'}
        min={0}
        max={100}
        step={1}
        onChange={(e) => {
          let ageValue = parseInt(e.target.value)

          setAge({ ...age, years: ageValue })
          setTouched({ ...touched, years: true })
        }}
        className='rounded-md w-full read-only:bg-gray-300 read-only:opacity-50'
      />

      {age.showMonths && (
        <input
          type='number'
          disabled={props.readonly}
          placeholder={'months'}
          value={age.months}
          min={0}
          max={12}
          onChange={(e) => {
            let monthValue = parseInt(e.target.value)

            setAge({ ...age, months: monthValue })
            setTouched({ ...touched, months: true })
          }}
          className='rounded-md  w-full  read-only:bg-gray-300 read-only:opacity-50'
          step={1}
        />
      )}
    </div>
  )
}

export default AgeInput
