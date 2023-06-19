function booleanoArray(array1, array2)
{
    for(let i = 0; i < array2.length; i++)
    {
        array1.push(array2[i]);
    }
    if(array1.length >= 10)
    {
        console.log(array1)
        return true;
    }
    else
    {
        return false;
    }
}

let array1 = [112, 13, 4, 235, 3, 54, 53]
let array2 = [2, 23, 3]

console.log(booleanoArray(array1, array2))