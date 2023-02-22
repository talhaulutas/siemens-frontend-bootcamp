abstract class Laptop {

    Screen(): void { }


    abstract Processor(): void

    abstract DisplayCard(): void


}

class Lenovo extends Laptop {
    Processor(): void {
        console.log("işlemcisi var type1");
    }
    DisplayCard(): void {
        console.log("ekran kartı var type2");
    }


}

class Dell extends Laptop {
    Processor(): void {
        console.log("işlemcisi var type2");
    }
    DisplayCard(): void {
        console.log("ekran kartı var type1");
    }


}

class Monster extends Laptop {
    Processor(): void {
        console.log("işlemcisi var type1");
    }
    DisplayCard(): void {
        console.log("ekran kartı var type3");
    }

}


