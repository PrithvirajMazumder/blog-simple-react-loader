import { Employee, employees } from '@/constants/employees.ts'

let newEmployees: Array<Employee> = []
let isFetched: boolean = false

export const fetchEmployees = (): Promise<Array<Employee>> => {
  if (isFetched) {
    newEmployees = [
      ...newEmployees,
      {
        email: `n@e${newEmployees.length + 1}.com`,
        name: `New Employee ${newEmployees.length + 1}`,
        id: newEmployees.length + 1,
        phone: 9327683278
      }
    ]
  }
  isFetched = true
  return new Promise<Array<Employee>>((resolve) => {
    setTimeout(() => {
      resolve([...employees, ...newEmployees])
    }, 3000)
  })
}
export const fetchEmployee = (id: number): Promise<Employee | null> => {
  return new Promise<Employee | null>((resolve) => {
    setTimeout(() => {
      const employee = employees.find((employee) => employee.id === id)
      resolve(employee ?? null)
    }, 3000)
  })
}
