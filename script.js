// variables
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

// center pyramid in console
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// loop for with an if/else statement for create the pyramid
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

// variables used for visualize the pyramide
let result1 = "";
let result2 = "";

// set the pyramid on multiple lines in console log
for (const row of rows) {
  result1 += row + "\n";
}

// set the pyramid on multiple lines in HTML
for (const row of rows) {
  result2 += row + "<br>";
}

// visualize the pyramid
console.log(result1);
document.getElementById("pyramid").innerHTML = result2;