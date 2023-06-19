function funcionArray(array1, array2)
{
    for(let i = 0; i < array2.length; i++)
    {
        array1.push(array2[i]);
    }
    for(let i = 0; i < array1.length; i++)
    {
        array1[i] = array1[i] * 2;
    }
    return array1;
}

let array1 = [112, 13, 4, 235, 3, 54, 53];
let array2 = [2, 23, 3];

console.log(funcionArray(array1, array2));