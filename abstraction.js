// Dependency Inversion P
// Inversion Of Control P
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.method1 = function () { return 10; };
    ;
    B.prototype.method2 = function () { };
    B.prototype.method3 = function () { };
    B.prototype.method4 = function () { };
    B.prototype.method5 = function () { };
    return B;
}());
var Btype2 = /** @class */ (function () {
    function Btype2() {
    }
    Btype2.prototype.method1 = function () {
        return 20;
    };
    Btype2.prototype.method2 = function () {
        throw new Error("Method not implemented.");
    };
    return Btype2;
}());
var A = /** @class */ (function () {
    function A(b) {
        this.b = b;
    }
    A.prototype.method1 = function () {
        // 30 /2
        return this.b.method1() + 10;
    };
    return A;
}());
var a = new A(new Btype2());
console.log(a.method1());
