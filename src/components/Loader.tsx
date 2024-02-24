import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

export type LoaderContextProps = {
  isLoading: boolean
  start: () => void
  stop: () => void
}
const LoaderContext = createContext<LoaderContextProps>({} as LoaderContextProps)

export const Loader = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [loaderStack, setLoaderStack] = useState<Array<boolean>>([])

  const start = () => setLoaderStack([...loaderStack, true])

  const stop = () => setLoaderStack([...loaderStack.slice(1)])

  useEffect(() => {
    if (!loaderStack.length) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)
  }, [loaderStack, start, stop])

  return <LoaderContext.Provider value={{
    isLoading,
    start,
    stop
  }}>
    {children}
  </LoaderContext.Provider>
}

export const useLoader = () => useContext(LoaderContext)
