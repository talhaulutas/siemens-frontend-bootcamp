namespace ocpex1
{
    enum KDVType {
        Low,
        Mid,
        High
    }
    interface ICalculate {
        calculate(price: number): number;
    }
    interface IPriceKeyValue {
        kdvType: KDVType;
        calculate: ICalculate;
    }
    class ProductKDVCalculate {
    
        calculateBad(price: number, kdvtype: KDVType): number {
            let productPrice=0;
    
            productPrice=price;
            if (kdvtype == KDVType.Low) productPrice = price * 1.01;
            if (kdvtype == KDVType.Mid) productPrice = price * 1.08;
            if (kdvtype == KDVType.High) productPrice = price * 1.18;
           
           
           
            return productPrice;
        }
        calculateGood(price: number, calculate1: ICalculate) {
            return calculate1.calculate(price);
        }
    }
    class LowKDVCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 1.01;
        }
    }
    class MidKDVCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 1.08;
        }
    }
    class HighKDVCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 1.18;
        }
    }

        
}
