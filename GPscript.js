// Referencias a elementos
const productList = document.getElementById("product-list");
const addProductButton = document.getElementById("add-product");

// Datos iniciales de productos
let products = [
    {
        name: "Arreglo de Rosas con Lirios",
        description: "Una combinación de flores con 6 rosas rojas, lily rosa, clavel vino y alstroemerias.",
        price: 1200,
        image: "ramo1.jpg"
    },
    {
        name: "Ramo con 10 Rosas Rojas",
        description: "Arreglo floral elaborado cuidadosamente por expertos floristas.",
        price: 850,
        image: "ramo3.jpg"
    },
    {
        name: "Ramo 'Un Beso del Cielo'",
        description: "Ramo con rosas azules y blancas especiales para gustos diferentes.",
        price: 1350,
        image: "ramo5.jpg"
    },
    {
        name: "Ramo 'Hermoso Atardecer'",
        description: "Una mezcla de girasoles y rosas, creando una combinación única.",
        price: 1100,
        image: "ramo4.jpg"
    }
];

// Función Renderizar Productos
function renderProducts() {
    const productGrid = document.querySelector(".row.row-cols-1");
    productGrid.innerHTML = ""; // Limpia la lista
    products.forEach((product, index) => {
        const productCard = `
            <div class="col">
                <div class="card h-100">
                    <img src="${product.image}" alt="Producto" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>$${product.price}</strong></p>
                        <button class="btn-edit" onclick="editProduct(${index})">Editar</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Función Agregar Producto
function addProduct() {
    const name = prompt("Nombre del producto:");
    const description = prompt("Descripción del producto:");
    const price = prompt("Precio del producto:");
    const image = prompt("URL de la imagen del producto:");

    if (name && description && price && image) {
        products.push({ name, description, price, image });
        renderProducts();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función Editar
function editProduct(index) {
    const product = products[index];
    const name = prompt("Editar nombre del producto:", product.name);
    const description = prompt("Editar descripción del producto:", product.description);
    const price = prompt("Editar precio del producto:", product.price);
    const image = prompt("Editar URL de la imagen del producto:", product.image);

    if (name && description && price && image) {
        products[index] = { name, description, price, image };
        renderProducts();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Inicializar eventos
addProductButton.addEventListener("click", addProduct);
