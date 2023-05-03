﻿using System;
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
    public class CategoryTablesController : ControllerBase
    {
        private readonly restaurant_appContext _context;

        public CategoryTablesController(restaurant_appContext context)
        {
            _context = context;
        }

        // GET: api/CategoryTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryTable>>> GetCategoryTables()
        {
            if (_context.CategoryTables == null)
            {
                return NotFound();
            }
            return await _context.CategoryTables.ToListAsync();
        }

        // GET: api/CategoryTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryTable>> GetCategoryTable(int id)
        {
            if (_context.CategoryTables == null)
            {
                return NotFound();
            }
            var categoryTable = await _context.CategoryTables.FindAsync(id);

            if (categoryTable == null)
            {
                return NotFound();
            }

            return categoryTable;
        }

        // PUT: api/CategoryTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoryTable(int id, CategoryTable categoryTable)
        {
            if (id != categoryTable.CategoryId)
            {
                return BadRequest();
            }

            _context.Entry(categoryTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryTableExists(id))
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

        // POST: api/CategoryTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{menuId}, {displayOrder}")]
        public async Task<ActionResult<CategoryTable>> PostCategoryTable(int menuId, CategoryTable categoryTable, int displayOrder)
        {
          if (_context.CategoryTables == null)
          {
              return Problem("Entity set 'restaurant_appContext.CategoryTables'  is null.");
          }
            _context.CategoryTables.Add(categoryTable);
            
            try
            {
                await _context.SaveChangesAsync();
                //updating menu_category table
                MenuCategory menuCategory = new MenuCategory();
                menuCategory.MenuId = menuId;
                menuCategory.CategoryId = categoryTable.CategoryId;
                menuCategory.DisplayOrder = displayOrder;
                _context.MenuCategories.Add(menuCategory);
                await _context.SaveChangesAsync();

            }
            catch (DbUpdateException)
            {
                if (CategoryTableExists(categoryTable.CategoryId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            ////updating menu_category table
            //MenuCategory menuCategory = new MenuCategory();
            //menuCategory.MenuId = menuId;
            //menuCategory.CategoryId = categoryTable.CategoryId;
            //_context.MenuCategories.Add(menuCategory);
            //await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoryTable", new { id = categoryTable.CategoryId }, categoryTable);
        }

        // DELETE: api/CategoryTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoryTable(int id)
        {
            if (_context.CategoryTables == null)
            {
                return NotFound();
            }
            var categoryTable = await _context.CategoryTables.FindAsync(id);
            if (categoryTable == null)
            {
                return NotFound();
            }

            List<MenuCategory> menuCategories = await _context.MenuCategories.ToListAsync();
            foreach (var menuCat in menuCategories)
            {
                if (menuCat.CategoryId == id && menuCat.IsDeleted == false)
                {
                    menuCat.IsDeleted = true;
                    _context.MenuCategories.Update(menuCat);
                    _context.SaveChanges();
                }
            }

            List<CategoryDish> categoryDishes = await _context.CategoryDishes.ToListAsync();
            foreach (var catDish in categoryDishes)
            {
                if (catDish.CategoryId == id && catDish.IsDeleted == false)
                {
                    catDish.IsDeleted = true;
                    _context.CategoryDishes.Update(catDish);
                    _context.SaveChanges();
                }
            }


            //_context.CategoryTables.Remove(categoryTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryTableExists(int id)
        {
            return (_context.CategoryTables?.Any(e => e.CategoryId == id)).GetValueOrDefault();
        }
    }
}
