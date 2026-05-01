function calculateBMI(){

const weight = parseFloat(document.getElementById("weight").value);
const heightCm = parseFloat(document.getElementById("height").value);

if(!weight || !heightCm){
document.getElementById("bmi-result").innerText = "Please enter valid details";
document.getElementById("bmi-status").innerText = "";
return;
}

const heightM = heightCm / 100;

const bmi = weight / (heightM * heightM);

document.getElementById("bmi-result").innerText =
"Your BMI: " + bmi.toFixed(1);

let status = "";

if(bmi < 18.5){
status = "Underweight";
}
else if(bmi < 25){
status = "Normal Weight";
}
else if(bmi < 30){
status = "Overweight";
}
else{
status = "Obese";
}

document.getElementById("bmi-status").innerText =
"Status: " + status;

}