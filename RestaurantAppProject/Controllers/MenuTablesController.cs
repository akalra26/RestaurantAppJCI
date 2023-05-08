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
    public class MenuTablesController : ControllerBase
    {
        private readonly restaurant_appContext _context;

        public MenuTablesController(restaurant_appContext context)
        {
            _context = context;
        }

        // GET: api/MenuTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuTable>>> GetMenuTables()
        {
          if (_context.MenuTables == null)
          {
              return NotFound();
          }

            List<MenuTable> menus = await _context.MenuTables.ToListAsync();
            //filetered list is the new list which has the menu table records which are no deleted or isDelete == false
            List<MenuTable> filteredList = menus.FindAll(cat => cat.IsDeleted == false);
            return Ok(filteredList);
            //return await _context.MenuTables.ToListAsync();
        }

        // GET: api/MenuTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MenuTable>> GetMenuTable(int id)
        {
          if (_context.MenuTables == null)
          {
              return NotFound();
          }
            var menuTable = await _context.MenuTables.FindAsync(id);

            if (menuTable == null || menuTable.IsDeleted == true)
            {
                return NotFound();
            }

            return menuTable;
        }

        // PUT: api/MenuTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuTable(int id, MenuTable menuTable)
        {
            if (id != menuTable.MenuId)
            {
                return BadRequest();
            }

            _context.Entry(menuTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuTableExists(id))
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

        // POST: api/MenuTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuTable>> PostMenuTable(MenuTable menuTable)
        {
          if (_context.MenuTables == null)
          {
              return Problem("Entity set 'restaurant_appContext.MenuTables'  is null.");
          }
            _context.MenuTables.Add(menuTable);
            try
            {
                await _context.SaveChangesAsync();

                //List<CategoryTable>
            }
            catch (DbUpdateException)
            {
                if (MenuTableExists(menuTable.MenuId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMenuTable", new { id = menuTable.MenuId }, menuTable);
        }

        // DELETE: api/MenuTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuTable(int id)
        {
            if (_context.MenuTables == null)
            {
                return NotFound();
            }
            var menuTable = await _context.MenuTables.FindAsync(id);
            if (menuTable == null)
            {
                return NotFound();
            }

            //instead of removing we just make isDeleted = true soft delete
            List<MenuTable> menuTables = await _context.MenuTables.ToListAsync();
            foreach(var menuTab in menuTables)
            {
                if (menuTab.MenuId == id && menuTab.IsDeleted == false)
                {
                    menuTab.IsDeleted = true;
                    _context.MenuTables.Update(menuTab);
                    _context.SaveChanges();
                }
            }
            // any menu soft deleted has also to be deleted from menu category too
            List<MenuCategory> menuCategories = await _context.MenuCategories.ToListAsync();
            foreach (var menuCat in menuCategories)
            {
                if (menuCat.MenuId == id && menuCat.IsDeleted == false)
                {
                    menuCat.IsDeleted = true;
                    _context.MenuCategories.Update(menuCat);
                    _context.SaveChanges();
                }
            }



            //_context.MenuTables.Remove(menuTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuTableExists(int id)
        {
            return (_context.MenuTables?.Any(e => e.MenuId == id)).GetValueOrDefault();
        }
    }
}
