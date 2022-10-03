using Lesson2Application1.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lesson2Application1.Controllers
{
    public class HomeController : Controller
    {
      
        [HttpGet]
        public IActionResult Index()
        {
            return View("Index", "Hello");
        }
        List<String> names = new List<String>() { "Ahmet", "Ayşe", "Mehmet" };
        public IActionResult Index1()
        {
            return View("Index1", names);
        }
     
    }
}
