let currentlyActiveResource = null; // Track the currently active resource

// Function to toggle the visibility of resource sections
function toggleResources(resourceId) {
    const resourceElement = document.getElementById(resourceId);

    // If the clicked resource is already active, hide it
    if (currentlyActiveResource === resourceId) {
        closeResources(resourceId);
    } else {
        // Hide previously active resource if it exists
        if (currentlyActiveResource) {
            closeResources(currentlyActiveResource);
        }

        // Show the newly clicked resource and update the active resource
        resourceElement.style.display = "block"; // Show the resource
        currentlyActiveResource = resourceId; // Set new active resource
    }
}

// Function to close a specific resource section
function closeResources(resourceId) {
    const resourceElement = document.getElementById(resourceId);
    resourceElement.style.display = "none"; // Hide the resource
    currentlyActiveResource = null; // Reset active resource
}

// Optional: Function to initialize the resources to be hidden when the page loads
window.onload = function() {
    const resourceDivs = document.querySelectorAll('.resources');
    resourceDivs.forEach(div => {
        div.style.display = 'none'; // Hide all resources initially
    });
};
