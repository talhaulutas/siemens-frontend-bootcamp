var price = 20;
var price2 = 20.44;
var name2 = "ahmet";
var isShow = true;
var products = null;
var product = undefined;
var price3 = 24;
price3.toFixed();
var price4 = 30;
var numbers = [1, 2, 3, 4, 5];
var names = ["ahmet", "mehmet", "hasan"];
var productList = ["kalem", "defter", "silgi", 23];
var value1 = true;
var tuple = ["a", 3];
function calculate(a, b) {
    return [a + b, a * b, a - b];
}
console.log("toplam :".concat(calculate(3, 3)[0]));
console.log("\u00E7arp\u0131m :".concat(calculate(3, 3)[1]));
console.log("\u00E7\u0131karma :".concat(calculate(3, 3)[2]));
//for
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
//class type
var Student = /** @class */ (function () {
    function Student(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    Student.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surName, " ").concat(this.age));
    };
    return Student;
}());
//Generic Class
var StudentGeneric = /** @class */ (function () {
    function StudentGeneric(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    StudentGeneric.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surName, " ").concat(this.age));
    };
    return StudentGeneric;
}());
var student1 = new Student("ahmet", "yıldız", 25);
var student2 = new StudentGeneric("mehmet", "Dertli", 23);
//var student2 = new Student(); // throw error
student1.show();
student2.show();
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 300] = "Blue";
})(Color || (Color = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Kad\u0131n"] = 0] = "Kad\u0131n";
    Gender[Gender["Erkek"] = 1] = "Erkek";
})(Gender || (Gender = {}));
var color = Color.Red;
console.log(color);
console.log(Color[color]);
//function
function Add(a, b) {
    // console.log(a + b);
    return a + b;
}
// generic function
function GenericAdd(a, b) {
    // ahmet mehmet => ahmetmehmet
    //  3,5=> 8;
    var sum = a + b;
    //console.log(sum);
    //console.log(`${a} ${b}`)
    return sum;
}
console.log("Generic Add :".concat(GenericAdd(2, 5)));
