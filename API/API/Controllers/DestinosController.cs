using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Context;
using API.Models;

namespace API.Controllers
{
    [Route("destinos")]
    [ApiController]
    public class DestinosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DestinosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Destinos
        [HttpGet]
        public async Task<IActionResult> GetDestinos(
            [FromServices] AppDbContext context,
            [FromQuery] int page = 0,
            [FromQuery] int size = 20
        )
        {

            if ( page == 0  && size == 0) {
                var destinos = await context
                .Destino
                .AsNoTracking()
                .ToListAsync();
                return Ok(destinos);
            }
            else
            {
                var destinos = await context
         .Destino
         .AsNoTracking()
         .Skip(page)
         .Take(size)
         .ToListAsync();

                return Ok(destinos);
            }  

        }
            // GET: api/Destinos/5
            [HttpGet("{id}")]
        public async Task<ActionResult<Destino>> GetDestino(int id)
        {
            var destino = await _context.Destino.FindAsync(id);

            if (destino == null)
            {
                return NotFound();
            }

            return destino;
        }

        // PUT: api/Destinos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDestino(int id, Destino destino)
        {
            if (id != destino.Id)
            {
                return BadRequest();
            }

            _context.Entry(destino).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DestinoExists(id))
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

        // POST: api/Destinos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Destino>> PostDestino(Destino destino)
        {
            _context.Destino.Add(destino);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDestino", new { id = destino.Id }, destino);
        }

        // DELETE: api/Destinos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDestino(int id)
        {
            var destino = await _context.Destino.FindAsync(id);
            if (destino == null)
            {
                return NotFound();
            }

            _context.Destino.Remove(destino);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DestinoExists(int id)
        {
            return _context.Destino.Any(e => e.Id == id);
        }
    }
}
