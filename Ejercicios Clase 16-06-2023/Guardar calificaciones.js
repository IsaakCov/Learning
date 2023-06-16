const Notas = {
    Nombre: "Alumno",
    Inglés: 7,
    Programacion: 6,
    HTML: 5,
    Promedio: function() {
      return (this.Inglés + this.Programacion + this.HTML) / 3;
    }
  };
  
  console.log("El promedio final de", Notas.Nombre, "es", Notas.Promedio());