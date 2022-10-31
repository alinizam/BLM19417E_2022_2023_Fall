using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Lesson6Application1.Models;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Http;

namespace Lesson6Application1.Controllers
{
    public class ProductsController : Controller
    {
        private readonly BLM19417EContext _context;

        public ProductsController(BLM19417EContext context)
        {
            _context = context;
        }

        // GET: Products
        public async Task<IActionResult> Index()
        {
            HttpContext.Session.SetString("CompanyName","FSMVÜ");  
            return View(await _context.Products.ToListAsync());
        }

        // GET: Products/Details/5
        public async Task<IActionResult> Details(int? id)
        { 
            ViewBag.CompanyName = HttpContext.Session.GetString("CompanyName");
            if (id == null || _context.Products == null)
            {
                return NotFound();
            }
        
            var product = await _context.Products.FirstOrDefaultAsync(m => m.ProductID == id);
            //IQueryable<Product> product = _context.Products.FromSqlRaw<Product>("select * from Products where productId="+id);

            if (product == null)
            {
                return NotFound();
            }

            SqlParameter varDeptID = new SqlParameter
            {
                ParameterName = "deptId",
                SqlDbType = System.Data.SqlDbType.Int,
                Value = product.DepartmentId,
                Direction = System.Data.ParameterDirection.Input
            };
            SqlParameter varProductCount = new SqlParameter
            {
                ParameterName = "productCount",
                SqlDbType = System.Data.SqlDbType.Int, 
                Direction = System.Data.ParameterDirection.Output
            };

            _context.Database.ExecuteSqlRaw("EXEC [dbo].[getProductCount] @deptId,@productCount OUTPUT", varDeptID,varProductCount);
            product.productCount = (Int32)varProductCount.Value;

            return View(product);
        }

        // GET: Products/Create
        public IActionResult Create()
        {
            ViewBag.CompanyName = HttpContext.Session.GetString("CompanyName");
            return View();
        }

        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ProductID,Name,Price,ProductType")] Product product)
        {
            if (ModelState.IsValid)
            {
                _context.Add(product);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(product);
        }

        // GET: Products/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Products == null)
            {
                return NotFound();
            }

            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ProductID,Name,Price,ProductType")] Product product)
        {
            if (id != product.ProductID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(product);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProductExists(product.ProductID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(product);
        }

        // GET: Products/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Products == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .FirstOrDefaultAsync(m => m.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Products == null)
            {
                return Problem("Entity set 'BLM19417EContext.Products'  is null.");
            }
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProductExists(int id)
        {
          return _context.Products.Any(e => e.ProductID == id);
        }
    }
}
