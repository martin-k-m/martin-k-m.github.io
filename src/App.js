import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';  // Uncomment when ready
import Aspirations from './sections/Aspirations';  // Uncomment when ready

function App() {
    return (
        <div className="App">
            {/* <Header />*/}
            <HeroSection />
            <Projects />
            <Skills />
            <Education />
            {/* <Aspirations />*/}
            {/* Uncomment these when components are ready */}
            {/* <Education /> */}
            {/* <Aspirations /> */}
        </div>
    );
}

export default App;