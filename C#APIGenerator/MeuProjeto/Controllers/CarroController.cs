using Microsoft.AspNetCore.Mvc;
using MeuProjeto.Models;
using System.Collections.Generic;

namespace MeuProjeto.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class CarroController : ControllerBase {
    
    // GET: api/Carro
    [HttpGet]
    public IEnumerable<Carro> GetAll() {
      return new List<Carro>(); // Mock data
    }

    // GET: api/Carro/{id}
    [HttpGet("{id}")]
    public Carro Get(int id) {
      return new Carro(); // Mock data
    }

    // POST: api/Carro
    [HttpPost]
    public void Post([FromBody] Carro newItem) {
      // Insert logic
    }

    // PUT: api/Carro/{id}
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Carro updatedItem) {
      // Update logic
    }

    // DELETE: api/Carro/{id}
    [HttpDelete("{id}")]
    public void Delete(int id) {
      // Delete logic
    }
  }
}