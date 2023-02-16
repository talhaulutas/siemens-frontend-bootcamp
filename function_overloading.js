var Calculate2 = /** @class */ (function () {
    function Calculate2() {
    }
    Calculate2.prototype.getSalary = function (a, b) {
        if (typeof (a) == "number") {
            return 5;
        }
        return "salary";
    };
    return Calculate2;
}());
var calculate = new Calculate2();
console.log(calculate.getSalary(1, 2)); // 5 değeri dönecek
console.log(calculate.getSalary("ahmet", "mehmet")); // salary
