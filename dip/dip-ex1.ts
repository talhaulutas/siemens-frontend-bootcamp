class CarService {

    _carRepository: ICarRepository
    constructor(carRepository: ICarRepository) {
        this._carRepository = carRepository;
    }

    Add(data: string) {
        this._carRepository.addToLog(data);
    }
}

interface ICarRepository {
    addToLog(data: string)
}

class CarRepository implements ICarRepository {

    addToLog(data: string) {
        console.log(`${data} Sql `);
    }

}

class CarRepositoryWithOracle implements ICarRepository
{
    addToLog(data: string) {
     console.log(`${data} Oracle `);
    }
    
}


let carService= new CarService(new CarRepositoryWithOracle());
carService.Add("log 1");