function toggleResources(resourceId) {
    const resources = document.querySelectorAll('.resources');
    resources.forEach(resource => {
        if (resource.id === resourceId) {
            resource.style.display = resource.style.display === 'none' || resource.style.display === '' ? 'block' : 'none';
        } else {
            resource.style.display = 'none';
        }
    });
}
