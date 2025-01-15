import { useState } from 'react';
import { Github, Menu, X, ChevronRight } from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: "Untitled Indie Game",
            description: "Indie Game Project part of Celaeno Studios",
            link: "#",
            technologies: ["Unity", "3D", "Blender"]
        },
        {
            id: 2,
            title: "Untitled Application",
            description: "Random idea",
            link: "#",
            technologies: ["React", "Tauri"]
        },
    ];

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#081c2c]">
            {/* <div className="w-full bg-[#2496ed] text-white py-2 px-4 text-center text-sm">
                🚀 Check out my latest projects on GitHub!
            </div> */}

            <nav className="w-full bg-[#081c2c] border-b border-[#1d2d3d]">
                <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between items-center">
                        <div className="flex items-center justify-center flex-1 lg:flex-none">
                            <span className="text-2xl font-bold text-white mr-8">Martin</span>
                        </div>

                        <div className="hidden lg:flex items-center space-x-8">
                            <a
                                href="https://github.com/martin-k-m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#2496ed] hover:bg-[#2496ed]/90 px-4 py-2 rounded-md text-white"
                            >
                                GitHub <ChevronRight className="inline ml-1" size={16}/>
                            </a>
                        </div>


                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-white p-2"
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>
                    </div>
                </div>


                {isMenuOpen && (
                    <div className="lg:hidden w-full bg-[#081c2c] border-b border-[#1d2d3d]">
                        <div className="px-4 py-3 space-y-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-4 py-2 bg-[#0f2439] border border-[#1d2d3d] rounded-md text-white"
                            />
                            <div className="flex flex-col items-center space-y-3">
                                <a href="#products" className="text-gray-300 hover:text-[#2496ed] py-2">Products</a>
                                <a href="#developers" className="text-gray-300 hover:text-[#2496ed] py-2">Developers</a>
                                <a href="#pricing" className="text-gray-300 hover:text-[#2496ed] py-2">Pricing</a>
                                <a href="#blog" className="text-gray-300 hover:text-[#2496ed] py-2">Blog</a>
                                <a href="#" className="text-gray-300 hover:text-[#2496ed] py-2">Sign In</a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>


            <div className="flex-grow w-full bg-[#081c2c] pt-16 pb-32">
                <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-white mb-6">
                            Welcome to My Portfolio
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Exploring technology and building amazing projects.
                            Let's create something great together.
                        </p>
                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#projects"
                                className="bg-[#2496ed] hover:bg-[#2496ed]/90 px-6 py-3 rounded-md text-white text-center font-semibold"
                            >
                                View Projects
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className="w-full bg-[#0f2439] py-24">
                <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-[#081c2c] rounded-lg p-6 border border-[#1d2d3d] hover:border-[#2496ed] transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 text-center">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-[#0f2439] rounded-md text-sm text-[#2496ed]"
                                        >
                    {tech}
                  </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <footer className="w-full bg-[#081c2c] border-t border-[#1d2d3d] py-12">
                <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 pt-8 border-t border-[#1d2d3d] flex flex-col items-center justify-center">
                        <p className="text-gray-300 text-center">© 2025 Martin. All rights reserved.</p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <a
                                href="https://github.com/martin-k-m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#2496ed]"
                            >
                                <Github size={24}/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
};

export default App;