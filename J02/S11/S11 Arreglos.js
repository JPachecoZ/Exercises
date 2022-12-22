let products = [
    { 
        id: 1, 
        name: "tv", 
        description: "TV 55 Pulgadas", 
        brand: "chanchum", 
        type: "tech" 
    },
    { 
        id: 3, 
        name: "cellphone", 
        description: "Androy 6/128GB", 
        brand: "chaiomi",
        type: "tech" 
    },
    { id: 2, name: "tv", description: "TV 55 Pulgadas", brand: "elyi", type: "tech" },
    { id: 4, name: "tv", description: "TV 65 Pulgadas", brand: "panachonic", type: "tech" },
    { id: 5, name: "cellphone", description: "Aifon 6/256GB", brand: "apol", type: "tech" },
    { id: 6, name: "bed", description: "KingSize", brand: "paiso", type: "home" },
    { id: 10, name: "bed", description: "QueenSize", brand: "rochen", type: "home" },
    { id: 8, name: "washing machine", description: "12Lt", brand: "elyi", type: "home" },
    { id: 9, name: "washing machine", description: "10Lt", brand: "panachonic", type: "home" },
    { id: 7, name: "tv", description: "TV 75 Pulgadas", brand: "chanchum", type: "tech" },
]

let user = {
    display_name: "Jack Arteaga",
    profile_image: "http.asdf......",
    posts: [
        {
            id: 1, 
            title: "Hola a todos", 
            content: "El dia de hoy me desperte feliz",
            likes: 5, 
            comments: [
                { 
                    id: 1,
                    owner: "Astrid",
                    body: "Que bueno que te hayas despertado feliz"
                }
            ]
        }
    ]
}
let stringJSON = JSON.stringify(products)
console.log(JSON.parse(stringJSON))