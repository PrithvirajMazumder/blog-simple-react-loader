import { BrowserRouter } from 'react-router-dom'
import { EmployeesRoutes } from '@/routes/EmployeesRoutes.tsx'
import { LoaderProvider } from '@/stores/LoaderProvider.tsx'
import { Loader } from '@/components/Loader.tsx'

export function App() {
  return (
    <div className="h-[100svh] w-[100svw] py-[30rem] px-[44rem]">
      <div className="mockup-window border bg-base-300 h-full w-full">
        <LoaderProvider>
          <Loader />
          <div className="p-4 bg-base-100 h-full w-full">
            <BrowserRouter>
              <EmployeesRoutes />
            </BrowserRouter>
          </div>
        </LoaderProvider>
      </div>
    </div>
  )
}
