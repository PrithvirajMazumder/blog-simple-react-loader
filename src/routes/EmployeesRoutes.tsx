import { Route, Routes } from 'react-router-dom'
import { EmployeesList } from '@/features/Employees/pages/List.tsx'
import { EmployeeDetails } from '@/features/Employees/pages/Details.tsx'

export const EmployeesRoutes = () => {
  return (
    <Routes>
      <Route path="/"><EmployeesList /></Route>
      <Route path="/employee/:id"><EmployeeDetails /></Route>
    </Routes>
  )
}
