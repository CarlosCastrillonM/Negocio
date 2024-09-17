// Función para cargar el footer
function loadFooter() {
    fetch('../componentes/footer.html')
        .then(response => response.text())  // Obtener el contenido del archivo como texto
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;  // Insertar el contenido en el contenedor
        })
        .catch(error => console.error('Error loading footer:', error));
}