class  Student{
    id:number;
    name: string;
    surname:string;
    private age:number;    //private olarak tanımladım.

    constructor(id:number,name:string,surname:string){
        this.id=id;
        this.name=name;
        this.surname=surname;
    }
    setAge(age) {
        if (age > 18) {
            this.age = age;
        }
        else
            throw "yaş değeri 18'den fazla olmalıdır."
    }

    getAge() { return this.age };


}
var student= new Student(1,"talha","ulutaş");
student.setAge(23);
console.log(student.getAge());