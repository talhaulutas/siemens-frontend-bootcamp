var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.Screen = function () { };
    return Laptop;
}());
var Lenovo = /** @class */ (function (_super) {
    __extends(Lenovo, _super);
    function Lenovo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lenovo.prototype.Processor = function () {
        console.log("işlemcisi var type1");
    };
    Lenovo.prototype.DisplayCard = function () {
        console.log("ekran kartı var type2");
    };
    return Lenovo;
}(Laptop));
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dell.prototype.Processor = function () {
        console.log("işlemcisi var type2");
    };
    Dell.prototype.DisplayCard = function () {
        console.log("ekran kartı var type1");
    };
    return Dell;
}(Laptop));
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monster.prototype.Processor = function () {
        console.log("işlemcisi var type1");
    };
    Monster.prototype.DisplayCard = function () {
        console.log("ekran kartı var type3");
    };
    return Monster;
}(Laptop));
