// Ensure the DOM is fully loaded to safely manipulate element properties.
document.addEventListener('DOMContentLoaded', function () {
    // Initialize constants for slider elements to control color dynamically.
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    // Dynamically adjust page background color based on slider inputs.
    function updateBackgroundColor() {
        // Extract RGB values from sliders to form a cohesive color scheme.
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        // Create an RGB color string from the slider values.
        const bgColor = `rgb(${red}, ${green}, ${blue})`;

        // Update the document's background color with the new RGB string.
        document.documentElement.style.backgroundColor = bgColor;
    }

    // Attach input event listeners to sliders for real-time background color updates.
    redSlider.addEventListener('input', updateBackgroundColor);
    greenSlider.addEventListener('input', updateBackgroundColor);
    blueSlider.addEventListener('input', updateBackgroundColor);

    // Perform an initial color update to reflect the starting slider positions.
    updateBackgroundColor();
});
