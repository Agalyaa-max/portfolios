// Internships Data
const internships = [
    {
        id: 1,
        title: "Business Operations Intern",
        company: "SkipperX",
        duration: "One Month (WFH)",
        category: "business",
        description: "Selected as Business Operations Intern to learn professional skills, gain hands-on experience, and work under mentorship.",
        points: [
            "Learn professional business operations",
            "Gain hands-on experience in operations",
            "Work under expert mentorship",
            "Develop business acumen and strategic thinking"
        ],
        icon: "fas fa-briefcase"
    },
    {
        id: 2,
        title: "Artificial Intelligence Virtual Intern",
        company: "Intern World",
        duration: "Nov 17 – Dec 17, 2025",
        category: "ai",
        description: "Virtual internship focused on real-world AI projects and technical skill development.",
        points: [
            "Work on real-world AI projects",
            "Improve technical & analytical skills",
            "Gain hands-on experience in fast-growing tech environment",
            "Learn and collaborate with industry mentors"
        ],
        icon: "fas fa-robot"
    },
    {
        id: 3,
        title: "Data Analyst Intern",
        company: "Infyntrek Systèmes",
        duration: "Current",
        category: "data",
        description: "Internship focusing on data analysis, dashboard creation, and business intelligence projects.",
        points: [
            "Work with real-world datasets",
            "Build dashboards & reports with Power BI & Tableau",
            "Apply skills in Python, SQL, and Data Analytics",
            "Contribute to Business Intelligence projects"
        ],
        icon: "fas fa-chart-bar"
    },
    {
        id: 4,
        title: "Digital Marketing Certification",
        company: "Rise High Technologies",
        duration: "Completed",
        category: "business",
        description: "Comprehensive digital marketing program covering various aspects of online marketing.",
        points: [
            "Social Media Marketing strategies",
            "SEO & SEM techniques",
            "Content Marketing development",
            "Analytics & Strategy implementation"
        ],
        icon: "fas fa-bullhorn"
    },
    {
        id: 5,
        title: "Cloud Computing Intern",
        company: "CodeAlpha",
        duration: "Jul 10 – Aug 10, 2025",
        category: "cloud",
        description: "Internship program focused on cloud technologies and real-time learning environment.",
        points: [
            "Intern ID: CA/JU1/27573",
            "Explore cloud technologies",
            "Gain hands-on experience in cloud computing",
            "Enhance technical skills in real-time learning environment"
        ],
        icon: "fas fa-cloud"
    },
    {
        id: 6,
        title: "Data Science Intern",
        company: "SkillCraft Technology",
        duration: "Upcoming",
        category: "data",
        description: "Internship program to gain hands-on experience in data science projects.",
        points: [
            "Gain hands-on experience in data science",
            "Explore real-world data science projects",
            "Enhance skills in dynamic and in-demand field",
            "Work on practical data analysis tasks"
        ],
        icon: "fas fa-database"
    },
    {
        id: 7,
        title: "Cyber Security Intern",
        company: "Frontline Technology",
        duration: "Jul 2025",
        category: "tech",
        description: "Hands-on experience in identifying security vulnerabilities and using cybersecurity tools.",
        points: [
            "Identify and analyse security vulnerabilities",
            "Hands-on experience with cybersecurity tools",
            "Learn threat mitigation techniques",
            "Document findings and suggest improvements"
        ],
        icon: "fas fa-shield-alt"
    },
    {
        id: 8,
        title: "Accounting Software Development Intern",
        company: "Mallow International",
        duration: "Dec 2024 – Jan 2025",
        category: "tech",
        description: "Internship focusing on accounting software maintenance and financial reporting.",
        points: [
            "Update and maintain financial records",
            "Prepare monthly financial reports",
            "Reconcile discrepancies",
            "Troubleshoot software issues"
        ],
        icon: "fas fa-calculator"
    }
];

// Render Internships
function renderInternships() {
    const container = document.getElementById('internshipContainer');
    
    if(!container) return;
    
    container.innerHTML = internships.map(internship => `
        <div class="internship-card" data-category="${internship.category}">
            <div class="internship-header">
                <h3>${internship.title}</h3>
                <p class="company">${internship.company}</p>
            </div>
            <div class="internship-content">
                <span class="internship-duration">${internship.duration}</span>
                <p>${internship.description}</p>
                <ul class="internship-points">
                    ${internship.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderInternships);