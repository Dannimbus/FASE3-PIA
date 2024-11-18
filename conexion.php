<?php
$servername = "localhost";  // El servidor de la base de datos
$username = "root";         // El usuario de la base de datos
$password = "Lesly2311FIME_";             // La contraseña (en XAMPP es por defecto vacía)
$dbname = "fase3";  // El nombre de la base de datos que deseas conectar

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);



// Verificar conexión
if ($conn->connect_error) {
  die("La conexión falló: " . $conn->connect_error);
}
echo "Conexión exitosa!";
?>
