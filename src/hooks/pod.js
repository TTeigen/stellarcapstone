import { useState, useEffect } from 'react'

export const usePod = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false)
  const [fetchedPicture, setFetchedPicture] = useState(null)
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
        setFetchedPicture(data)
      })
  }, dependencies)
  return [isLoading, fetchedPicture]
}