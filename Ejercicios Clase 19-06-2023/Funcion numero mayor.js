function numeroMayor(num1, num2, num3)
{
    if (num1 === num2 && num1 === num3)
    {
        return console.log("Los numeros son iguales.")
    }
    else
    {
        let list = [num1, num2, num3];
        return Math.max(list);
    }
}
