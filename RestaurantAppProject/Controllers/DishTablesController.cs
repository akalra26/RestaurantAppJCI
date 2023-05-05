using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestaurantAppProject.Models;

namespace RestaurantAppProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishTablesController : ControllerBase
    {
        private readonly restaurant_appContext _context;

        public DishTablesController(restaurant_appContext context)
        {
            _context = context;
        }

        // GET: api/DishTables
        [HttpGet("categoryId={categoryId}")]
        public async Task<ActionResult<IEnumerable<DishTable>>> GetDishTables(int categoryId)
        {
          if (_context.DishTables == null)
          {
              return NotFound();
          }
            List<DishTable> dishes = await _context.DishTables.ToListAsync();

            List<CategoryDish> categoryDishes = await _context.CategoryDishes.ToListAsync();
            List<int?> filteredList = new List<int?>();
            List<DishTable> newdishlist = new List<DishTable>();
            //List<DishTable> filteredList = dishes.FindAll(cat => cat.IsDeleted == false);
            foreach (var catDish in categoryDishes)
            {
                if (catDish.CategoryId == categoryId)
                {
                    filteredList.Add(catDish.DishId);
                }
            }

            foreach (var dish in dishes)
            {
                if (filteredList.Contains(dish.DishId) && dish.IsDeleted == false)
                {
                    newdishlist.Add(dish);
                }
            }

            if (newdishlist.Count == 0)
            {
                return NotFound();
            }
            return Ok(newdishlist);
            //return await _context.DishTables.ToListAsync();
        }

        // GET: api/DishTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DishTable>> GetDishTable(int id)
        {
          if (_context.DishTables == null)
          {
              return NotFound();
          }
            var dishTable = await _context.DishTables.FindAsync(id);

            if (dishTable == null || dishTable.IsDeleted == true) 
            {
                return NotFound();
            }

            return dishTable;
        }

        // PUT: api/DishTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDishTable(int id, DishTable dishTable)
        {
            if (id != dishTable.DishId)
            {
                return BadRequest();
            }

            _context.Entry(dishTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DishTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DishTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{categoryId}")]
        public async Task<ActionResult<DishTable>> PostDishTable(int categoryId, DishTable dishTable)
        {
          if (_context.DishTables == null)
          {
              return Problem("Entity set 'restaurant_appContext.DishTables'  is null.");
          }
            _context.DishTables.Add(dishTable);
            try
            {
                await _context.SaveChangesAsync();

                //updating Category_Dish table
                CategoryDish categoryDish = new CategoryDish();
                categoryDish.CategoryId = categoryId;
                categoryDish.DishId = dishTable.DishId;
                categoryDish.IsDeleted = false;
                _context.CategoryDishes.Add(categoryDish);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DishTableExists(dishTable.DishId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDishTable", new { id = dishTable.DishId }, dishTable);
        }

        // DELETE: api/DishTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDishTable(int id)
        {
            if (_context.DishTables == null)
            {
                return NotFound();
            }
            var dishTable = await _context.DishTables.FindAsync(id);
            if (dishTable == null)
            {
                return NotFound();
            }

            List<DishTable> dishTables = await _context.DishTables.ToListAsync();
            foreach(var DishTab in dishTables)
            {
                if(DishTab.DishId == id && DishTab.IsDeleted == false)
                {
                    DishTab.IsDeleted = true;
                    _context.DishTables.Update(DishTab);
                    _context.SaveChanges();
                }
            }

            List<CategoryDish> categoryDishes = await _context.CategoryDishes.ToListAsync();
            foreach(var catDish in categoryDishes)
            {
                if(catDish.DishId == id && catDish.IsDeleted == false){
                    catDish.IsDeleted = true;

                    _context.CategoryDishes.Update(catDish);
                    _context.SaveChanges();
                }
            }

            //_context.DishTables.Remove(dishTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DishTableExists(int id)
        {
            return (_context.DishTables?.Any(e => e.DishId == id)).GetValueOrDefault();
        }
    }
}
