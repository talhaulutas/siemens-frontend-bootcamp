var AnimalService = /** @class */ (function () {
    function AnimalService(animalRepository) {
        this._animalRepository = animalRepository;
    }
    AnimalService.prototype.Add = function (data) {
        this._animalRepository.addToLog(data);
    };
    return AnimalService;
}());
var AnimalRepository = /** @class */ (function () {
    function AnimalRepository() {
    }
    AnimalRepository.prototype.addToLog = function (data) {
        console.log("".concat(data, " Sql "));
    };
    return AnimalRepository;
}());
var AnimalRepositoryWithMongoDB = /** @class */ (function () {
    function AnimalRepositoryWithMongoDB() {
    }
    AnimalRepositoryWithMongoDB.prototype.addToLog = function (data) {
        console.log("".concat(data, " MongoDB "));
    };
    return AnimalRepositoryWithMongoDB;
}());
var animalService = new AnimalService(new AnimalRepositoryWithMongoDB());
animalService.Add("animal");
