namespace isA
{


    abstract class Phone
    {
    
         Call():void
         {}
    
    
         abstract Camera():void

        
    
    }
    
    class IPhone extends Phone
    {
        Camera(): void {
            console.log("kamerası var type1")
        }

    
    }
    
    class Nokia extends Phone
    {
        Camera(): void {
            console.log("kamerası yok")
        }
    
    }
    
    class Samsung extends Phone
    {
        Camera(): void {
            console.log("kamerası var type2")
        }   
    }
    
}