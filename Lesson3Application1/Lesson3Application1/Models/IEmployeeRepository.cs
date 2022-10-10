using System.Reflection.Metadata.Ecma335;

namespace Lesson3Application1.Models
{
    public interface IEmployeeRepository
    {
        Company getCompany();
        Employee getEmployee(int id);

        IEnumerable<Employee> getEmployeeList();

    }
}
