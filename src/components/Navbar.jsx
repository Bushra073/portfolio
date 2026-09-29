

import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="portfolio-navbar">
      {/* <a href="#home" className="logo" onClick={closeMenu}>
        BS
      </a> */}

      <a href="#home" className="logo" onClick={closeMenu}>
  <img
    src="/cat.jpg"
    alt="Portfolio home"
    // className="h-9 w-9 object-contain"
    className="w-10 h-10 rounded-full object-cover"
  />
</a>

      {/* Desktop navigation */}
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

      {/* Mobile menu button */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '×' : '☰'}
      </button>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" onClick={closeMenu} className="mobile-talk-button">
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar