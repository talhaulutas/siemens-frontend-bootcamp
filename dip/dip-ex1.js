var CarService = /** @class */ (function () {
    function CarService(carRepository) {
        this._carRepository = carRepository;
    }
    CarService.prototype.Add = function (data) {
        this._carRepository.addToLog(data);
    };
    return CarService;
}());
var CarRepository = /** @class */ (function () {
    function CarRepository() {
    }
    CarRepository.prototype.addToLog = function (data) {
        console.log("".concat(data, " Sql "));
    };
    return CarRepository;
}());
var CarRepositoryWithOracle = /** @class */ (function () {
    function CarRepositoryWithOracle() {
    }
    CarRepositoryWithOracle.prototype.addToLog = function (data) {
        console.log("".concat(data, " Oracle "));
    };
    return CarRepositoryWithOracle;
}());
var carService = new CarService(new CarRepositoryWithOracle());
carService.Add("log 1");
