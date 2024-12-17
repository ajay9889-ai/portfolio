// Fetch projects from the backend and display them
document.addEventListener('DOMContentLoaded', async () => {
    const projectGrid = document.getElementById('project-grid');
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="./images/${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
            `;
            projectCard.addEventListener('click', () => showPopup(project));
            projectGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
});

function showPopup(imageSrc, title, description) {
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

