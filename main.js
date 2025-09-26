// JavaScript to handle button click
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
        // Step 1: Show an alert
        alert("Aapne button dabaya!");

        // Step 2: Change background color
        document.body.style.backgroundColor = getRandomColor();

        // Step 3: Change button text
        button.textContent = "Dobara Dabao!";

        // Step 4: Optional – Disable button after 5 clicks
        if (!button.clickCount) {
            button.clickCount = 1;
        } else {
            button.clickCount++;
        }

        if (button.clickCount >= 5) {
            button.disabled = true;
            button.textContent = "Bas ho gaya!";
        }
    });

    // Helper function to get a random color
    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#f39c12", "#8e44ad"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
