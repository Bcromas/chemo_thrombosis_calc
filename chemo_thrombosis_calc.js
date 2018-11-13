var prompt = require('prompt');
var colors = require("colors/safe");
prompt.delimiter = " ";
// prompt.message = colors.red(">>");
prompt.message = "";

// console.log(colors.black.bgWhite("\nChemotherapy-Associated Thrombosis calculator\nPlease enter Y/N for the following 5 questions."));
// console.log(colors.underline("\nChemotherapy-Associated Thrombosis calculator"));
console.log(colors.black.bgWhite("\nChemotherapy-Associated Thrombosis calculator"));
console.log("\nPlease enter Y/N for the following 5 questions.");

var properties = [
  {
    message: colors.white("\n1) Is the patient's prechemotherapy platelet count greater than 350*10^9?"),
    name: 'plateletcount',
    validator: /Y[es]*|N[o]?/,
    required: true
  },
  {
    message: colors.white("\n2) Is the patient's cancer located in the stomach or pancreas?"),
    name: 'siteofcancer',
    validator: /Y[es]*|N[o]?/,
    required: true
  },
  {
    message: colors.white("\n3) Is the patient's hemoglobin level less than 100g/L or is the patient receiving red cell growth factors?"),
    name: 'hemoglobin',
    validator: /Y[es]*|N[o]?/,
    required: true
  },
  {
    message: colors.white("\n4) Is the patient's prechemotherapy leukocyte count more than 11*10^9/L?"),
    name: 'leukocyte',
    validator: /Y[es]*|N[o]?/,
    required: true
  },
  {
    message: colors.white("\n5) Is the patient's BMI greater than 35kg/m^2?"),
    name: 'BMI',
    validator: /Y[es]*|N[o]?/,
    required: true
  }
];

prompt.start();

var riskscore
var condition
riskscore = 0;

prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }

  if (result.plateletcount.toLowerCase() =="yes" || result.plateletcount.toLowerCase() =="y") {riskscore +=1} else {riskscore += 0}

  if (result.siteofcancer.toLowerCase() =="yes" || result.siteofcancer.toLowerCase() =="y") {riskscore +=2} else {riskscore += 1}

  if (result.hemoglobin.toLowerCase() =="yes" || result.hemoglobin.toLowerCase() =="y") {riskscore +=1} else {riskscore += 0}

  if (result.leukocyte.toLowerCase() =="yes" || result.leukocyte.toLowerCase() =="y") {riskscore +=1} else {riskscore += 0}

  if (result.BMI.toLowerCase() =="yes" || result.BMI.toLowerCase() =="y") {riskscore +=1} else {riskscore += 0}

  if (riskscore == 0) {condition="LOW"}
  else if(riskscore ==1 || riskscore ==2){condition="MEDIUM"}
  else{condition="HIGH"}

  console.log(colors.red.bgWhite("\nThe patient's risk score is " + riskscore + " and there is a " + condition + " risk of chemotherapy-associated thrombosis."));
});

function onErr(err) {
  console.log(err);
  return 1;
}


//
// function myFunction() {
//     var riskscore
//     var condition
//     riskscore = 0; //set the variables
//     var plateletcount = prompt("Please enter yes or no if your Prechemotherapy platelet count is greater than 350*10^9", "");
//     while(plateletcount !="yes" && plateletcount !="no"){var plateletcount =prompt("Please enter yes or no if your Prechemotherapy platelet count is greater than 350*10^9", "");} //while loop to ensure correct user input
//     if (plateletcount =="yes") {riskscore +=1}
//     else if (plateletcount == "no") {riskscore += 0}//risk score calculation for plateletcount
//
//     var siteofcancer =prompt("Please enter yes or no if your site of cancer is in either stomach or pancreas","");
//     while(siteofcancer!="yes" && siteofcancer !="no"){var siteofcancer =prompt("Please enter yes or no if your site of cancer is in either stomach or pancreas","");} //while loop to ensure correct user input
//     if (siteofcancer == "yes"){riskscore +=2}
//     else if (siteofcancer == "no"){riskscore +=1} //risk score calculation for siteofcancer
//
//     var hemoglobin = prompt("Please enter yes or no if your hemoglobin level is less than 100g/L or use red cell growth factors", "")
//     while(hemoglobin!="yes" && hemoglobin !="no"){var hemoglobin =prompt("Please enter yes or no if your hemoglobin level is less than 100g/L or use red cell growth factors","");} //while loop to ensure correct user input
//     if (hemoglobin == "yes"){riskscore +=1}
//     else if (hemoglobin == "no"){riskscore +=0} //risk score calculation for hemoglobin
//
//
//     var leukocyte=prompt("Please enter yes or no if your Prechemotherapy leukocyte count is more than 11*10^9/L","")
//     while(leukocyte!="yes" && leukocyte !="no"){var leukocyte =prompt("Please enter yes or no if your Prechemotherapy leukocyte count is more than 11*10^9/L","");} //while loop to ensure correct user input
//     if (leukocyte == "yes"){riskscore +=1}
//     else if (leukocyte == "no"){riskscore +=0} //risk score calculation for leukocyte
//
//     var BMI = prompt("Please enter yes or no if your BMI is greater than 35kg/m^2","")
//     while(BMI!="yes" && BMI !="no"){var BMI =prompt("Please enter yes or no if your BMI is greater than 35kg/m^2","");} //while loop to ensure correct user input
//     if (BMI == "yes"){riskscore +=1}
//     else if (BMI == "no"){riskscore +=0} //risk score calculation for BMI
//
//     if (riskscore == 0) {condition="LOW"}
//     else if(riskscore ==1 || riskscore ==2){condition="MEDIUM"}
//     else{condition="HIGH"} //association of riskscore and risk level.
//
//  document.getElementById("demo").innerHTML =
//         "Your riskscore is" + " " + riskscore + " and you have" + " " + condition + " "+"risk of chemotherapy-associated thrombosis."
//     }
