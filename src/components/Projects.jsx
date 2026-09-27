import { useState } from 'react'

const projects = [
  {
    title: 'Civic Rights & Safety Hub',
    category: 'WEB / DBMS',
    description:
      'A civic-focused project designed around making rights, safety, and useful civic information easier to access.',
    github: 'https://github.com/Bushra073/Civic-Rights-Project',
    live: null,
  },

  {
    title: 'MindfulReads',
    category: 'JAVA',
    description:
      'A reading-focused Java project built around exploring and managing books.',
    github: 'https://github.com/Bushra073/MindfulReads',
    live: null,
  },

  {
    title: 'Green Earth',
    category: 'WEB PROJECT',
    description:
      'A responsive web project created around environmental awareness and the Green Earth theme.',
    github:
      'https://github.com/programming-hero-web-course-4/b12a6-green-earth-Bushra073',
    live: 'https://assignment-6-plantation.netlify.app/',
  },

  {
    title: 'Customer Support Zone',
    category: 'WEB PROJECT',
    description:
      'A customer-support focused web project designed around a responsive frontend experience.',
    github:
      'https://github.com/programming-hero-web-course-4/b12a7-customer-support-zone-Bushra073',
    live: 'http://customer-support-website.netlify.app/',
  },

  {
    title: 'Winter Pet Care',
    category: 'WEB PROJECT',
    description:
      'A pet-care themed responsive website created as part of my frontend development work.',
    github: 'https://github.com/Bushra073/aassignment-9',
    live: 'http://winter-pet-caree.netlify.app/',
  },

  {
    title: 'Assignment 2',
    category: 'WEB PROJECT',
    description:
      'A frontend project created as part of my web development coursework.',
    github: 'https://github.com/Bushra073/assignment-2',
    live: 'http://bushra073.github.io/assignment-2/',
  },

  {
    title: 'Assignment 5',
    category: 'JAVASCRIPT',
    description:
      'A JavaScript-focused coursework project exploring interactive web development concepts.',
    github: 'https://github.com/Bushra073/assignment-5',
    live: 'https://bushra073.github.io/assignment-5/',
  },
]

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  const previousProject = () => {
    setActiveIndex(
      (activeIndex - 1 + projects.length) % projects.length
    )
  }

  const nextProject = () => {
    setActiveIndex(
      (activeIndex + 1) % projects.length
    )
  }

  const getBubble = (offset) => {
    return projects[
      (activeIndex + offset + projects.length) % projects.length
    ]
  }

  return (
    <section
      id="projects"
      className="relative mx-auto min-h-[560px] w-[90%] max-w-[1250px] overflow-hidden rounded-[45px] py-24"
    >

      {/* Atmospheric background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#dcd3f4] via-[#c8c9ed] to-[#b8c9e8]" />

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />

      <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />


      {/* Content */}

      <div className="relative z-10">

        <div className="mb-10 text-center">

          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-purple-700">
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#181525] md:text-5xl">
            Things I've built & explored
          </h2>

        </div>


        {/* Bubble slider */}

        <div className="relative mx-auto flex max-w-4xl items-center justify-center px-12">

          {/* Previous */}

          <button
            onClick={previousProject}
            className="absolute left-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/25 text-xl text-purple-700 shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white/40"
            aria-label="Previous project"
          >
            ←
          </button>


          {/* Three bubbles */}

          <div className="flex w-full items-center justify-center overflow-hidden py-10">

            {/* Previous bubble */}

            <button
              onClick={() => setSelectedProject(getBubble(-1))}
              className="relative hidden h-32 w-32 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 p-5 opacity-40 shadow-[0_20px_50px_rgba(75,50,130,0.15)] backdrop-blur-2xl transition-all duration-500 hover:scale-105 sm:flex"
            >

              <span className="pointer-events-none absolute inset-2 rounded-full border border-white/30" />

              <span className="relative max-w-[90px] text-center text-xs font-semibold leading-5 text-[#181525]">
                {getBubble(-1).title}
              </span>

            </button>


            {/* Active bubble */}

            <button
              onClick={() => setSelectedProject(getBubble(0))}
              className="group relative z-10 mx-5 flex h-48 w-48 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/15 p-6 shadow-[0_25px_60px_rgba(75,50,130,0.22)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-white/20"
            >

              {/* Inner glass edge */}

              <span className="pointer-events-none absolute inset-3 rounded-full border border-white/40" />

              {/* Highlight */}

              <span className="pointer-events-none absolute left-8 top-6 h-12 w-12 rounded-full bg-white/40 blur-xl" />

              <span className="relative max-w-[125px] text-center">

                <span className="mb-2 block text-[10px] font-bold tracking-[0.18em] text-purple-600">
                  {getBubble(0).category}
                </span>

                <span className="block text-lg font-bold leading-6 text-[#181525]">
                  {getBubble(0).title}
                </span>

                <span className="mt-3 block text-xs font-semibold text-purple-700">
                  Explore →
                </span>

              </span>

            </button>


            {/* Next bubble */}

            <button
              onClick={() => setSelectedProject(getBubble(1))}
              className="relative hidden h-32 w-32 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 p-5 opacity-40 shadow-[0_20px_50px_rgba(75,50,130,0.15)] backdrop-blur-2xl transition-all duration-500 hover:scale-105 sm:flex"
            >

              <span className="pointer-events-none absolute inset-2 rounded-full border border-white/30" />

              <span className="relative max-w-[90px] text-center text-xs font-semibold leading-5 text-[#181525]">
                {getBubble(1).title}
              </span>

            </button>

          </div>


          {/* Next */}

          <button
            onClick={nextProject}
            className="absolute right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/25 text-xl text-purple-700 shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white/40"
            aria-label="Next project"
          >
            →
          </button>

        </div>


        {/* Project counter */}

        <div className="mt-2 text-center text-xs font-medium tracking-widest text-purple-700/70">
          {activeIndex + 1} / {projects.length}
        </div>

      </div>


      {/* Project details modal */}

      {selectedProject && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#30254a]/30 p-6 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="relative w-full max-w-2xl rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-lg text-[#181525] transition hover:bg-white"
              aria-label="Close project details"
            >
              ×
            </button>


            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              {selectedProject.category}
            </span>


            <h3 className="mt-5 text-3xl font-bold text-[#181525]">
              {selectedProject.title}
            </h3>


            <p className="mt-4 leading-7 text-[#4b4658]">
              {selectedProject.description}
            </p>


            {/* Links */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#181525] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                GitHub ↗
              </a>


              {selectedProject.live && (

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  Live Deployment ↗
                </a>

              )}

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

export default Projects