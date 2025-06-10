function estimateTransactionFee(amountToSend) {
    // Calculate the basic fee (1.5%)
    let basicFee = amountToSend * 0.015;

    // Apply minimum and maximum limits
    if (basicFee < 10) {
        basicFee = 10;
    } else if (basicFee > 70) {
        basicFee = 70;
    }

    // Calculate total amount debited
    let totalDebited = amountToSend + basicFee;

    // Build output for the web page
    let output = "";
    output += `<p>Amount to send: ${amountToSend} KES</p>`;
    output += `<p>Transaction fee: ${basicFee} KES</p>`;
    output += `<p>Total debited: ${totalDebited} KES</p>`;

    // Display the output on the web page
    document.body.innerHTML += output;
}

// Prompt user and convert input to number
let input = prompt("How much would you like to send?");
let amount = Number(input);

// Call the function with the user's input
estimateTransactionFee(amount);