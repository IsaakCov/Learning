function multiplicarArreglo(array)
{
    let min = Math.min(...array);
    let max = Math.max(...array);
    return min * max;
}
let array = [112,13,4,235,3,54,53,2]
console.log(multiplicarArreglo(array));
