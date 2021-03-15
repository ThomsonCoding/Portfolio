var weight;
var bmr;
var pal;
var maintanance;

weight = 75.7;
pal = 1.5;

//24 for male, 22 for female.

bmr = weight * 24;
maintanance = bmr * pal;

protienGrams = 2.5 * weight;
protienCals = protienGrams * 4;

fatCalories = maintanance * 0.3;
fatGrams = fatCalories / 9;

carbCalories = maintanance - (fatCalories + protienCals);
carbGrams = carbCalories / 4;

document.write("Your BMR is " + bmr.toFixed(2) + "</br>");
document.write("Your Maintanence is " + maintanance.toFixed(2) + "</br>");
document.write(
  "At maintenance your Protein target is: " +
    protienCals.toFixed(2) +
    " in Calrories and " +
    protienGrams.toFixed(2) +
    " in grams." +
    "</br>"
);
document.write(
  "At maintenance your Fats target is: " +
    fatCalories.toFixed(2) +
    " in Calrories and " +
    fatGrams.toFixed(2) +
    " in grams." +
    "</br>"
);
document.write(
  "At maintenance your carb target is: " +
    carbCalories.toFixed(2) +
    " in Calrories and " +
    carbGrams.toFixed(2) +
    " in grams." +
    "</br>"
);
