import { useState, useEffect } from 'react'

//custom hook re-used for API calls

export const useHttp = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)
  useEffect(() => {
    setLoading(true)
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
  return [isLoading, fetchedData]
}


