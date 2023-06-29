function getFormValue() {
  // Obtener los valores de los campos de nombre del formulario
  var firstName = document.getElementsByName("fname")[0].value;
  var lastName = document.getElementsByName("lname")[0].value;

  // Mostrar los valores del primer y último nombre
  alert("First name: " + firstName + "\nLast name: " + lastName);
}