import { useState, useEffect } from 'react'

export const useHttp = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)
  useEffect(() => {
    setLoading(true)
    console.log(url)
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed...')
        }
        return response.json()
      })
      .then((data) => {
        setLoading(false)
        setFetchedData(data)
      })
  }, dependencies)
  console.log('fetchedData', fetchedData)
  return [isLoading, fetchedData]
}


