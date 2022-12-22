//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

const root = document.getElementById("root")

// pokemons.forEach((pokemon) => {
//     const li = document.createElement("li")
//     li.textContent = pokemon.name
//     li.className = "pokemon"
//     root.append(li)
// })

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

const table = document.createElement("table")
root.append(table)
const header = document.createElement("tr")
for (const property in pokemons[0]) {
    const th = document.createElement('th')
    th.textContent = property
    th.addEventListener("click", (e) => {
        e.preventDefault()
        sortPokemons(property)
        table.innerHTML=""
        table.append(header)
        renderPokemons()
    })
    header.append(th)
}
table.append(header)

function renderPokemons(){
    pokemons.forEach((pokemon) => {
        const tr = document.createElement("tr")
        for (const property in pokemon) {
            const td = document.createElement('td')
            td.textContent = pokemon[property]
            tr.append(td)
        }
        table.append(tr)
    })
}


//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   }
  
//   const d = randomDate(new Date(2021, 0, 1), new Date());
//   console.log(d.toISOString());