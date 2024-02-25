import { useLoader } from '@/stores/LoaderProvider.tsx'
import { useEffect, useState } from 'react'
import { Employee } from '@/constants/employees.ts'
import { fetchEmployees } from '@/apis/employees.ts'

export const EmployeesList = () => {
  const [employees, setEmployees] = useState<Array<Employee>>([])
  const loader = useLoader()

  const getEmployees = async () => {
    try {
      loader.start()
      const employees = await fetchEmployees()
      setEmployees(employees)
    } catch (e) {
      console.log('Employees cannot be fetched!')
    } finally {
      loader.stop()
    }
  }

  useEffect(() => {
    void getEmployees()
  }, [])

  if (!employees?.length) {
    return <></>
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Employees</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <th>{index + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="btn btn-primary btn-sm" onClick={getEmployees}>Re-fetch</button>
      </div>
    </>
  )
}
