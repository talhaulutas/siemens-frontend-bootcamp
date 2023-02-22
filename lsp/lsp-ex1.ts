interface ICamera{
    photo();
    
}
class Phone {
    call()
    {
        console.log("Arama yapıldı");
    }
    
}
class IPhone extends Phone implements ICamera{
      photo(){
        console.log("Fotoğraf çekebilir.")
      }
}

class Nokia extends Phone  {
    photo(){
        throw new Error("Fotoğraf özelliği yoktur.");
      }
}

  