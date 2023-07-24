// Crear el objeto lista de libros 
class bookList
{
    constructor(numberOfNotReadBooks, numberOfReadBooks, lastBook, actualBook, nextBook, booksArray)
    {
        this.numberOfNotReadBooks = numberOfNotReadBooks;
        this.numberOfReadBooks = numberOfReadBooks;
        this.nextBook = nextBook;
        this.actualBook= actualBook;
        this.lastBook = lastBook;
        this.booksArray = booksArray;
    }
    insertBook(book)
    {
        this.booksArray.push(book);
        this.numberOfNotReadBooks += 1;
        return alert("El libro fue adicionado exitosamente.");
    }
    finishCurrentBook()
    {
        this.lastBook = this.actualBook
        this.actualBook = this.nextBook;
        this.nextBook = this.booksArray[this.booksArray.indexOf(this.nextBook) + 1];
        this.numberOfNotReadBooks -= 1;
        this.numberOfReadBooks += 1;
        const finishDate = Date(Date.now());
        return alert(`Felicidades por terminar el libro! Datos actualizados. ${this.lastBook} fue terminado en ${finishDate}`);
    }
}

// Crear objeto libro
const nuevaLista = new bookList(15, 20, "Tu mamita cronica", "Tu perrita", "Murio", ["Tu mamita cronica", "Tu perrita", "Murio"]);

// Identificar elementos del formulario
const bookInput = document.getElementById('addBook');

// Identificar donde lo voy a insertar
const list = document.getElementById('booksCount');

// Decirle cuando tiene que ingresar un nuevo libro
const buttonAdd = document.getElementById('Add');

buttonAdd.addEventListener("click", function () {
    addToList(bookInput.value);
});

// Decirle cuando tiene que dar por terminado un libro
const buttonFinish = document.getElementById('Finish');

buttonFinish.addEventListener("click", function () {
    nuevaLista.finishCurrentBook();
});

// Crear la funcion addToList
function addToList(book) {
    nuevaLista.insertBook(book);
    updateList();
}

// Función para actualizar la lista en el HTML
function updateList() {
    nuevaLista.booksArray.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        list.appendChild(li);
    });
}






