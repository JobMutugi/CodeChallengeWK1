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

  if (cups && (cups)) {
    alert(`So you would like ${cups} cups`);
    console.log(`Water: ${Water * cups} ml`);
    console.log(`Milk: ${Milk * cups} ml`);
    console.log(`Tealeaves: ${Tealeaves * cups} tablespoons`);
  } else {
    alert("You have not entered a valid number");
  }
}

calculateChaiIngredients();