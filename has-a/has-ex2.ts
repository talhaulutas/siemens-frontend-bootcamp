namespace hasEx
{
    interface IDisplayCard {
        DisplayCard(): void
    }
    interface IProcessor {
        Processor(): void
    }
    
    class DisplayCardType1 implements IDisplayCard {
        DisplayCard(): void {
            console.log("DisplayCard Type1")
        }
    
    }
    class DisplayCardType2 implements IDisplayCard {
        DisplayCard(): void {
            console.log("DisplayCard Type2")
        }
    
    }
    class ProcessorType1 implements IProcessor {
        Processor(): void {
            console.log("Processor Type1")
        }
    }
    class ProcessorType2 implements IProcessor {
        Processor(): void {
            console.log("Processor Type2")
        }
    }
    
    abstract class BaseLaptop {
        public _DisplayCard: IDisplayCard;
        public _Processor:IProcessor;
        constructor(DisplayCard: IDisplayCard,Processor:IProcessor) {
            this._DisplayCard = DisplayCard;
            this._Processor = Processor;
        }
    
        Screen(): void {
            console.log("ekran bulundu")
        }
        DisplayCard(): void {
            this._DisplayCard.DisplayCard();
        }
        Processor(): void {
            this._Processor.Processor();
        }
    }
    
    class Lenovo extends BaseLaptop {
    
    }
    class Monster extends BaseLaptop {
    
    }
    
    class Dell extends BaseLaptop {
    
    }
    var laptop = new Lenovo(new DisplayCardType1(),new ProcessorType2());
    laptop.DisplayCard();
    laptop.Processor();
}
