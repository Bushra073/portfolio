function Navbar() {
  return (
    <nav className="portfolio-navbar">
      <div className="logo">BS</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </nav>
  )
}

export default Navbar