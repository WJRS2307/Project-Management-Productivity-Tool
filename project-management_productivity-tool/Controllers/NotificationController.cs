using Microsoft.AspNetCore.Mvc;

namespace project_management_productivity_tool.Controllers
{
    public class NotificationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
