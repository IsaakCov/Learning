function pokeFetch()
{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(Response=>Response.json())
    .then(json => 
        {
            for(let i = 0; i < json.results.length; i++)
            {   
                addPoke(json.results[i], i+1);
            }
        }).catch(err => console.log("Solicitud fallida", err));
}
const itemsContainer = document.getElementById("pokemon");


// Inyectar en el PokeHTML (DOM)
function addPoke(pokemon, index)
{
    const inyectarHTML = '<div class="col-lg-2">'+
    '<div class="card" >' + 
    '<img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + index + '.png" class="card-img-top" alt="Avatar">' +
    '<div class="card-body" >' +
    '<h3 class="card-title" >' + index + '.- ' + pokemon.name + '</h3>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<br/>';
    itemsContainer.innerHTML += inyectarHTML;
}