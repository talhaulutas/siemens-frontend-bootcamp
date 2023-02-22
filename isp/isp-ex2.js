var BookRepository = /** @class */ (function () {
    function BookRepository() {
    }
    BookRepository.prototype.getAll = function () {
        console.log("Kitaplar gösteriliyor.");
    };
    BookRepository.prototype.getById = function (id) {
        console.log("Kitap gösteriliyor.");
    };
    BookRepository.prototype.getByName = function (name) {
        console.log("Kitap gösteriliyor.");
    };
    BookRepository.prototype.addNewBook = function () {
        console.log("Kitap eklendi.");
    };
    BookRepository.prototype.updateBook = function (id) {
        console.log("Kitap güncellendi.");
    };
    BookRepository.prototype.deleteBook = function (id) {
        console.log("Kitap silindi.");
    };
    return BookRepository;
}());
