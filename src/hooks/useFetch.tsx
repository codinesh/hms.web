import {useEffect, useState} from 'react'
import constants from '../const'

function useFetchForGetItem<T>(
  url: string,
  headers?: string
): {data: T; error: string} {
  const [data, setData] = useState<T>({} as T)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch([constants.baseApiUrl, url].join(''))
        if (response.ok) {
          if (response.status == 204) {
            setData({} as T)
          }

          let item: T = await response.json()
          if (item) {
            setData(item)
          } else {
            setError('data not available')
          }
        } else {
          setError('data not available')
        }
      } catch (err) {
        setError('data not available')
      }
    }

    fetchData()
  }, [url])

  return {data, error}
}

function useFetchForGetItems<T>(
  url: string,
  headers?: string
): {data: T[]; error: string} {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch([constants.baseApiUrl, url].join(''))
        if (response.ok) {
          if (response.status == 204) {
            setData([])
          }

          let item: T[] = await response.json()
          if (item) setData(item)
          else setError('data not available')
        } else {
          setError('data not available')
        }
      } catch (err) {
        setError(err as string)
      }
    }

    fetchData()
  }, [url])

  return {data, error}
}

export default useFetchForGetItems
