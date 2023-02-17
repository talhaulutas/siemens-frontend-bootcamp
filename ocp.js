var SalaryType;
(function (SalaryType) {
    SalaryType[SalaryType["High"] = 0] = "High";
    SalaryType[SalaryType["Mid"] = 1] = "Mid";
    SalaryType[SalaryType["Low"] = 2] = "Low";
})(SalaryType || (SalaryType = {}));
class HighSalaryCalculate {
    calculate(salary) {
        return salary * 10;
    }
}
class LowSalaryCalculate {
    calculate(salary) {
        return salary * 5;
    }
}
class MidSalaryCalculate {
    calculate(salary) {
        return salary * 7;
    }
}
class SalaryCalculate {
    calculateGood(salary, salaryCalculate) {
        return salaryCalculate.calculate(salary);
    }
    CalculateBad(salary, salaryType) {
        let sumSalary = 0;
        switch (salaryType) {
            case SalaryType.High:
                sumSalary = salary * 10;
                break;
            case SalaryType.Low:
                sumSalary = salary * 5;
                break;
            default:
                break;
        }
        return sumSalary;
    }
}
var salaryCalculate = new SalaryCalculate();
let externalSalaryType = SalaryType.High;
let externalSalary = 2000;
let salaryArray = [];
salaryArray.push({ salaryType: SalaryType.High, SalaryCalculate: new HighSalaryCalculate() });
salaryArray.push({ salaryType: SalaryType.Mid, SalaryCalculate: new MidSalaryCalculate() });
salaryArray.push({ salaryType: SalaryType.Low, SalaryCalculate: new LowSalaryCalculate() });
let currentSalaryCalculate = salaryArray.find(x => x.salaryType == externalSalaryType);
console.log(currentSalaryCalculate);
console.log(currentSalaryCalculate === null || currentSalaryCalculate === void 0 ? void 0 : currentSalaryCalculate.SalaryCalculate.calculate(externalSalary));
// console.log(`high ${ salaryCalculate.calculateGood(1000,new HighSalaryCalculate())}`)
// console.log(`low ${ salaryCalculate.calculateGood(1000,new LowSalaryCalculate())}`)
// console.log(`mid ${ salaryCalculate.calculateGood(1000,new MidSalaryCalculate())}`)
