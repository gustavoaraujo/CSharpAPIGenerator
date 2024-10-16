const fs = require('fs');
const path = require('path');

function createModelAndController(classDefinition, projectName) {
    const [className, propertiesString] = classDefinition.split(':');
    const properties = propertiesString.split(';');

    let modelContent = `namespace ${projectName}.Models {\n  public class ${className} {\n`;
    properties.forEach(property => {
        const [propName, propType] = property.split('(');
        const formattedType = propType.replace(')', '');
        modelContent += `    public ${formattedType} ${propName} { get; set; }\n`;
    });
    modelContent += '  }\n}';
    fs.writeFileSync(`${projectName}/Models/${className}.cs`, modelContent);

    const controllerContent = `using Microsoft.AspNetCore.Mvc;
using ${projectName}.Models;
using System.Collections.Generic;

namespace ${projectName}.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class ${className}Controller : ControllerBase {
    
    // GET: api/${className}
    [HttpGet]
    public IEnumerable<${className}> GetAll() {
      return new List<${className}>(); // Mock data
    }

    // GET: api/${className}/{id}
    [HttpGet("{id}")]
    public ${className} Get(int id) {
      return new ${className}(); // Mock data
    }

    // POST: api/${className}
    [HttpPost]
    public void Post([FromBody] ${className} newItem) {
      // Insert logic
    }

    // PUT: api/${className}/{id}
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] ${className} updatedItem) {
      // Update logic
    }

    // DELETE: api/${className}/{id}
    [HttpDelete("{id}")]
    public void Delete(int id) {
      // Delete logic
    }
  }
}`;
    fs.writeFileSync(`${projectName}/Controllers/${className}Controller.cs`, controllerContent);
}

function createAdditionalFiles(projectName) {
    const templatesDir = path.join(__dirname, 'templates');

    const csprojTemplate = fs.readFileSync(path.join(templatesDir, 'csproj-template.txt'), 'utf-8');
    const csprojContent = csprojTemplate.replace('{{ProjectName}}', projectName);
    fs.writeFileSync(`${projectName}/${projectName}.csproj`, csprojContent);

    const programTemplate = fs.readFileSync(path.join(templatesDir, 'program-template.txt'), 'utf-8');
    const programContent = programTemplate.replace('{{ProjectName}}', projectName);
    fs.writeFileSync(`${projectName}/Program.cs`, programContent);

    const startupTemplate = fs.readFileSync(path.join(templatesDir, 'startup-template.txt'), 'utf-8');
    const startupContent = startupTemplate.replace('{{ProjectName}}', projectName);
    fs.writeFileSync(`${projectName}/Startup.cs`, startupContent);

    const launchSettingsTemplate = fs.readFileSync(path.join(templatesDir, 'launchSettings-template.txt'), 'utf-8');
    const launchSettingsContent = launchSettingsTemplate.replace('{{ProjectName}}', projectName);
    fs.mkdirSync(`${projectName}/Properties`, { recursive: true });
    fs.writeFileSync(`${projectName}/Properties/launchSettings.json`, launchSettingsContent);
}

function generateApi(filePath) {
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim());
    const projectName = lines[0];

    fs.mkdirSync(`${projectName}/Models`, { recursive: true });
    fs.mkdirSync(`${projectName}/Controllers`, { recursive: true });

    for (let i = 1; i < lines.length; i++) {
        createModelAndController(lines[i], projectName);
    }

    createAdditionalFiles(projectName);

    console.log(`API C# generated: ${projectName}`);
}

const inputFilePath = process.argv[2];
generateApi(inputFilePath);
