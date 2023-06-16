function sumLista(lista)
{
    let cont = 0
    for(let i = 0; i < lista.length; i++)
    {
        cont += lista[i];
    };
    return cont;
};

listita = [4325, 1241, 3253, 464376, 13, 35435, 354];
console.log(sumLista(listita));