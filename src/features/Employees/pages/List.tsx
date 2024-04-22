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
      alert('Employees cannot be fetched!')
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
      <button className="btn btn-primary btn-sm" onClick={getEmployees}>
        Re-fetch
      </button>
      <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
