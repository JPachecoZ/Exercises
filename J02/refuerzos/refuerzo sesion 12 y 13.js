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

    let nombre = prompt("Ingrese el nombre del producto: ")
    let descripcion = prompt("Ingrese la descripción del producto: ")
    let marca = prompt("Ingrese la marca: ")
    let type = prompt("Ingrese el tipo de producto ")

    addProduct(nombre, descripcion, marca, type)

    function addProduct(name, description, brand, type){
        let newProduct = {name: name, description: description, brand: brand, type: type}
        newProduct.id = products.length + 1
        products.push(newProduct)
        return products
    }
    
//1. Crear una función que permita filtrar el arreglo de productos por cada atributo.
 
    function filterProductsBy(atribute, value){
        const validAtributes = Object.keys(products[0])
        if (validAtributes.includes(atribute)){
            return products.filter(product => product[atribute] === value)
        } else {
            return "El atributo ingresado no existe"
        }
    }
 
    //console.log(filterProductsBy("price", 1))
 
//2. Crear una función que permita ordenar el arreglo de productos por cada atributo (en orden alfabetico).
 
    function ordenarProductosPorAtributo(atributo){
        if (typeof products[0][atributo] === "string"){
            return products.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
        } else if (typeof products[0][atributo] === "number"){
            return products.sort((a,b) => {return a[atributo] - b[atributo]})
        } else {
            return "Por favor utiliza un atributo válido"
        }
    }
   
    //console.log(ordenarProductosPorAtributo("id"))
 
//3. Crear una función que permita imprimir en pantalla los datos del objeto.
    //El name, brand y type deben imprimirse en formato Capitalizado.
    
    function capitalizarFrase(string){
        let palabras = string.split(" ")
        let palabrasCapitalizadas = palabras.map(palabra => {return capitalizarPalabra(palabra)})
        return palabrasCapitalizadas.join(" ")
    }

    function capitalizarPalabra(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    }
    
    function imprimirDatosDeObjeto(objeto){
        let arreglo = ["name", "type", "brand"]
        for(const prop in objeto){
            if (arreglo.includes(prop)){
                console.log(`${prop} : ${capitalizarFrase(objeto[prop])}`)
            } else {
                console.log(`${prop} : ${objeto[prop]}`)
            }
        }
    }
     
//4. Añadir el atributo price a cada objeto. Para añadirlo utilizar un numero aleatorio entre 500 y 1500 para cada uno.
    function generarAleatorioEntre(max, min){
        return (Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)).toFixed(2)
    }

    function addPrice(){
        for(const index in products){
            products[index].price = generarAleatorioEntre(500, 1500)
        }
        return products
    }
    
//5. Crear una función que me permita filtrar productos por precio, permitiendome filtrar aquellos que son menores 
//   a un valor que yo ingrese.

    function filtrarProductosPorPrecio(maxPrice){
        addPrice()
        return products.filter(product => product.price <= maxPrice)
    }

//CRUD -> CREATE READ UPDATE DELETE

//CREATE comment

//READ comment

//UPDATE comment

//DELETE comment

//6. Crear una función que me permita crear un nuevo objeto, ingresando los datos con formularios. Cuando se cree un nuevo
//   objeto, el id no debe repetirse.

 
//7. Crear una función que me permita modificar los atributos de un objeto que haya seleccionado.
 
//8. Crear una función que me permita borrar uno o varios productos de mi arreglo según los valores de sus atributos.
