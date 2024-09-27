// Function to add content dynamically
function addContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    const contentDiv = document.createElement('div');
    contentDiv.textContent = content;
    section.appendChild(contentDiv);
}

// Example data to demonstrate functionality
addContent('nptel-answers', 'NPTEL Answer Example 1: [Link to Answer]');
addContent('nptel-answers', 'NPTEL Answer Example 2: [Link to Answer]');
addContent('coding-concepts', 'Coding Concept Example 1: [Link to Concept]');
addContent('coding-concepts', 'Coding Concept Example 2: [Link to Concept]');
addContent('latest-uploads', 'Latest Upload Example: [Link to Latest Upload]');

// You can call the addContent function to dynamically add new content as needed.
