// Función para cargar el menu
function cargarMenu() {
    fetch('../componentes/menu.html')
        .then(response => response.text())  // Obtener el contenido del archivo como texto
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;  // Insertar el contenido en el contenedor
        })
        .catch(error => console.error('Error al cargar el menu:', error));
}

// Llamar a la función para cargar el menu al cargar la página
window.onload = cargarMenu;