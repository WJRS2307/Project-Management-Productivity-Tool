using Microsoft.AspNetCore.Mvc;

namespace project_management_productivity_tool.Controllers
{
    public class SettingsController : Controller
    {
        //My Settings
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Notifications()
        {
            return View();
        }

        public IActionResult TeamManagement()
        {
            return View();
        }

        public IActionResult Archived()
        {
            return View();
        }
    }
}
