import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJs, faCss3, faGithub, faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
    const [activeIndex, setActiveIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % skills.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <div className="container">
            <div className="content">
                <h1 className="name">Martin Muskov</h1>
                <h2 className="subtitle">Student</h2>

                <div className="social-links">
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
                </div>

                <div className="carousel-container">
                    <div className="carousel-track">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`skill-card ${index === activeIndex ? "active" : ""}`}
                            >
                                {skill.type === "image" ? (
                                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                ) : (
                                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;