import { useEffect, useState } from 'react'

function Hero() {
  const [text, setText] = useState('')
  const name = 'Bushra Salsabil'

  // useEffect(() => {
  //   let index = 0
  //   let deleting = false
  //   let pause = false

  //   const typing = setInterval(() => {
  //     if (pause) {
  //       return
  //     }

  //     if (!deleting) {
  //       setText(name.slice(0, index + 1))
  //       index++

  //       if (index === name.length) {
  //         pause = true

  //         setTimeout(() => {
  //           pause = false
  //           deleting = true
  //         }, 1800)
  //       }
  //     } else {
  //       setText(name.slice(0, index - 1))
  //       index--

  //       if (index === 0) {
  //         deleting = false
  //       }
  //     }
  //   }, 110)

  //   return () => clearInterval(typing)
  // }, [])


  useEffect(() => {
  let index = 0
  let deleting = false

  const typing = setInterval(() => {
    if (!deleting) {
      setText(name.slice(0, index + 1))
      index++

      if (index === name.length) {
        deleting = true
      }
    } else {
      setText(name.slice(0, index - 1))
      index--

      if (index === 0) {
        deleting = false
      }
    }
  }, 150)

  return () => clearInterval(typing)
}, [])



  return (
    // <section id="home" className="portfolio-hero">
   <section
  id="home"
  className="portfolio-hero bg-white/10 backdrop-blur-md border border-white/30"
>

      <div className="bubble bubble-one"></div>
      <div className="bubble bubble-two"></div>
      <div className="bubble bubble-three"></div>
      <div className="bubble bubble-four"></div>

      <div className="portfolio-hero-content">

        <p className="hero-intro">
          HELLO, I'M
        </p>

        <h1>
          {text}
          <span className="cursor">|</span>
        </h1>

        <h2>
          Computer Science Student & Aspiring Developer
        </h2>

        <p className="hero-description">
          I enjoy turning ideas into meaningful digital experiences,
          exploring new technologies, and continuously learning through
          the things I build.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Let's Talk
          </a>

        </div>

      </div>


      <div className="portfolio-hero-side">

        <div className="personality-orbit"></div>

        <div className="personality-card">

          <div className="personality-center">
            <span>BS</span>
          </div>

          <div className="personality-item personality-academia">

            <span className="personality-icon">
              ✦
            </span>

            <div>
              <strong>Academia</strong>
              <small>Learn · Explore · Research</small>
            </div>

          </div>


          <div className="personality-item personality-code">

            <span className="personality-icon">
              &lt;/&gt;
            </span>

            <div>
              <strong>Code</strong>
              <small>Build · Create · Solve</small>
            </div>

          </div>


          <div className="personality-item personality-literature">

            <span className="personality-icon">
              ✎
            </span>

            <div>
              <strong>Literature</strong>
              <small>Read · Write · Reflect</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero