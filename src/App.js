import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { faUnity } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const programmingIcons = [faReact, faHtml5, faJs, faCss3];
  const languages = ['React', 'HTML5', 'JavaScript', 'TypeScript'];
  const threedTools = ['Blender', 'Unity', 'Unreal'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % programmingIcons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="container">
        <div className="content">
          <h1 className="name">Your Name</h1>

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
            {threedTools.map((tool) => (
                <div key={tool} className="threed-tool">
                  {tool === 'Blender' && <img src="/blender-icon.png" alt="Blender" />}
                  {tool === 'Unity' && <FontAwesomeIcon icon={faUnity} />}
                  {tool === 'Unreal' && <img src="/unreal-icon.png" alt="Unreal" />}
                  <span>{tool}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;