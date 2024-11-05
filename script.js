// script.js

// Function to calculate the estimate
function calculateEstimate() {
    let baseCost = 100; // Starting base cost
    const yardSize = document.querySelector('input[name="yardSize"]:checked');
    const features = document.querySelectorAll('input[name="features"]:checked');
    const frequency = document.querySelector('input[name="frequency"]:checked');

    // Adjust the base cost based on yard size
    if (yardSize) {
        if (yardSize.value === 'medium') baseCost += 50;
        else if (yardSize.value === 'large') baseCost += 100;
        else if (yardSize.value === 'custom') baseCost += 150;
    }

    // Add cost for each selected feature
    features.forEach(() => {
        baseCost += 25; // Example: each feature adds $25
    });

    // Frequency adjustment
    if (frequency && frequency.value === 'recurring') {
        baseCost *= 1.2; // Example: increase by 20% for recurring services
    }

    // Update the cost display
    document.getElementById('estimatedCost').textContent = `Estimated Cost: $${baseCost.toFixed(2)}`;
}

// Attach event listeners to form elements
document.querySelectorAll('#costEstimatorForm input').forEach(input => {
    input.addEventListener('change', calculateEstimate);
});

// Function to simulate form submission
function submitEstimate() {
    // Retrieve form data
    const estimatedCost = document.getElementById('estimatedCost').textContent;
    alert(`Estimate Submitted: ${estimatedCost}`);
    // In a live environment, you would send this data to the backend server
}
// JavaScript to handle cost estimation form submission
document.getElementById("estimationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Display the confirmation message
    document.getElementById("estimationConfirmation").style.display = "block";

    // Optionally, clear the form fields
    document.getElementById("estimationForm").reset();
});
