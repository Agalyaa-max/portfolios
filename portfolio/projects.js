// AI/Data Science Projects Data
const projects = [
    {
        title: "Smart Waste Management System",
        description: "AI-powered waste classification and management system using computer vision and IoT. Implemented real-time monitoring and optimization algorithms for efficient waste collection routes.",
        technologies: ["Python", "TensorFlow", "OpenCV", "IoT", "ML", "Flask"],
        category: "AI/ML",
        icon: "fas fa-recycle",
        links: {
            github: "https://github.com/Agalyaa-max/waste-management",
            demo: "#"
        },
        features: ["Real-time monitoring", "Route optimization", "Image classification", "Mobile alerts"]
    },
    {
        title: "Online Resume Builder",
        description: "Java-based web application for creating professional resumes with customizable templates. Features include PDF export, template selection, and real-time preview.",
        technologies: ["Java", "Spring Boot", "HTML/CSS", "JavaScript", "PDF Generation"],
        category: "Web Development",
        icon: "fas fa-file-alt",
        links: {
            github: "https://github.com/Agalyaa-max/resume-builder",
            demo: "#"
        },
        features: ["Multiple templates", "PDF export", "Real-time preview", "Responsive design"]
    },
    {
        title: "Hotel Revenue Dashboard",
        description: "Interactive business intelligence dashboard using IBM Cognos BI for hotel revenue analysis. Provides insights into occupancy rates, revenue streams, and customer demographics.",
        technologies: ["IBM Cognos BI", "SQL", "Data Visualization", "Business Intelligence"],
        category: "Data Analytics",
        icon: "fas fa-hotel",
        links: {
            github: "https://github.com/Agalyaa-max/hotel-revenue-dashboard",
            demo: "#"
        },
        features: ["Interactive dashboards", "Revenue forecasting", "Customer analytics", "Real-time updates"]
    },
    {
        title: "E-commerce Product Recommendation",
        description: "Scalable recommendation system using Apache Spark and Scala for e-commerce platforms. Implements collaborative filtering and content-based recommendation algorithms.",
        technologies: ["Apache Spark", "Scala", "MLlib", "Recommendation Systems", "Big Data"],
        category: "Big Data",
        icon: "fas fa-shopping-cart",
        links: {
            github: "https://github.com/Agalyaa-max/ecommerce-recommendation",
            demo: "#"
        },
        features: ["Real-time recommendations", "Scalable architecture", "Multiple algorithms", "Personalization"]
    },
    {
        title: "Digital Marketing Analytics Platform",
        description: "Comprehensive platform for tracking and analyzing digital marketing campaigns across multiple channels including social media, email, and search engines.",
        technologies: ["Python", "Django", "Google Analytics API", "Social Media APIs", "Data Analytics"],
        category: "Marketing Tech",
        icon: "fas fa-chart-pie",
        links: {
            github: "https://github.com/Agalyaa-max/digital-marketing-analytics",
            demo: "#"
        },
        features: ["Multi-channel tracking", "ROI calculation", "Campaign optimization", "Automated reporting"]
    },
    {
        title: "AI-Powered Chatbot for Education",
        description: "Intelligent chatbot using NLP and machine learning to assist students with queries, provide learning resources, and track academic progress.",
        technologies: ["Python", "NLP", "Dialogflow", "Machine Learning", "Flask"],
        category: "AI/ML",
        icon: "fas fa-robot",
        links: {
            github: "https://github.com/Agalyaa-max/education-chatbot",
            demo: "#"
        },
        features: ["Natural language processing", "Personalized learning", "Progress tracking", "24/7 availability"]
    }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    
    if(!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <i class="${project.icon}"></i>
                <h3>${project.title}</h3>
            </div>
            <div class="project-content">
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-links">
                    <a href="${project.links.github}" target="_blank" class="btn btn-outline">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    ${project.links.demo !== '#' ? 
                        `<a href="${project.links.demo}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>` : ''
                    }
                </div>
            </div>
        </div>
    `).join('');
}

// Add CSS for project features
const style = document.createElement('style');
style.textContent = `
    .project-features {
        margin: 15px 0;
        padding: 15px;
        background: #f8fafc;
        border-radius: 10px;
    }
    
    .project-features h4 {
        color: var(--dark);
        margin-bottom: 10px;
        font-size: 1rem;
    }
    
    .project-features ul {
        list-style: none;
        padding-left: 0;
    }
    
    .project-features li {
        padding: 5px 0;
        padding-left: 25px;
        position: relative;
        color: var(--gray);
    }
    
    .project-features li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-weight: bold;
    }
`;

document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);