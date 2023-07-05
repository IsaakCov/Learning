// Funcion para consultar los datos
function fetchDatos()
{
    fetch('https://reqres.in/api/users')
    .then(Response=>Response.json())
    .then(json => 
    {
        for (let i = 0; i < json.data.length; i++)
        {
            addUser(json.data[i]);
        }
    }).catch(err => console.log("Solicitud fallida", err));
}



const itemsContainer = document.getElementById("users");

// Inyectar datosen el HTML (DOM)
function addUser(user)
{
    const inyectarHTML = '<div class="col-lg-2">'+
    '<div class="card" >' + 
    '<img src="' + user.avatar + '"class="card-img-top" alt="Avatar">' +
    '<div class="card-body" >' +
    '<h3 class="card-title" >' + user.first_name + user.last_name + '</h3>' +
    '<h4 class="card-text" >' + user.email + '</h4>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<br/>';
    itemsContainer.innerHTML += inyectarHTML;
}

