var ocpex1;
(function (ocpex1) {
    var KDVType;
    (function (KDVType) {
        KDVType[KDVType["Low"] = 0] = "Low";
        KDVType[KDVType["Mid"] = 1] = "Mid";
        KDVType[KDVType["High"] = 2] = "High";
    })(KDVType || (KDVType = {}));
    var ProductKDVCalculate = /** @class */ (function () {
        function ProductKDVCalculate() {
        }
        ProductKDVCalculate.prototype.calculateBad = function (price, kdvtype) {
            var productPrice = 0;
            productPrice = price;
            if (kdvtype == KDVType.Low)
                productPrice = price * 1.01;
            if (kdvtype == KDVType.Mid)
                productPrice = price * 1.08;
            if (kdvtype == KDVType.High)
                productPrice = price * 1.18;
            return productPrice;
        };
        ProductKDVCalculate.prototype.calculateGood = function (price, calculate1) {
            return calculate1.calculate(price);
        };
        return ProductKDVCalculate;
    }());
    var LowKDVCalculation = /** @class */ (function () {
        function LowKDVCalculation() {
        }
        LowKDVCalculation.prototype.calculate = function (price) {
            return price * 1.01;
        };
        return LowKDVCalculation;
    }());
    var MidKDVCalculation = /** @class */ (function () {
        function MidKDVCalculation() {
        }
        MidKDVCalculation.prototype.calculate = function (price) {
            return price * 1.08;
        };
        return MidKDVCalculation;
    }());
    var HighKDVCalculation = /** @class */ (function () {
        function HighKDVCalculation() {
        }
        HighKDVCalculation.prototype.calculate = function (price) {
            return price * 1.18;
        };
        return HighKDVCalculation;
    }());
})(ocpex1 || (ocpex1 = {}));
