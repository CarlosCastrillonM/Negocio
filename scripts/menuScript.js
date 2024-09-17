// Función para cargar el menu
function loadMenu() {
        fetch('../componentes/menu.html')
        .then(response => response.text())  // Obtener el contenido del archivo como texto
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;  // Insertar el contenido en el contenedor
        })
        .catch(error => console.error('Error loading menu:', error));
}