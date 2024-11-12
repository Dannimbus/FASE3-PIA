/* Obtener parámetros para la funcion */
function getQueryParams(){
    const params={};
    const urlParams = new URLSearchParams(window.location.search);
    params.name = urlParams.get('name');
    params.price = urlParams.get('price')
    params.image = urlParams.get('image')
    return params;
}

//llenar pantalla con datos de produtos
const productInfo = getQueryParams();
document.getElementById('product-info').innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${productInfo.image}" class="img-fluid rounded-start" alt="${productInfo.name}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${productInfo.name}</h5>
                <p class="card-text">Precio: $${productInfo.price}</p>
                <p class="card-text">Descripción breve del producto aquí.</p>
            </div>
        </div>
    </div>
`;

document.getElementById('add-to-cart').addEventListener('click', () => {
    alert(`${productInfo.name} ha sido agregado al carrito.`);
});