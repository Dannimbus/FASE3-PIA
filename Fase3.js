// Control de la barra de búsqueda
function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('d-none');
    if (!searchBar.classList.contains('d-none')) {
        document.getElementById('searchInput').focus();
    }
}

function hideSearchBar() {
    document.getElementById('searchBar').classList.add('d-none');
}

// Buscar productos
function searchProducts(query) {
    const products = document.querySelectorAll('.card');
    products.forEach(product => {
        const title = product.querySelector('.card-title').innerText.toLowerCase();
        product.parentElement.classList.toggle('d-none', !title.includes(query));
    });
}

// Carrito
const cart = [];

//Funcion para añadir al carrito
function addToCart(id, name, price) {
    //agregar el producto al carrito
    const product = {id, name, price};
    cart.push(product)

    //actualiza la vista de la barra lateral
    updateCartSidebar();

    alert(`${name} ha sido añadido al carrito.`);
}

//funcion para actualizar el contenido de la barra

function updateCartSidebar() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; //limpia el contenido actual 

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p> Tu carrito está vacío.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');
        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p class="mb-0">${item.price}</p>
            </div>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

//funcion para eliminar un producto del carrito

function removeFromCart(index) {
    cart.splice(index, 1); //elimina el producto del array
    updateCartSidebar();
}

//funcion para proceder al pago

function confirmacionPedido() {
if (cart.length === 0) {
    alert('Tu carrito está vacío.');
    return;
}
localStorage.setItem('cart', JSON.stringify(cart)); //guarda el carrito en localstorage
window.location.href = 'payment.html'; //redirige a la pantalla de pago
}