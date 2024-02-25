export type Employee = {
  id: number
  name: string
  email: string
  phone: number
}
export const employees: Employee[] = [
  {
    id: 1,
    email: 'j@d.com',
    name: 'John Doe',
    phone: 123987456
  },
  {
    id: 2,
    email: 'a@d.com',
    name: 'Acme Doe',
    phone: 987987456
  },
  {
    id: 3,
    email: 'b@d.com',
    name: 'Bob Doe',
    phone: 678987456
  },
  {
    id: 4,
    email: 'j@d.com',
    name: 'Alex Doe',
    phone: 567987456
  },
] as const
