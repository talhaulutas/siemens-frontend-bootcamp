class AnimalService {

    _animalRepository: IAnimalRepository
    constructor(animalRepository: IAnimalRepository) {
        this._animalRepository = animalRepository;
    }

    Add(data: string) {
        this._animalRepository.addToLog(data);
    }
}

interface IAnimalRepository {
    addToLog(data: string)
}

class AnimalRepository implements IAnimalRepository {

    addToLog(data: string) {
        console.log(`${data} Sql `);
    }

}

class AnimalRepositoryWithMongoDB implements IAnimalRepository
{
    addToLog(data: string) {
     console.log(`${data} MongoDB `);
    }
    
}


let animalService= new AnimalService(new AnimalRepositoryWithMongoDB());
animalService.Add("animal");