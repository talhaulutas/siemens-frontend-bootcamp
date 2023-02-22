interface IReadBookRepository
{
    getAll();
    getById(id:number);
    getByName(name:string);
}

interface IWriteBookRepository
{
    addNewBook();
    updateBook(id:number);
    deleteBook(id:number);
}

class BookRepository implements IReadBookRepository,IWriteBookRepository
{
    getAll() {
        console.log("Kitaplar gösteriliyor.");
    }
    getById(id: number) {
        console.log("Kitap gösteriliyor.");
    }
    getByName(name: string) {
        console.log("Kitap gösteriliyor.");
    }
    addNewBook() {
        console.log("Kitap eklendi.");
    }
    updateBook(id: number) {
        console.log("Kitap güncellendi.");
    }
    deleteBook(id: number) {
        console.log("Kitap silindi.");
    }

}