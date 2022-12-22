class Person {
    constructor(nombre, apellido){
      this.nombre = nombre;
      this.apellido = apellido;
    }
    hablar = function(){
        return this.nombre + " " + this.apellido
    }

    get nombre(){
        return `Mi nombre es ${this._nombre}`
    }

    set nombre(name){
        alert("Me estan cambiando de nombre")
        return this._nombre = name
    }
}

class Developer extends Person {
    constructor(nombre, apellido, developerType){
        super(nombre, apellido)
        this.developerType = developerType
    }
}

let cristian = new Developer("Cristian", "Vilchez", "Frontend Developer")

console.log(cristian.nombre)

cristian.nombre = "CR7"

console.log(cristian.nombre)