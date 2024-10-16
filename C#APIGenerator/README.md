# C# API Generator

This project is a console application that generates a C# Web API based on a simple text file definition. The input file contains the project name and class definitions, specifying models and their properties. For each model, the application generates a corresponding `Model` and `Controller` with basic CRUD operations (`GET`, `POST`, `PUT`, `DELETE`).

## How It Works

1. The application reads a text file where:
    - The **first line** is the name of the project.
    - Each subsequent line defines a class in the format: `ClassName:property1(type);property2(type);...`

2. The generator creates:
    - A folder structure for an ASP.NET Core project.
    - Models for each class.
    - Controllers for each model with basic CRUD operations.
   
3. The models are placed inside the `Models` folder, and controllers inside the `Controllers` folder.

### Example Input File

```
MyProject 
Animal:legs(int);hasFur(bool);height(double);name(string) 
Car:brand(string);model(string);year(int)
```

### Generated Output

For the above input, the application will generate:

- A project named `MyProject`.
- A model called `Animal` with properties `legs`, `hasFur`, `height`, and `name`.
- A controller called `AnimalsController` with `GET`, `POST`, `PUT`, and `DELETE` methods.
- A model called `Car` with properties `brand`, `model`, and `year`.
- A controller called `CarsController` with `GET`, `POST`, `PUT`, and `DELETE` methods.

## Requirements

- Node.js installed
- .NET SDK (for building and running the generated C# project)

## How to Use

1. Clone or download this project.
2. Run the generator using Node.js.

    ```bash
    node app.js {definitionsFileName}
    ```
3. The generated API will be created in a new folder matching the project name from the input file.


## File Structure

The generated project will have the following structure:

```
MyProject/
?
??? Controllers/
?   ??? AnimalsController.cs
?   ??? CarsController.cs
?
??? Models/
?   ??? Animal.cs
?   ??? Car.cs
?
??? MyProject.csproj
??? Program.cs

```

## Customization

You can modify the generated files as needed to suit your application’s requirements, such as adding business logic, additional methods, or modifying database configurations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.