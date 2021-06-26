import React, { useEffect, useState } from 'react'
import { dateUtils } from '../helpers/JSUtils'

const DateTimePicker: React.FC<{
  value: Date
  showTime?: boolean
  onSelect: (date: Date) => void
}> = (props) => {
  const [touched, setTouched] = useState({
    date: false,
    time: props.showTime != true,
  })
  const [date, setDate] = useState(dateUtils.getIsoDateString(props.value))
  const [time, setTime] = useState(dateUtils.getIsoTimeString(props.value))

  useEffect(() => {
    if (touched.date && touched.time) {
      let dateVal = new Date(date)
      if (!props.showTime) {
        dateVal.setHours(0)
        dateVal.setMinutes(0)
      } else {
        dateVal.setHours(parseInt(time.split(':')[0]))
        dateVal.setMinutes(parseInt(time.split(':')[1]))
      }
      props.onSelect(dateVal)
    }
  }, [touched])
  return (
    <div className='flex gap-1 '>
      <input
        type='date'
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          setTouched({ ...touched, date: true })
        }}
        className='rounded-md'
      />
      {props.showTime && (
        <input
          type='time'
          value={time}
          onChange={(e) => {
            setTouched({ ...touched, time: true })
            setTime(e.target.value)
          }}
          className='rounded-md'
          step={300}
        />
      )}
    </div>
  )
}

export default DateTimePicker
