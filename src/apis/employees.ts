import { Employee, employees } from '@/constants/employees.ts'

export const fetchEmployees = (): Promise<Array<Employee>> => {
  return new Promise<Array<Employee>>((resolve) => {
    setTimeout(() => {
      resolve(employees)
    }, 3000)
  })
}
export const fetchEmployee = (id: number): Promise<Employee | null> => {
  return new Promise<Employee | null>((resolve) => {
    setTimeout(() => {
      const employee = employees.find((employee => employee.id === id))
      resolve(employee ?? null)
    }, 3000)
  })
}
