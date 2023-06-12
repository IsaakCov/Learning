function esDivisibleEntre7y8(numero)
{
    if(numero % 7 === 0 && numero % 8 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(esDivisibleEntre7y8(0))