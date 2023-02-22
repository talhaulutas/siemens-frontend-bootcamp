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
var isA;
(function (isA) {
    var Phone = /** @class */ (function () {
        function Phone() {
        }
        Phone.prototype.Call = function () { };
        return Phone;
    }());
    var IPhone = /** @class */ (function (_super) {
        __extends(IPhone, _super);
        function IPhone() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IPhone.prototype.Camera = function () {
            console.log("kamerası var type1");
        };
        return IPhone;
    }(Phone));
    var Nokia = /** @class */ (function (_super) {
        __extends(Nokia, _super);
        function Nokia() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Nokia.prototype.Camera = function () {
            console.log("kamerası yok");
        };
        return Nokia;
    }(Phone));
    var Samsung = /** @class */ (function (_super) {
        __extends(Samsung, _super);
        function Samsung() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Samsung.prototype.Camera = function () {
            console.log("kamerası var type2");
        };
        return Samsung;
    }(Phone));
})(isA || (isA = {}));
