function toggleResources(id) {
    var resources = document.getElementById(id);
    if (resources.style.display === "block") {
        resources.style.display = "none";
    } else {
        resources.style.display = "block";
    }
}
