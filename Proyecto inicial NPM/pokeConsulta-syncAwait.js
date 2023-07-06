//const axios = require('axios');
const itemsContainer = document.getElementById("pokemon");
// https://reqres.in/api/users esta es la api que vamos a consultar con axio
const getPokes = async () => 
    {
        try 
        {
            const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
            for(let i = 0; i <= pokemon.data.results.length; i++)
                addPoke(pokemon.data.results[i], i + 1);
        }
        catch (error) 
        {
            console.log(error);
        }
    }



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
