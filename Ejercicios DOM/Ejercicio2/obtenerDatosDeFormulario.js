const button = document.getElementById('button');
button.addEventListener("click", getFormValue);

function getFormValue()
{
    const fname = document.getElementsByName('fname')[0].value;
    const lname = document.getElementsByName('lname')[0].value;
    alert(`Hola ${fname} ${lname}`)
}