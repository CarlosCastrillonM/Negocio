// Función para cargar el footer
function cargarFooter() {
    fetch('../componentes/footer.html')
        .then(response => response.text())  // Obtener el contenido del archivo como texto
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;  // Insertar el contenido en el contenedor
        })
        .catch(error => console.error('Error al cargar el footer:', error));
}

// Llamar a la función para cargar el footer al cargar la página
window.onload = cargarFooter;