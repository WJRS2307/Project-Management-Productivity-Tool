using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace project_management_productivity_tool.Controllers
{
    public class TimesheetController : Controller
    {
        // GET: TimesheetController
        public ActionResult Index()
        {
            return View();
        }

        // GET: TimesheetController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: TimesheetController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TimesheetController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TimesheetController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: TimesheetController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TimesheetController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: TimesheetController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
