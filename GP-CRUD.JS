// Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Obtener los productos guardados en localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// Referencias a elementos del DOM
const productImage = document.getElementById("product-image");
const productQuantity = document.getElementById("product-quantity");
const productTotal = document.getElementById("product-total");
const productSummary = document.getElementById("product-summary");
const deleteButton = document.getElementById("delete-product");
const configureButton = document.getElementById("configure-product");
const imageUploadInput = document.getElementById("product-image-upload");

// Verifica si el producto existe
if (productId !== null && products[productId]) {
    const product = products[productId];

    // Muestra los datos del producto
    productImage.src = product.image || "https://via.placeholder.com/150";
    productQuantity.textContent = product.quantity || "1";
    productTotal.textContent = `$${product.price * (product.quantity || 1)}`;
    productSummary.textContent = product.description;

    // Evento para eliminar el producto
    deleteButton.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            // Elimina el producto del array
            products.splice(productId, 1);

            // Actualiza localStorage
            localStorage.setItem("products", JSON.stringify(products));

            // Redirige al inicio
            alert("Producto eliminado.");
            window.location.href = "index.html";
        }
    });

    // Evento para configurar el producto
    configureButton.addEventListener("click", () => {
        const newName = prompt("Editar nombre del producto:", product.name);
        const newDescription = prompt("Editar descripción del producto:", product.description);
        const newPrice = prompt("Editar precio del producto:", product.price);
        const newQuantity = prompt("Editar cantidad del producto:", product.quantity || "1");

        // Verifica que todos los campos tengan valores
        if (newName && newDescription && newPrice && newQuantity) {
            // Actualiza el producto en el array
            products[productId] = {
                ...product, // Mantén los campos existentes
                name: newName,
                description: newDescription,
                price: parseFloat(newPrice),
                quantity: parseInt(newQuantity, 10),
            };

            // Actualiza localStorage
            localStorage.setItem("products", JSON.stringify(products));

            // Actualiza la vista
            alert("Producto actualizado.");
            location.reload(); // Recarga la página para reflejar los cambios
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

    // Evento para manejar la carga de una nueva imagen
    imageUploadInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            // Verifica que sea un archivo de imagen
            if (!file.type.startsWith("image/")) {
                alert("Por favor selecciona un archivo de imagen válido.");
                return;
            }

            // Usa FileReader para cargar la imagen seleccionada
            const reader = new FileReader();
            reader.onload = () => {
                productImage.src = reader.result; // Actualiza la vista previa de la imagen
                saveNewImage(reader.result); // Actualiza los datos del producto
            };
            reader.readAsDataURL(file);
        }
    });

    // Función para guardar la nueva imagen
    function saveNewImage(newImage) {
        // Actualiza la imagen en el producto
        products[productId].image = newImage;

        // Guarda los cambios en localStorage
        localStorage.setItem("products", JSON.stringify(products));

        alert("Imagen del producto actualizada.");
    }
} else {
    alert("Producto no encontrado.");
    window.location.href = "#"; // Redirige si no se encuentra el producto
}
