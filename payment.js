function buyProduct(id, name, image, description, price) {
    const product = { id, name, image, description, price };
    localStorage.setItem('selectedProduct', JSON.stringify(product)); // guarda solo un procudto
    window.location.href = 'payment.html'; // Redirige a la página de pago
  }
  
 