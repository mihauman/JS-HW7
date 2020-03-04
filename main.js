const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//#1
const getMyTaxes = function(salary){
  const myTax  = this.tax * salary;
    return myTax;
}
console.log(getMyTaxes.call(ukraine,10000));
//#2
const getMiddleTaxes = function(country){
 const middleTax = this.tax * this.middleSalary;
 return middleTax;
}
console.log(getMiddleTaxes.call(ukraine));
//#3
const getTotalTaxes = function(country){
  const totalTax = this.tax * this.middleSalary * this.vacancies;;
  return totalTax;
}
console.log(getTotalTaxes.call(ukraine));
//#4
const getMySalary = function(country){
    setInterval(() => {
        const min = 1500;
        const max = 2000;
        const salary = Math.floor(Math.random()*(max - min + 1) + min);
        
        console.log({ 
            salary,
            taxes: country.tax,
            profit: salary - country.tax       
        });
    }, 10000); 
}
console.log(getMySalary(ukraine));