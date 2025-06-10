function calculateBodaFare() {
    // the basefare for getting on the bike
    let Basefare = 50;
    // distance in kilometers
    let kilometers = prompt("How long would you like to travel");
    kilometers = Number(kilometers);

    // cost per kilometer
    let cost = 30;
    let totalFare = Basefare + (kilometers * cost);

    let output = ""; // Create output variable

    if (kilometers && kilometers) {
        alert(`so the distance is ${kilometers}`);
        output += `<p>The distance is ${kilometers} km</p>`;
        output += `<p>Your destination will cost ${cost} KES per km</p>`;
        output += `<p>Your total fare is ${totalFare} KES</p>`;
    } else {
        alert("You have not entered a valid distance");
        output = "<p>You have not entered a valid distance</p>";
    }

    // Display the output on the web page
    document.body.innerHTML += output;
}

calculateBodaFare();
