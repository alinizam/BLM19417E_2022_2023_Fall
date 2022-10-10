using Lesson3Application1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Lesson3Application1.Controllers
{
    public class EmployeeController : Controller
    {
        String name;
        IEmployeeRepository _repo;
        public EmployeeController(IEmployeeRepository repo) { 
            _repo=repo; 
        }
        public IActionResult Index()
        {   

            return View("Index",_repo.getCompany());
        }

        public IActionResult Send()
        {
            ViewData["Message"] = "A view data";
            ViewData["Employee"] = _repo.getEmployee(1);

            ViewBag.Message = "A viewbag data";
            ViewBag.Employee = _repo.getEmployee(1);

            ViewBag.sendedData = "Sended Hello";
            TempData["sendedTempData"] = "Sended Temp Hello";

            this.name = "Ahmet";    
            return View("Send", this.name);
        }


        public IActionResult Receive()
        {
          
            return View("Receive", this.name);
        }

        public IActionResult SelectList()
        {
            ViewBag.empList = _repo.getEmployeeList();

            ViewData["empListVD"] = new SelectList(_repo.getEmployeeList(), "Id", "FirstName");

            return View("SelectList", _repo.getEmployee(1));
        }

    }
}
