var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
    }
    ProductRepository.prototype.addNewPerson = function () {
        console.log("Yeni çalışan eklendi");
    };
    ProductRepository.prototype.updatePerson = function (id) {
        console.log("Çalışan güncellendi");
    };
    ProductRepository.prototype.getAll = function () {
        console.log("Çalışanlar gösteriliyor");
    };
    ProductRepository.prototype.getById = function (id) {
        console.log("Çalışan gösteriliyor");
    };
    ProductRepository.prototype.getByName = function (name) {
        console.log("Çalışan gösteriliyor");
    };
    return ProductRepository;
}());
