using Lesson7Application1.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Lesson7Application1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // [HttpGet("{controller=Home}/{action=Index}/{Id?}/{language?}")]
        [HttpGet("{controller=Home}/{action=Index}")]
        public IActionResult Index(int Id, String language)
        {
            return View("Index",Id +" " +language);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}