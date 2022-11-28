///  POO
class Person {

    constructor(nombre, genero, altura, colorPelo, peso, yearOfBirth, hobbies)
    {
        this.nombre = nombre;
        this.genero = genero;
        this.altura = altura;
        this.colorPelo = colorPelo;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
         }
    calcularIMC()
    {
       return this.peso/(this.altura*2);
    }
   
    calcularEdad(anyo)
    {    
       return  anyo - this.yearOfBirth;
    }
    
    printAll()
    {
        console.log(`nombre - `+this.nombre);
        console.log(`genero - `+this.genero);
        console.log(`altura - `+this.altura);
        console.log(`colorPelo - `+this.colorPelo);
        console.log(`peso - `+this.peso);
        console.log(`yearOfBirth - `+this.yearOfBirth);
        console.log(`hobbies - `+this.hobbies);
    }
   
    printHobbies()
    {
        console.log(this.hobbies)
    }
}

module.exports = {Person};




