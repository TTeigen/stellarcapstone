import { useState, useEffect } from 'react'

export const useSpaceX = (url, dependencies) => {
  const [spaceXIsLoad, setLoading] = useState(false)
  const [fetchedSpaceX, setFetchedSpaceX] = useState(null)
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
        setFetchedSpaceX(data)
      })
  }, dependencies)
  return [spaceXIsLoad, fetchedSpaceX]
}