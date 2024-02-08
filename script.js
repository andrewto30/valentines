let noClickCount = 0; // Initialize counter for "No" button clicks

document.getElementById('yesButton').addEventListener('click', function() {
    // Action when "Yes" is clicked
    document.getElementById('valentineImage').src = 'images/cathearthrow.gif'; // Change the image source
    document.getElementById('yesButton').style.display = 'none'; // Hide the "Yes" button
    document.getElementById('noButton').style.display = 'none'; // Hide the "No" button
});

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++; // Increment the "No" button click counter

    if (noClickCount == 1) {
        // First click: Enlarge the "Yes" button and change texts
        document.getElementById('yesButton').style.transform = 'scale(1.1)';
        document.getElementById('yesButton').innerHTML = 'Yes yes';
        document.getElementById('noButton').innerHTML = 'Wrong button!';
    } else if (noClickCount == 2) {
        // Second click: Change the image or do something else
        document.getElementById('yesButton').style.transform = 'scale(1.2)';
        document.getElementById('yesButton').innerHTML = 'Yes yes yes';
        document.getElementById('noButton').innerHTML = 'Uh Oh';
    } else if (noClickCount == 3) {
        // Third click: Maybe change the background color
        document.getElementById('yesButton').style.transform = 'scale(1.3)';
        document.getElementById('yesButton').innerHTML = 'Yes yes yes yes';
        document.getElementById('noButton').innerHTML = 'What is going on here';
    } else if (noClickCount > 3) {
        // Further clicks: You can add more conditions or a default action
        document.getElementById('yesButton').style.transform = 'scale(1.4)';
        document.getElementById('yesButton').innerHTML = '<3';
        document.getElementById('noButton').innerHTML = ':(';
    }
});

