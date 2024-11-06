let actualTemp = 75;
let desiredTemp = 40;
let tempCelsius = 20;
let targetUnit = "C";

let runAC = false;
let runHeat = false;
let standby = true;

let message1 = 'Temperature went from ' + actualTemp + ' to ' + desiredTemp;
let message2 = 'Temperature is ' + desiredTempTemp;

if (actualTemp > desiredTemp){
    runAC = true;
    console.log("AC running")
    console.log(message)
}else if (actualTemp < desiredTemp){
    runHeat = true;
    console.log("Heat running")
    console.log(message)
}else{
    standby = true;
    console.log("AC on standby")
}