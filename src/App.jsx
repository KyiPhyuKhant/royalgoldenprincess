import './App.css';

function App() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Royal Golden Princess</h1>
        <p>Welcome to my personal website built with React.</p>

        <div className="buttons">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am learning React and building this website as my personal portfolio.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>My projects will be added here soon.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
      </section>
    </main>
  );
}

export default App;