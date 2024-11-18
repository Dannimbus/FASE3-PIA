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

function addToCart(id, name, price) {
    if (!cart.some(product => product.id === id)) {
        const product = { id, name, price };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} ha sido añadido al carrito.`);
    } else {
        alert(`${name} ya está en el carrito.`);
    }
}
