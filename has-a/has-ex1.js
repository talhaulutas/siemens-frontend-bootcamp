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
var CameraType1 = /** @class */ (function () {
    function CameraType1() {
    }
    CameraType1.prototype.Photo = function () {
        console.log("Camera Type1");
    };
    return CameraType1;
}());
var CameraType2 = /** @class */ (function () {
    function CameraType2() {
    }
    CameraType2.prototype.Photo = function () {
        console.log("Camera Type2");
    };
    return CameraType2;
}());
var CameraType3 = /** @class */ (function () {
    function CameraType3() {
    }
    CameraType3.prototype.Photo = function () {
        console.log("Camera Type3");
    };
    return CameraType3;
}());
var BasePhone = /** @class */ (function () {
    function BasePhone(camera) {
        this._camera = camera;
    }
    BasePhone.prototype.Call = function () {
        console.log("arama yapıldı");
    };
    BasePhone.prototype.Photo = function () {
        this._camera.Photo();
    };
    return BasePhone;
}());
var IPhone = /** @class */ (function (_super) {
    __extends(IPhone, _super);
    function IPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IPhone;
}(BasePhone));
var Nokia = /** @class */ (function (_super) {
    __extends(Nokia, _super);
    function Nokia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Nokia;
}(BasePhone));
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Samsung;
}(BasePhone));
var phone = new IPhone(new CameraType1());
phone.Photo();
