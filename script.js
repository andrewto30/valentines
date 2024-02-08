let noClickCount = 0; // Initialize counter for "No" button clicks

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++; // Increment the "No" button click counter

    // Scale up the "Yes" button with each click
    let scaleValue = 1.0 + (0.25 * noClickCount); // Increase scale by 0.1 each time
    document.getElementById('yesButton').style.transform = `scale(${scaleValue})`;

    // Change the text on the "No" button based on the click count
    switch(noClickCount) {
        case 1:
            document.getElementById('noButton').innerHTML = 'Really?';
            break;
        case 2:
            document.getElementById('noButton').innerHTML = 'Try again';
            break;
        case 3:
            document.getElementById('noButton').innerHTML = 'Think twice';
            break;
        case 4:
            document.getElementById('noButton').innerHTML = 'Last chance';
            break;
        case 5:
            document.getElementById('noButton').innerHTML = 'You are being silly';
            break;
        case 6:
            document.getElementById('noButton').innerHTML = 'Be fr';
            break;
        case 7:
            document.getElementById('noButton').innerHTML = 'i will die alone';
            break;
        case 8:
            document.getElementById('noButton').innerHTML = ':(';
            // Disable the "No" button after 5 clicks
            document.getElementById('noButton').disabled = true;
            break;
        default:
            // Just in case, but we shouldn't get here
            break;
    }
});
