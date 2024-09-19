document.addEventListener("DOMContentLoaded", function() {
    const snowContainer = document.querySelector('.snow-container');

    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // You can use other symbols or characters

        // Random position and animation duration
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 7 + 2}s`; // Between 2s and 5s
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size between 10px and 20px

        // Add the snowflake to the container
        snowContainer.appendChild(snowflake);

        // Remove the snowflake after the animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Generate snowflakes at intervals
    setInterval(createSnowflake, 10); // Adjust the interval for more or fewer snowflakes
});
