namespace Lesson2Application1.Models
{
    public class EmployeeRepository
    {
        static public List<Employee> _employees=new List<Employee>() { 
            new Employee{Id=1,FirstName="Ahmet",LastName="Ak",Salary=5000},
            new Employee{Id=2,FirstName="Ayşe",LastName="Ak",Salary=10000}

        };

        public List<Employee> getEmployees() { 
            return _employees;
        }

        public void addEmployee(Employee e) { 
            _employees.Add(e);
        }

        public void deleteEmployee(int id)
        {
            var emp= _employees.Find(e=>e.Id==id);
            if (emp != null)
            {
                _employees.Remove(emp);
            }

        }
    }
}
