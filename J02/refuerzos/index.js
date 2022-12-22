const root = document.getElementById("root")
const table = document.createElement("table")
table.setAttribute('border', '1')
root.append(table)

let products = [
    { id: 1, name: "tv", description: "TV 55 Pulgadas", brand: "chanchum", type: "tech" },
    { id: 3, name: "cellphone", description: "Androy 6/128GB", brand: "chaiomi", type: "tech" },
    { id: 2, name: "tv", description: "TV 55 Pulgadas", brand: "elyi", type: "tech" },
    { id: 4, name: "tv", description: "TV 65 Pulgadas", brand: "panachonic", type: "tech" },
    { id: 5, name: "cellphone", description: "Aifon 6/256GB", brand: "apol", type: "tech" },
    { id: 6, name: "bed", description: "KingSize", brand: "paiso", type: "home" },
    { id: 10, name: "bed", description: "QueenSize", brand: "rochen", type: "home" },
    { id: 8, name: "washing machine", description: "12Lt", brand: "elyi", type: "home" },
    { id: 9, name: "washing machine", description: "10Lt", brand: "panachonic", type: "home" },
    { id: 7, name: "tv", description: "TV 75 Pulgadas", brand: "chanchum", type: "tech" },
]

const encabezados = document.createElement("thead")
for (const key in products[0]){
    const th = document.createElement("th")
    th.textContent = key
    th.style.cursor = "pointer"
    th.addEventListener("click", (e) =>{
        ordenarProductosPorAtributo(key)
        table.innerHTML = ""
        table.append(encabezados)
        construirCuerpo()
    })
    encabezados.append(th)
}
table.append(encabezados)
construirCuerpo()

function construirCuerpo(){
    for (const index in products){
        const tr = document.createElement("tr")
            for (const key in products[index]){
                const td = document.createElement("td")
                td.textContent = products[index][key]
                tr.append(td)
            }
        table.append(tr)
    }
}


function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

function ordenarProductosPorAtributo(atributo){
    if (typeof products[0][atributo] === "string"){
        return products.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof products[0][atributo] === "number"){
        return products.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
}