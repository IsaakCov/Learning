// Crear una clase "Rectángulo" con métodos para calcular el área y el perímetro de un rectángulo.

class rectangulo
{
    constructor(heigth, width)
    {
        this.heigth = heigth,
        this.width = width;
    }
    calcArea()
    {
        return this.heigth * this.width;
    }
    calcPerimeter()
    {
        return 2*(this.heigth + this.width);
    }
}

const rectangulito = new rectangulo(12, 15);
console.log(rectangulito.calcArea());
console.log(rectangulito.calcPerimeter());
