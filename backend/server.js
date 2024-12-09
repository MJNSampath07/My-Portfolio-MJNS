const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.get('/api/projects', (req, res) => {
    // Sample project data
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for e-commerce analytics with real-time data visualization, inventory management, and sales tracking. Built with React and Node.js.",
            technologies: ["React", "Node.js", "MongoDB", "D3.js", "Socket.IO"],
            image: "ecommerce-dashboard.jpg",
            link: "https://github.com/yourusername/ecommerce-dashboard",
            demoLink: "https://ecommerce-dashboard-demo.com"
        },
        {
            id: 2,
            title: "AI-Powered Task Manager",
            description: "Smart task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide productivity insights. Features natural language processing for task input.",
            technologies: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
            image: "task-manager.jpg",
            link: "https://github.com/yourusername/ai-task-manager",
            demoLink: "https://ai-task-manager-demo.com"
        },
        {
            id: 3,
            title: "Healthcare Mobile App",
            description: "Mobile application for healthcare providers to manage patient records, appointments, and telemedicine sessions. Includes secure video conferencing and HIPAA-compliant data storage.",
            technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "Express"],
            image: "healthcare-app.jpg",
            link: "https://github.com/yourusername/healthcare-mobile-app",
            demoLink: "https://healthcare-app-demo.com"
        }
    ];
    res.json(projects);
});

app.get('/api/certifications', (req, res) => {
    // Sample certification data
    const certifications = [
        {
            id: 1,
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            link: "certification-link"
        },
        // Add more certifications here
    ];
    res.json(certifications);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 