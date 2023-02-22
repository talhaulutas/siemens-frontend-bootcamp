interface IDisplayCard{
    displayCardExist();
    
}
class Laptop {
    processor()
    {
        console.log("İşlemciler laptoplarda ortak olarak bulunur");
    }
    
}
class Monster extends Laptop implements IDisplayCard{
      displayCardExist(){
        console.log("Ekran kartı vardır.")
      }
}

class Lenovo extends Laptop  {
    displayCardExist(){
        throw new Error("Ekran kartı yoktur.");
      }
}

  