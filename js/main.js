document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display projects
    fetchProjects();
    
    // Fetch and display certifications
    fetchCertifications();
    
    // Initialize animations
    initializeAnimations();
    
    // Handle contact form submission
    initializeContactForm();
});

async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:3000/api/projects');
        const projects = await response.json();
        
        const projectsContainer = document.getElementById('projects-container');
        projects.forEach(project => {
            const projectElement = createProjectCard(project);
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

async function fetchCertifications() {
    try {
        const response = await fetch('http://localhost:3000/api/certifications');
        const certifications = await response.json();
        
        const certificationsContainer = document.getElementById('certifications-container');
        certifications.forEach(cert => {
            const certElement = createCertificationCard(cert);
            certificationsContainer.appendChild(certElement);
        });
    } catch (error) {
        console.error('Error fetching certifications:', error);
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card reveal reveal-slide-up';
    
    // Add random delay class
    const delay = Math.floor(Math.random() * 5) + 1;
    card.classList.add(`delay-${delay}`);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="assets/images/${project.image}" alt="${project.title}">
            <div class="project-links">
                <a href="${project.demoLink}" class="btn primary" target="_blank">Live Demo</a>
                <a href="${project.link}" class="btn secondary" target="_blank">Source Code</a>
            </div>
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'project-card reveal reveal-scale';
    
    // Add random delay class
    const delay = Math.floor(Math.random() * 5) + 1;
    card.classList.add(`delay-${delay}`);
    
    card.innerHTML = `
        <h3>${cert.name}</h3>
        <p>${cert.issuer}</p>
        <p>Issued: ${cert.date}</p>
        <a href="${cert.link}" class="btn secondary" target="_blank">View Certificate</a>
    `;
    
    return card;
}

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        // You can send the data to your backend or handle it as needed
        
        alert('Message sent successfully!');
        form.reset();
    });
} 