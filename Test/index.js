

for(let number = 1; number<= 100; number++)
{
    if(number%3==0 && number%5==0)
    {
        console.log('Fizzbuzz');
    }
    else if(number%3==0)
    {
        console.log('Fizz');
    }
    else if(number%5==0)
    {
        console.log('Buzz');
    }
    else
    {
        console.log(number);
    }
}
// Crear lectura del arreglo con las condicionales del fizzbuzz
// array.forEach(number => {
//     if(number%3 && number%5)
//     {
//         console.log('Fizzbuzz');
//     }
//     else if(number%3)
//     {
//         console.log('Fizz');
//     }
//     else if(number%5)
//     {
//         console.log('Buzz');
//     }
//     else
//     {
//         console.log(number);
//     }
// });
