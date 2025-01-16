import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Faizan Hussain
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Full Stack Developer & AI Enthusiast
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Faizi805"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:faizishah805@gmail.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="pic-removebg-preview.png"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate full-stack developer with 2 years of experience
                building modern web applications. I specialize in React,
                Node.js, and AI integeration.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Project Title {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used
                    in its development.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                        React
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                        Node.js
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <a
            href="mailto:faizishah805@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Faizi805" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:faizishah805@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">© 2024 faizan hussain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
