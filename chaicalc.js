//function to calculate chai ingredients

function calculateChaiIngredients() {
  // amount of water in ml  
  const Water = 200;
  // amount of milk in ml
  const Milk = 50;
  // number of tea leaves tablespoons
  const Tealeaves = 1;

  let cups = prompt("How many cups would you like?");
  cups = Number(cups); // Convert input to a number

  let output = ""; // Create output variable

  if (cups && (cups)) {
    alert(`So you would like ${cups} cups`);
    output += `<p>Water: ${Water * cups} ml</p>`;
    output += `<p>Milk: ${Milk * cups} ml</p>`;
    output += `<p>Tealeaves: ${Tealeaves * cups} tablespoons</p>`;
  } else {
    alert("You have not entered a valid number");
    output = "<p>You have not entered a valid number</p>";
  }

  // Display the output on the web page
  document.body.innerHTML += output;
}

calculateChaiIngredients();