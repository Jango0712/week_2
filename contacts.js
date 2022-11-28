let mylib = require("./classReto1");

class Contacts {

    constructor(){
        this.person = []
    }
printPersons(){
    for(let i = 0; i < this.person.length; i++){

       this.person[i].printAll()

    }
}
}

module.exports = {Contacts};


