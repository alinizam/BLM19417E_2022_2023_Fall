using Lesson2Application1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.FlowAnalysis.DataFlow;

namespace Lesson2Application1.Controllers
{
    public class EmployeeController : Controller
    {
        private EmployeeRepository _repo = new EmployeeRepository();
        public IActionResult List()
        {
            return View("List", _repo.getEmployees());
        }
        [HttpPost]
        public IActionResult Create(Employee e)
        {
            _repo.addEmployee(e);
            return View("List", _repo.getEmployees());
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View("Create");
        }
        public IActionResult Delete(int id)
        {
            _repo.deleteEmployee(id);
            return View("List", _repo.getEmployees());
        }
        public IActionResult Update()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Update(Employee e)
        {
            _repo.updateEmployee(e);
            return View("List", _repo.getEmployees());
        }
    }
}
