//function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius){
return (celsius * 9/5) + 32;
}

//variable (integer) to hold the temp in Celsius
let temperatureInCelsius = 25;

//conditional to check if the temp is below freezing
if (temperatureInCelsius < 0){
  console.log("It's Freezing");
} else {
  console.log("It's not freezing");
}

// Call funtion with variable a parameter
let temperatureInFahrenheit = convertToFahreheit(temperatureInCelsius)

console.log(" The temperature in Fahrenheit is" + temperatureInFahrenheit +temperatureInFahrenheit + "F.");
