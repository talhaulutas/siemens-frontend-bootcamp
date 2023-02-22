//Inheritance 
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
var interit1;
(function (interit1) {
    var Phone = /** @class */ (function () {
        function Phone(name, price) {
            this.name = name;
            this.price = price;
        }
        Phone.prototype.showPhoneInfo = function () {
            console.log("".concat(this.name, " - ").concat(this.price, " "));
        };
        return Phone;
    }());
    var IPhone = /** @class */ (function (_super) {
        __extends(IPhone, _super);
        function IPhone(name, price, camera) {
            var _this = _super.call(this, name, price) || this;
            _this._camera = camera;
            return _this;
        }
        IPhone.prototype.showPhoneInfo = function () {
            console.log("".concat(this.name, " - ").concat(this.price, " - ").concat(this._camera, " "));
        };
        return IPhone;
    }(Phone));
    var Nokia = /** @class */ (function (_super) {
        __extends(Nokia, _super);
        function Nokia(name, price) {
            return _super.call(this, name, price) || this;
        }
        Nokia.prototype.showPhoneInfo = function () {
            console.log("".concat(this.name, " - ").concat(this.price));
        };
        return Nokia;
    }(Phone));
    var phone = new IPhone("IPhone12", 3000, true);
    phone.showPhoneInfo();
    var phone2 = new Nokia("Nokia3310", 200);
    phone2.showPhoneInfo();
})(interit1 || (interit1 = {}));
