function sumArreglo(array)
{
    let len = array.length
    let sum = 0;
    for(let i = 0; i <= len; i++)
    {
        sum += array[i];
    }
    return console.log("El largo del arreglo es: ", len, " y la suma de los elementos es: ", sum);
}
let listita = [2,4,5,67,8]
console.log(sumArreglo(listita))