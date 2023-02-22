namespace ocpex2
{
    enum OrderType {
        Slow,
        Fast
    }
    interface ICalculate {
        calculate(price: number): number;
    }
    interface IPriceKeyValue {
        OrderType: OrderType;
        calculate: ICalculate;
    }
    class ProductCalculate {
    
        calculateBad(price: number, _OrderType: OrderType): number {
            let productPrice=0;
    
            productPrice=price;
            if (_OrderType == OrderType.Slow) productPrice = price;
            if (_OrderType == OrderType.Fast) productPrice = price * 3;
            return productPrice;
        }
        calculateGood(price: number, calculate1: ICalculate) {
            return calculate1.calculate(price);
        }
    }
    class SlowCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price;
        }
    }
    class FastCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 3;
        }
    }
       
}
