using Microsoft.AspNetCore.Mvc;

namespace project_management_productivity_tool.Controllers
{
    public class ReportController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
