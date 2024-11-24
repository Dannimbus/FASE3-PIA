let cart = [];

const productos = [
    { id: 1, title: "Arreglo de Rosas con Lirios", description: "Hermoso arreglo", price: 1200, image: "ramo1.jpg" },
    { id: 2, title: "Ramo de Tulipanes", description: "Tulipanes frescos", price: 900, image: "ramo2.jpg" },
    { id: 3, title: "Ramo con 10 Rosas Rojas", description: "10 rosas clásicas", price: 800, image: "ramo3.jpg" },
    { id: 4, title: "Arreglo con Flores Silvestres", description: "Flores variadas", price: 1000, image: "ramo4.jpg" }
];

function mostrarDetalles(id) {
    const producto = productos.find(p => p.id === id);
    document.getElementById("productTitle").innerText = producto.title;
    document.getElementById("productSubtitle").innerText = producto.description;
    document.getElementById("productDescription").innerText = producto.description;
    document.getElementById("productPrice").innerText = "$" + producto.price;
    document.getElementById("productImage").src = producto.image;
    document.getElementById("detallesProducto").style.display = "block";
    document.getElementById("productList").style.display = "none";
}

function addToCart(name, price, image) {
    let product = cart.find(item => item.name === name);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    updateCart();
    openCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <p>${item.name}</p>
                <p>Cantidad: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <span>$${item.price * item.quantity}</span>
                <button onclick="removeFromCart('${item.name}')">Eliminar</button>
            </div>
        </div>
    `).join('');

    cartTotal.innerText = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function openCart() {
    document.getElementById("cartSidebar").style.width = "300px";
}

function closeCart() {
    document.getElementById("cartSidebar").style.width = "0";
}

function volver() {
    document.getElementById("detallesProducto").style.display = "none";
    document.getElementById("productList").style.display = "block";
}

function addToCartFromDetails() {
    const name = document.getElementById("productTitle").innerText;
    const price = parseFloat(document.getElementById("productPrice").innerText.replace('$', ''));
    const image = document.getElementById("productImage").src;
    addToCart(name, price, image);
}