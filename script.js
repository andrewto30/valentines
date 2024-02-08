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
        document.getElementById('yesButton').innerHTML = 'Sure?';
        document.getElementById('noButton').innerHTML = 'Nope';
    } else if (noClickCount == 2) {
        // Second click: Change the image or do something else
        document.getElementById('valentineImage').src = 'images/cathearthrow.gif';
    } else if (noClickCount == 3) {
        // Third click: Maybe change the background color
        document.body.style.backgroundColor = 'pink';
    } else if (noClickCount > 3) {
        // Further clicks: You can add more conditions or a default action
        // For example, redirecting to another page
        window.location.href = 'https://example.com';
    }
});

