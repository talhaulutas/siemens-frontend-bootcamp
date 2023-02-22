interface IReadPersonRepository
{
    getAll();
    getById(id:number);
    getByName(name:string);
}

interface IWritePersonRepository
{
    addNewPerson();
    updatePerson(id:number);
}

class ProductRepository implements IReadPersonRepository,IWritePersonRepository
{
    addNewPerson() {
        console.log("Yeni çalışan eklendi");
        
    }
    updatePerson(id: number) {
        console.log("Çalışan güncellendi");
    }
    getAll() {
        console.log("Çalışanlar gösteriliyor");
    }
    getById(id: number) {
        console.log("Çalışan gösteriliyor");
    }
    getByName(name: string) {
        console.log("Çalışan gösteriliyor");
    }

}