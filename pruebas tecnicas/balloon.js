// Desarrollo de Código: Manejo de array en JS

// Escribe una función en JavaScript que tome como entrada el siguiente arreglo y realice las siguientes operaciones:

// -Asegúrate de que no existan elementos repetidos en el arreglo de entrada.

// -Calcula y devuelve un nuevo arreglo que contenga la suma totalPrice de todos los elementos del arreglo de entrada.

// -Si existe al menos un número negativo en el arreglo, genera un segundo arreglo que contenga
//todos los números negativos encontrados.

// -No se permite el uso de librerías externas.

// Arreglo de entrada:

const products = [
  {
    name: "Product A",
    unitMeasure: "pcs",
    amount: 10,
    unitPrice: 5000,
    totalPrice: 50000,
  },
  {
    name: "Product B",
    unitMeasure: "kg",
    amount: 2.5,
    unitPrice: 3500,
    totalPrice: 8750,
  },
  {
    name: "Product C",
    unitMeasure: "m",
    amount: 15,
    unitPrice: 2000,
    totalPrice: 30000,
  },
  {
    name: "Product D",
    unitMeasure: "liters",
    amount: 5,
    unitPrice: -1250,
    totalPrice: -6250,
  },
  {
    name: "Product E",
    unitMeasure: "boxes",
    amount: 20,
    unitPrice: 750,
    totalPrice: 15000,
  },
  {
    name: "Product F",
    unitMeasure: "boxes",
    amount: 20,
    unitPrice: -750,
    totalPrice: undefined,
  },
];

// Recuerda que esta función debe realizar estas operaciones siguiendo las indicaciones mencionadas y sin utilizar librerías externas. Comentar el código.


function getTotalPrice(array) {
    let negNumArray = [];
    let totalPriceOfItems = [0];
    let cleanArray = array.filter((item, index)=>{
        return array.indexOf(item) === index;
    });
    // Recorre el array tomando lugar en cada índice
    for (let i = 0; i < cleanArray.length; i++) {
      actualItem = cleanArray[i];
  
      if (typeof actualItem.totalPrice === "number") {
        // Suma el precio total de cada producto
        totalPriceOfItems[0] += actualItem.totalPrice; 
      }
      if (actualItem.totalPrice < 0 || actualItem.unitPrice < 0 || actualItem.amount < 0) {
        // Agrega elementos con números negativos al array negNumArray
        negNumArray.push(actualItem); 
      }
    }
    console.log("Total Price:", totalPriceOfItems);
    // Devuelve el total de precios
    return totalPriceOfItems; 
  }
  
  console.log(getTotalPrice(products));
  