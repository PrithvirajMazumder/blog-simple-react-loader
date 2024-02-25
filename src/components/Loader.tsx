import { ReactNode } from 'react'
import { useLoader } from '@/stores/LoaderProvider.tsx'

type Props = { children: ReactNode }
export const Loader = ({ children }: Props) => {
  const { isLoading } = useLoader()

  return (
    <div className="h-full w-full relative">
      {isLoading ? <progress className="progress w-full progress-primary absolute top-0 rounded-none" /> : null}
      {children}
    </div>
  )
}
