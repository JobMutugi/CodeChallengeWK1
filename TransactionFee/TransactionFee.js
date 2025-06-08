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

    // Print results
    console.log(`Amount to send: ${amountToSend} KES`);
    console.log(`Transaction fee: ${basicFee} KES`);
    console.log(`Total debited: ${totalDebited} KES`);
}

// Prompt user and convert input to number
let input = prompt("How much would you like to send?");
let amount = Number(input);

// Call the function with the user's input
estimateTransactionFee(amount);