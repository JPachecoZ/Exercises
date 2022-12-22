class Person {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return `Mi nombre es ${this._nombre}`
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
        console.log(`${this.nombre}`)
    }
}

let persona = new Person("Javier", "Pacheco")

console.log(persona.nombre)

persona.nombre = "Rodrigo"