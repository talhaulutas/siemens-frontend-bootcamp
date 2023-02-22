var Student = /** @class */ (function () {
    function Student(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    Student.prototype.setAge = function (age) {
        if (age > 18) {
            this.age = age;
        }
        else
            throw "yaş değeri 18'den fazla olmalıdır.";
    };
    Student.prototype.getAge = function () { return this.age; };
    ;
    return Student;
}());
var student = new Student(1, "talha", "ulutaş");
student.setAge(23);
console.log(student.getAge());
