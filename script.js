document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('valentineImage').src = 'images/cathearthrow.gif'; // Change the image source
    document.getElementById('yesButton').style.display = 'none'; // Hide the "Yes" button
    document.getElementById('noButton').style.display = 'none'; // Hide the "No" button
});

document.getElementById('noButton').addEventListener('click', function() {
    var yesButton = document.getElementById('yesButton');
    yesButton.style.transform = 'scale(1.1)'; // Enlarge the "Yes" button
    yesButton.innerHTML = 'Yes Yes'; // Change button text
    document.getElementById('noButton').innerHTML = 'No, really'; // Change "No" button text
});

document.getElementById('noButton').addEventListener('click', function() {
    var yesButton = document.getElementById('yesButton');
    yesButton.style.transform = 'scale(1.1)'; // Enlarge the "Yes" button
    yesButton.innerHTML = 'Yes Yes Yes'; // Change button text
    document.getElementById('noButton').innerHTML = 'Wrong button!!!'; // Change "No" button text
});

document.getElementById('noButton').addEventListener('click', function() {
    var yesButton = document.getElementById('yesButton');
    yesButton.style.transform = 'scale(1.1)'; // Enlarge the "Yes" button
    yesButton.innerHTML = 'Yes Yes Yes Yes'; // Change button text
    document.getElementById('noButton').innerHTML = 'Uh this is awkward'; // Change "No" button text
});
