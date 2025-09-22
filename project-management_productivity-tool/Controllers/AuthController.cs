using Microsoft.AspNetCore.Mvc;

namespace project_management_productivity_tool.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult SignUp()
        {
            return View();

        }
        public IActionResult ForgetPassword()
        {
            return View();
        }
    }
}
