using Microsoft.AspNetCore.Mvc;

namespace Lesson3Application1.Models
{
    public class EmployeeRepository:IEmployeeRepository
    {
        static public List<Employee> _employees=new List<Employee>() { 
            new Employee{Id=1,FirstName="Ahmet",LastName="Ak",Salary=5000},
            new Employee{Id=2,FirstName="Ayşe",LastName="Ak",Salary=10000}

        };

        public Company getCompany() { 
            return new Company();
        }

        public IEnumerable<Employee> getEmployeeList()
        {
            return _employees;
        }

        public List<Employee> getEmployees() { 
            return _employees;
        }
        [HttpPost]
        public void addEmployee(Employee e) { 
            _employees.Add(e);
        }

        public Employee getEmployee(int id)
        {
            var employee = _employees.Where(e => e.Id == id).First();
            return employee;
        }

        public void deleteEmployee(int id)
        {
            var emp= _employees.Find(e=>e.Id==id);
            if (emp != null)
            {
                _employees.Remove(emp);
            }

        }

        public void updateEmployee(Employee employee)
        {
            /*First Solution

             var emp = _employees.Find(e => e.Id == employee.Id);
             if (emp != null)
             {
                 if (employee.Salary > 0)
                 {
                     _employees.Remove(emp);
                     _employees.Add(employee);
                 }
             }
            */
            var emp = _employees.Find(e => e.Id == employee.Id);
            if (emp != null) {
                emp.FirstName = employee.FirstName;
                emp.LastName = employee.LastName;
                if (employee.Salary > 0)
                {
                    emp.Salary = employee.Salary;
                }
            }
                
        }
    }
}
