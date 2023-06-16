datosDePrecios = 
{
    Precio: 2000,
    Descuento: 20,
    Neto: function(Precio, Descuento)
    {
        console.log("El precio final es: ", Precio - (Precio*(Descuento/100)))
    }
}
console.log(datosDePrecios.Neto(datosDePrecios.Precio, datosDePrecios.Descuento))