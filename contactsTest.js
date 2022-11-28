let mylib = require("./classReto1");
let clase = require("./contacts")


let jan = new mylib.Person("jan", "masculino", 1.75, "azul", 100, 2000, ["jugar", "nadar", "cantar"]);
let jose = new mylib.Person("jose", "masculino", 1.75, "blanco", 100, 2000, ["jugar", "nadar", "cantar"]);

let contacts = new clase.Contacts() ;
contacts.person.push(jan);
contacts.person.push(jose);

contacts.printPersons()