import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faJs, faCss3, faUnity } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const programmingIcons = [faReact, faHtml5, faJs, faCss3];
  const languages = ['React', 'HTML5', 'JavaScript', 'TypeScript'];
  const threedTools = ['Blender', 'Unity', 'Unreal'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % programmingIcons.length);
    }, 3000); // Increased rotation time
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="container">
        <div className="content">
          <h1 className="name" style={{ animationDelay: '0.2s' }}>Your Name</h1>

          <div className="icon-container">
            <FontAwesomeIcon
                icon={programmingIcons[activeIconIndex]}
                className="main-icon"
            />
            <div className="language-text">
              {languages[activeIconIndex]}
            </div>
          </div>

          <div className="threed-section">
            {threedTools.map((tool, index) => (
                <div
                    key={tool}
                    className="threed-tool"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {tool === 'Blender' && (
                      <img
                          src="/blender-icon.png"
                          alt="Blender"
                          style={{ width: 60, height: 60 }}
                      />
                  )}
                  {tool === 'Unity' && (
                      <FontAwesomeIcon icon={faUnity} className="tool-icon" />
                  )}
                  {tool === 'Unreal' && (
                      <img
                          src="/unreal-icon.png"
                          alt="Unreal"
                          style={{ width: 60, height: 60 }}
                      />
                  )}
                  <span>{tool}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;