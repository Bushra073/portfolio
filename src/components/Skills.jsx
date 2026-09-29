function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-[90%] max-w-[1150px] py-14"
    >
      <div className="rounded-[28px] border border-white/60 bg-white/25 p-7 shadow-[0_18px_45px_rgba(75,50,130,0.10)] backdrop-blur-xl md:p-8">

        {/* Heading */}

        <div className="mb-7">
          <p className="text-xs font-bold tracking-[0.25em] text-purple-700">
            SKILLS
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#181525] md:text-3xl">
            What I Work With
          </h2>
        </div>


        {/* Skill groups */}

        <div className="space-y-6">

          {/* Coding */}

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">⌘</span>

              <h3 className="text-sm font-bold text-[#181525]">
                Coding
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                C
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                C++
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Java
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                JavaScript
              </span>

            </div>
          </div>


          {/* Development */}

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">◈</span>

              <h3 className="text-sm font-bold text-[#181525]">
                Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                HTML
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                CSS
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                React
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Git & GitHub
              </span>

            </div>
          </div>


          {/* Writing */}

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg">✎</span>

              <h3 className="text-sm font-bold text-[#181525]">
                Writing & Research
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Creative Writing
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Academic Writing
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Research
              </span>

              <span className="rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium text-[#302b3d]">
                Reading
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills