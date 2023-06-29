// Identificar el boton y asignarle la funcionalidad
const modifyButton = document.getElementById('jsstyle');
modifyButton.addEventListener('click', changeFontAndSize);

// Cambiar la fuente y tamaño del texto
function changeFontAndSize()
{
    // Identificar el texto a modificar
    const text = document.getElementById('text');
    
    
    // Cambiar la fuente a "Comic Sans"
    text.style.fontFamily = "Comic Sans MS";
    
    // Cambiar el tamaño al doble
    text.style.fontSize = 25 + "px";
}
