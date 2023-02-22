class User{
    id: number;
    name: string;
    surname: string;
    price:number

    calculateSalary() {
        
    }

}
class PremiumUser extends User{
    calculateSalary()
    {
        return this.price * 4;
    }
}
class NormalUser extends User {
    calculateSalary()
    {
        return this.price;
    }
}

