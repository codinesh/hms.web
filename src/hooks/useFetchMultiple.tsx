import {useEffect, useState} from 'react'
import constants from '../const'

function useFetchMultiple<T>(
    url: string,
    method: 'GET' | 'POST',
    headers?: string
): {
    data: T[]
    error: string
    beginCall: (queryString: string) => void
    inProgress: boolean
} {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [begin, setBegin] = useState(false)
    const [inProgress, setInProgress] = useState(false)
    const beginCall = (queryStringInput: string) => {
        setBegin(true)
        fetchData(queryStringInput)
    }

    const fetchData = async (queryStringInput: string) => {
        try {
            setInProgress(true)
            console.log('querysr', queryStringInput, [constants.baseApiUrl, url, queryStringInput].join(''))

            let response = await fetch([constants.baseApiUrl, url, queryStringInput].join(''), {
                method: method,
                mode: 'cors',
            })

            if (response.ok) {
                if (response.status == 204) {
                    setData([])
                }

                let item: T[] = await response.json()
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

    useEffect(() => {
        // begin && fetchData()
    }, [begin])

    return {data, error, inProgress, beginCall}
}

export default useFetchMultiple