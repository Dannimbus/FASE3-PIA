// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Validación básica
    if (name === '' || password === '' || email === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Validación del email (opcional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }
  
  });