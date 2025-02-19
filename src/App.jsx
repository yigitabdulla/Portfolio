import { useState, useEffect } from 'react';
import './style.scss';
import { projects } from './projects';

//git try

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };
  
  
  return (
    <>
      <div className="main-container">
        {/* Navbar */}
        <div className="navbar">
          <div className="navbar-logo">
            <img src="/owl.png" alt="Logo" onClick={() => scrollToSection('home')} />
          </div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('home')}><img src="/owl.png" alt="" /></a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>

        {/* Home Section */}
        <div id="home" className="section home">
          <div className="home-content">
            <div className="home-about">
              <span className="name">Abdulla Yigit</span>
              <span className="title">Software Developer</span>
            </div>
            <img className="planet" src="/planet.gif" alt="Planet" />
            <div className="home-text">
              <span className="code-keyword">console</span>
              <span className="code-punctuation">.</span>
              <span className="code-method">log</span>
              <span className="code-punctuation">(</span>
              <span className="code-string">"Hello World!"</span>
              <span className="code-punctuation">)</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="section about">
          <h2>About Me</h2>
          <p>
            Hey, I'm Abdulla! I'm a 23-year-old Computer Science student
            at Adnan Menderes University, mainly focused on front-end development.
            I also have experience in back-end technologies, UI/UX design, and Python.
            I love building real-world projects, staying updated with tech trends,
            and continuously improving my skills.
          </p>
        </div>

        {/* Projects Section */}
        <div id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button onClick={() => openModal(project)}>Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-modal" onClick={closeModal}>
                &times;
              </button>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.details.description}</p>
              <div className="screenshots">
                {selectedProject.details.screenshots.map((screenshot, index) => (
                  <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
                ))}
              </div>
              <div className="technologies">
                <h3>Technologies Used:</h3>
                <ul>
                  {selectedProject.details.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div id="contact" className="section contact">
          <h2>Contact</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <span>© 2023 Abdulla Yiğit. All Rights Reserved.</span>
            <div className="footer-links">
              <a href="https://github.com/yigitabdulla" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abdulla-yi%C4%9Fit-675177243/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:yigitabdulla@hotmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;