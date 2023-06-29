// Obtener el elemento de entrada
const taskInput = document.getElementById('input');

// Obtener la lista de tareas
const taskList = document.getElementById('lista-de-tareas');

// Agregar un evento al botón para realizar una acción con el valor del input
const button1 = document.getElementById('añadir');
button1.addEventListener('click', appendTask);
const button2 = document.getElementById('borrar')
button2.addEventListener('click', removeTasks);


// Crear función para añadir el contenido al presionar el botón
function appendTask() 
{
  const newTaskText = taskInput.value;
  if(taskInput.value != '')
  {
    // Crear un nuevo elemento de lista (li)
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = newTaskText;
    
    // Agregar el nuevo elemento de lista a la lista de tareas
    taskList.appendChild(newTaskItem);
  }
  else
  {
    alert('Error, no ingresaste ninguna tarea.');
    return;
  }
  // Limpiar el contenido del input después de añadir la tarea a la lista
  taskInput.value = '';
  
};

// Crear función para añadir el contenido al presionar el botón
function removeTasks() {
  // Eliminar todos los elementos de la lista de tareas
  while (taskList.firstChild) 
  {
    taskList.removeChild(taskList.firstChild);
  }
}
