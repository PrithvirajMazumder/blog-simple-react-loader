import { BrowserRouter } from 'react-router-dom'
import { EmployeesRoutes } from '@/routes/EmployeesRoutes.tsx'

export function App() {
  return (
    <BrowserRouter>
      <EmployeesRoutes />
    </BrowserRouter>
  )
}
