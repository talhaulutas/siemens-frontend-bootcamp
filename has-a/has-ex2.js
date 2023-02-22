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
var DisplayCardType1 = /** @class */ (function () {
    function DisplayCardType1() {
    }
    DisplayCardType1.prototype.DisplayCard = function () {
        console.log("DisplayCard Type1");
    };
    return DisplayCardType1;
}());
var DisplayCardType2 = /** @class */ (function () {
    function DisplayCardType2() {
    }
    DisplayCardType2.prototype.DisplayCard = function () {
        console.log("DisplayCard Type2");
    };
    return DisplayCardType2;
}());
var ProcessorType1 = /** @class */ (function () {
    function ProcessorType1() {
    }
    ProcessorType1.prototype.Processor = function () {
        console.log("Processor Type1");
    };
    return ProcessorType1;
}());
var ProcessorType2 = /** @class */ (function () {
    function ProcessorType2() {
    }
    ProcessorType2.prototype.Processor = function () {
        console.log("Processor Type2");
    };
    return ProcessorType2;
}());
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(DisplayCard, Processor) {
        this._DisplayCard = DisplayCard;
        this._Processor = Processor;
    }
    BaseLaptop.prototype.Screen = function () {
        console.log("ekran bulundu");
    };
    BaseLaptop.prototype.DisplayCard = function () {
        this._DisplayCard.DisplayCard();
    };
    BaseLaptop.prototype.Processor = function () {
        this._Processor.Processor();
    };
    return BaseLaptop;
}());
var Lenovo = /** @class */ (function (_super) {
    __extends(Lenovo, _super);
    function Lenovo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lenovo;
}(BaseLaptop));
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Monster;
}(BaseLaptop));
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dell;
}(BaseLaptop));
var laptop = new Lenovo(new DisplayCardType1(), new ProcessorType2());
laptop.DisplayCard();
laptop.Processor();
