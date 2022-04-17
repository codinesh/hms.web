import {useState} from 'react'
import constants from '../const'


function useFetch<T>(
  url: string,
  method: 'GET' | 'POST',
  headers?: string
): {
  data: T
  error: string
  beginWithQueryString: (queryString: string) => void
  beginWithBody: (input: T) => void
  inProgress: boolean
} {
  const [data, setData] = useState<T>({} as T)
  const [error, setError] = useState('')
  const [inProgress, setInProgress] = useState(false)

  const beginWithQueryString = (queryStringInput: string) => {
    fetchData(queryStringInput)
  }

  const beginWithBody = (body: T) => {
    fetchDataWithBody(body)
  }

  const fetchData = async (queryString: string) => {
    try {
      setInProgress(true)
      let response = await fetch([constants.baseApiUrl, url, queryString].join(''), {
        method: method,
        mode: 'cors',
      })

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
    setInProgress(false)
  }

  const fetchDataWithBody = async (data: T) => {
    try {
      setInProgress(true)
      let response = await fetch([constants.baseApiUrl, url].join(''), {
        method: method,
        mode: 'cors',
        body: JSON.stringify(data),
      })

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
    setInProgress(false)
  }

  return {data, error, inProgress, beginWithQueryString, beginWithBody}
}

export default useFetch