// script.js

// Simular una lista dinámica de pedidos (puedes conectar un backend más tarde)
const pedidosRealizados = [
    { id: 1, nombre: 'Juan Pérez', direccion: 'Calle 1' },
    { id: 2, nombre: 'María López', direccion: 'Calle 2' },
    { id: 3, nombre: 'Carlos Sánchez', direccion: 'Calle 3' },
  ];
  
  const pedidosPendientes = [
    { id: 1, nombre: 'Ana Ruiz', direccion: 'Calle 4' },
    { id: 2, nombre: 'Luis Torres', direccion: 'Calle 5' },
    { id: 3, nombre: 'Sofia Gómez', direccion: 'Calle 6' },
  ];
  
  // Cargar los pedidos en las listas
  function cargarPedidos() {
    const realizadosList = document.getElementById('realizados');
    const pendientesList = document.getElementById('pendientes');
  
    realizadosList.innerHTML = pedidosRealizados
      .map((pedido) => <li>${pedido.id} - ${pedido.nombre} - Dirección: ${pedido.direccion}</li>)
      .join('');
  
    pendientesList.innerHTML = pedidosPendientes
      .map((pedido) => <li>${pedido.id} - ${pedido.nombre} - Dirección: ${pedido.direccion}</li>)
      .join('');
  }
  
  // Ejecutar al cargar la página
  document.addEventListener('DOMContentLoaded', cargarPedidos);