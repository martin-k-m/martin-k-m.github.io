import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJs, faCss3, faGithub, faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./App.css";

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
};

const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

// Add the missing array declarations
const skills = [
    { name: "React", icon: faReact, type: "icon" },
    { name: "Lua", icon: "https://img.icons8.com/?size=100&id=vDUov7oO2PL7&format=png&color=FFFFFF", type: "image" },
    { name: "HTML5", icon: faHtml5, type: "icon" },
    { name: "JavaScript", icon: faJs, type: "icon" },
    { name: "TypeScript", icon: faCss3, type: "icon" },
    { name: "Visual Basic", icon: "https://img.icons8.com/?size=100&id=121103&format=png&color=FFFFFF", type: "image" },
];

const socials = [
    { name: "GitHub", icon: faGithub, url: "https://github.com/martin-k-m" },
    { name: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/in/martin-muskov-3a450134b/" },
    { name: "Roblox", icon: "https://img.icons8.com/ios-filled/100/roblox.png", url: "https://www.roblox.com/users/271588613/profile" },
    { name: "YouTube", icon: faYoutube, url: "https://www.youtube.com/@martinmuskov" },
    { name: "Instagram", icon: faInstagram, url: "https://www.instagram.com/martin_muskov/" },
];

const education = [
    {
        title: "Las Lomas High School",
        subtitle: "High School Diploma",
        date: "2021 - 2023",
        color: "#cc2e2e",
    },
    {
        title: "Heritage High School",
        subtitle: "High School Diploma",
        date: "2023 - 2025",
        color: "#2267e6",
    },
    {
        title: "University of California, Santa Cruz",
        subtitle: "Electrical Engineering (Expected)",
        date: "2025 - ",
        color: "#db8834",
    }
];

const projects = [
    {
        title: "StormBound",
        description: "Roblox MMO RPG",
        link: "",
        icon: ""
    },
    {
        title: "Aereno",
        description: "Redefine. Knowledge.",
        link: "",
        icon: ""
    },
]

function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    // ... keep skills, socials, education, projects arrays the same ...

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % skills.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <motion.div initial="hidden" animate="visible" className="container">
            <div className="content">
                <motion.h1 className="name" variants={fadeIn}>Martin Muskov</motion.h1>
                <motion.h2 className="subtitle" variants={fadeIn}></motion.h2>

                <motion.div className="social-links" variants={scaleUp}>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            {social.icon instanceof Object ? (
                                <FontAwesomeIcon icon={social.icon} />
                            ) : (
                                <img src={social.icon} alt={social.name} />
                            )}
                        </a>
                    ))}
                </motion.div>

                <motion.div className="skills-section" variants={fadeIn}>
                    <h3 className="section-title">Technical Skills</h3>
                    <div className="carousel-container">
                        <div className="carousel-track">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className={`skill-card ${index === activeIndex ? "active" : ""}`}
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: index === activeIndex ? 1.1 : 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {skill.type === "image" ? (
                                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                    ) : (
                                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div className="projects-section" variants={fadeIn}>
                    <h3 className="section-title">Current Projects</h3>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                className="project-card"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="project-icon">{project.icon}</div>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div className="education-section" variants={fadeIn}>
                    <h3 className="section-title">Education</h3>
                    <VerticalTimeline lineColor="#ffffff">
                        {education.map((edu, index) => (
                            <VerticalTimelineElement
                                key={index}
                                contentStyle={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: '#fff',
                                    marginLeft: '60px',
                                    boxShadow: 'none',
                                    borderRadius: '15px'
                                }}
                                contentArrowStyle={{ display: 'none' }}
                                iconStyle={{
                                    background: edu.color,
                                    boxShadow: `0 0 0 3px ${edu.color}`,
                                    marginLeft: '-4px',
                                    width: '12px',
                                    height: '12px',
                                }}
                                icon={<div />}
                            >
                                <motion.div
                                    className="education-content"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <h3 className="vertical-timeline-element-title" style={{ color: edu.color }}>
                                        {edu.title}
                                    </h3>
                                    <div className="education-dates" style={{ color: edu.color }}>
                                        {edu.date}
                                    </div>
                                    <h4 className="vertical-timeline-element-subtitle">{edu.subtitle}</h4>
                                </motion.div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default App;