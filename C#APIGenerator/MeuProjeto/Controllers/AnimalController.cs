using Microsoft.AspNetCore.Mvc;
using MeuProjeto.Models;
using System.Collections.Generic;

namespace MeuProjeto.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class AnimalController : ControllerBase {
    
    // GET: api/Animal
    [HttpGet]
    public IEnumerable<Animal> GetAll() {
      return new List<Animal>(); // Mock data
    }

    // GET: api/Animal/{id}
    [HttpGet("{id}")]
    public Animal Get(int id) {
      return new Animal(); // Mock data
    }

    // POST: api/Animal
    [HttpPost]
    public void Post([FromBody] Animal newItem) {
      // Insert logic
    }

    // PUT: api/Animal/{id}
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Animal updatedItem) {
      // Update logic
    }

    // DELETE: api/Animal/{id}
    [HttpDelete("{id}")]
    public void Delete(int id) {
      // Delete logic
    }
  }
}