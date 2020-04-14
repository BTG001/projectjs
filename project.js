var sheds = [ 
    {
    name: "SHED A",
    numberOfCows: 34,
    averageProd: 15
  },
  {
    name: "SHED B",
    numberOfCows: 11,
    averageProd: 28
  },
  {
    name: "SHED C",
    numberOfCows: 27,
    averageProd: 18
  },
  {
    name: "SHED D",
    numberOfCows: 52,
    averageProd: 11
  }
  ];
  console.log("Your production in shed A " + sheds[0].averageProd + " litres per day");
  console.log("Your production in shed B " + sheds[1].averageProd + " litres per day");
  console.log("Your production in shed C " + sheds[2].averageProd + " litres per day");
  console.log("Your production in shed D " + sheds[3].averageProd + " litres per day");
  console.log("The total production is " +(15 + 28 + 18 + 11) + " litres per day");
  var numberOfSheds = sheds.length;
  var months = {January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31};
  function totalProduction(verbose) {
    totalProduction = 0;
    index = 0;
    while(index < numberOfSheds) {
      total_production += sheds[index].numberOfCows * sheds[index].averageProd;
      shed_production = sheds[index].numberOfCows * sheds[index].averageProd;
      if (verbose === true){
        console.log("Your production in " + sheds[index].name + " " + shed_production.toString() + " litres per day");
        }
        index += 1;
    }
    if(verbose == true){
      console.log("The total production is " + total_production.toString() + " litres per day");
    }
    return total_production;
  }
  
  
  var incomeOverTime = function(selling_price, time , verbose) {
    // income for a day
    dailyIncome = totalProduction() * selling_price;
    return dailyIncome * time;
  }
  // income for a week and the whole year
  console.log(" ");
  console.log("Your weekly income will be ksh " + incomeOverTime(45, 7));
  console.log("Your yearly income will be ksh " + incomeOverTime(45, 365));
  
  console.log(" ");
  
  for (var key in months) {
    monthly_income = incomeOverTime(45, months[key]);
    console.log("Your income for " + key + " is " + monthly_income.toString());
  }
  
  
  