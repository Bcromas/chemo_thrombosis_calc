var prompt = require('prompt');
var colors = require("colors/safe");
prompt.delimiter = " ";
prompt.message = "";

console.log(colors.blue.bgWhite("\nChemotherapy-Associated Thrombosis calculator"));
console.log("\nPlease enter 'yes' or 'no' for the following 5 questions.");

var properties = [
  {
    message: "\nEnter to Continue.",
    name: 'blank'
  },
  {
    message: colors.white("\n1) Is the patient's prechemotherapy platelet count greater than 350*10^9?"),
    name: 'plateletcount',
    validator: /yes|no/,
    warning: 'You must respond yes or no.',
    required: true
  },
  {
    message: colors.white("\n2) Is the patient's cancer located in the stomach or pancreas?"),
    name: 'siteofcancer',
    validator: /yes|no/,
    warning: 'You must respond yes or no.',
    required: true
  },
  {
    message: colors.white("\n3) Is the patient's hemoglobin level less than 100g/L or is the patient receiving red cell growth factors?"),
    name: 'hemoglobin',
    validator: /yes|no/,
    warning: 'You must respond yes or no.',
    required: true
  },
  {
    message: colors.white("\n4) Is the patient's prechemotherapy leukocyte count more than 11*10^9/L?"),
    name: 'leukocyte',
    validator: /yes|no/,
    warning: 'You must respond yes or no.',
    required: true
  },
  {
    message: colors.white("\n5) Is the patient's BMI greater than 35kg/m^2?"),
    name: 'BMI',
    validator: /yes|no/,
    warning: 'You must respond yes or no.',
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
