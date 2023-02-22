//Inheritance 

namespace interit1 {

    class Phone {
        name: string;
        price: number;

        constructor(name: string,price:number) {
            this.name = name;
            this.price = price;

        }

        showPhoneInfo(): void {
            console.log(`${this.name} - ${this.price} `);
        }
    }

    class IPhone extends Phone {

        _camera: boolean;
        constructor(name: string,price:number,camera:boolean) {
            super(name,price);
            this._camera = camera;
        }

        showPhoneInfo(): void {
            console.log(`${this.name} - ${this.price} - ${this._camera} `);

        }
    }

    class Nokia extends Phone {
        
        constructor(name: string,price:number) {
            super(name,price);
           
        }

        showPhoneInfo(): void {
          
            console.log(`${this.name} - ${this.price}`);

        }
    }

    var phone = new IPhone("IPhone12",3000,true);
    phone.showPhoneInfo();

    var phone2 = new Nokia("Nokia3310",200);
    phone2.showPhoneInfo();


    } 
