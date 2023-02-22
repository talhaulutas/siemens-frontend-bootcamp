var ocpex2;
(function (ocpex2) {
    var OrderType;
    (function (OrderType) {
        OrderType[OrderType["Slow"] = 0] = "Slow";
        OrderType[OrderType["Fast"] = 1] = "Fast";
    })(OrderType || (OrderType = {}));
    var ProductCalculate = /** @class */ (function () {
        function ProductCalculate() {
        }
        ProductCalculate.prototype.calculateBad = function (price, _OrderType) {
            var productPrice = 0;
            productPrice = price;
            if (_OrderType == OrderType.Slow)
                productPrice = price;
            if (_OrderType == OrderType.Fast)
                productPrice = price * 3;
            return productPrice;
        };
        ProductCalculate.prototype.calculateGood = function (price, calculate1) {
            return calculate1.calculate(price);
        };
        return ProductCalculate;
    }());
    var SlowCalculation = /** @class */ (function () {
        function SlowCalculation() {
        }
        SlowCalculation.prototype.calculate = function (price) {
            return price;
        };
        return SlowCalculation;
    }());
    var FastCalculation = /** @class */ (function () {
        function FastCalculation() {
        }
        FastCalculation.prototype.calculate = function (price) {
            return price * 3;
        };
        return FastCalculation;
    }());
})(ocpex2 || (ocpex2 = {}));
