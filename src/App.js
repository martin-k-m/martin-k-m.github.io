import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faHtml5,
    faJs,
    faCss3,
    faGithub,
    faLinkedin,
    faYoutube,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faMicrochip, faGraduationCap, faCode, faRobot } from "@fortawesome/free-solid-svg-icons";
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
    { name: "YouTube", icon: faYoutube, url: "https://www.youtube.com/@martinmuskov" },
    { name: "Instagram", icon: faInstagram, url: "https://www.instagram.com/martin_muskov/" },
];

const education = [
    {
        title: "Las Lomas High School",
        subtitle: "───────────────────",
        date: "2021 - 2023",
        icon: faGraduationCap,
        description: ""
    },
    {
        title: "Heritage High School",
        subtitle: "──────────────────",
        date: "2023 - 2025",
        icon: faGraduationCap,
        description: ""
    },
    {
        title: "University of California, Santa Cruz",
        subtitle: "────────────────────────────",
        date: "2025 - Present",
        icon: faMicrochip,
        description: "B.S. in Electrical Engineering"
    }
];

const projects = [
    {
        title: "Refine AI",
        description: "Educational platform leveraging AI to provide personalized learning experiences for students in STEM subjects.",
        link: "/",
        icon: faRobot
    },

];

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [profileImage] = useState("https://avatars.githubusercontent.com/u/65186527?v=4");

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % skills.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <div className="engineering-theme">
            <div className="grid-overlay"></div>

            <motion.div
                initial="hidden"
                animate="visible"
                className="container"
                variants={fadeIn}
            >
                <div className="profile-section">
                    <motion.div
                        className="profile-image-container"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={profileImage}
                            alt="Martin Muskov"
                            className="profile-image"
                        />
                        <div className="profile-image-border"></div>
                    </motion.div>

                    <div className="profile-content">
                        <motion.h1 className="name" variants={fadeIn}>
                            Martin <span className="accent">Muskov</span>
                        </motion.h1>
                        <motion.h2 className="subtitle" variants={fadeIn}>
                            Electrical Engineering Student
                        </motion.h2>

                        <motion.div className="social-links" variants={scaleUp}>
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="grid-layout">
                    <motion.div
                        className="skills-section grid-item"
                        variants={fadeIn}
                        whileHover={{ boxShadow: "0 0 15px rgba(0, 150, 255, 0.5)" }}
                    >
                        <h3 className="section-title">
                            <FontAwesomeIcon icon={faCode} className="section-icon" />
                            Technical Skills
                        </h3>
                        <div className="skills-vertical">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className={`skill-card ${index === activeIndex ? "active" : ""}`}
                                    initial={{ scale: 0.9 }}
                                    animate={{
                                        scale: index === activeIndex ? 1.1 : 0.9,
                                        boxShadow: index === activeIndex ? "0 0 15px rgba(0, 150, 255, 0.5)" : "none"
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {skill.type === "image" ? (
                                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                    ) : (
                                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                    )}
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="projects-section grid-item"
                        variants={fadeIn}
                        whileHover={{ boxShadow: "0 0 15px rgba(0, 255, 150, 0.5)" }}
                    >
                        <h3 className="section-title">
                            <FontAwesomeIcon icon={faMicrochip} className="section-icon" />
                            Current Projects
                        </h3>
                        <div className="projects-vertical">
                            {projects.map((project, index) => (
                                <motion.a
                                    key={index}
                                    href={project.link}
                                    className="project-card"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 150, 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="project-icon">
                                        <FontAwesomeIcon icon={project.icon} />
                                    </div>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="education-section grid-item"
                        variants={fadeIn}
                        whileHover={{ boxShadow: "0 0 15px rgba(255, 150, 0, 0.5)" }}
                    >
                        <h3 className="section-title">
                            <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
                            Education Timeline
                        </h3>
                        <VerticalTimeline
                            lineColor="var(--accent-color)"
                            className="custom-timeline"
                            layout="1-column-left"
                        >
                            {education.map((edu, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    icon={
                                        <FontAwesomeIcon
                                            icon={edu.icon}
                                            style={{
                                                width: '0%',
                                                height: '0%',
                                                color: 'var(--primary-color)'
                                            }}
                                        />
                                    }
                                    date={edu.date}
                                    dateClassName="timeline-date"
                                >
                                    <motion.div
                                        className="education-content"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            {edu.title}
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {edu.subtitle}
                                        </h4>
                                        <p className="education-description">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default App;