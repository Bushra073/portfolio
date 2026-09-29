import { useState } from 'react'

const achievements = [
  {
    icon: '🏆',
    title: 'Intra-Region Basketball Championship',
    detail: 'Champions',
    type: 'Achievement',
  },
  {
    icon: '🥇',
    title: 'Annual Sports Event',
    detail: '1st Prize',
    type: 'Achievement',
  },
  {
    icon: '📖',
    title: 'British Council Book Reading Competition',
    detail: 'Participation Award · 2016',
    type: 'Achievement',
  },
  {
    icon: '📖',
    title: 'British Council Book Reading Competition',
    detail: 'Participation Award · 2018',
    type: 'Achievement',
  },
  {
    icon: '📖',
    title: 'British Council Book Reading Competition',
    detail: 'Participation Award · 2019',
    type: 'Achievement',
  },
  {
    icon: '🌱',
    title: 'Green Earth Mission',
    detail: 'Volunteer',
    type: 'Activity',
  },
  {
    icon: '💻',
    title: 'C / C++',
    detail: 'Self-directed learning',
    type: 'Technical',
  },
  {
    icon: '☕',
    title: 'Java',
    detail: 'Self-directed learning & coursework',
    type: 'Technical',
  },
  {
    icon: 'JS',
    title: 'JavaScript',
    detail: 'Self-directed learning & web development',
    type: 'Technical',
  },
  {
    icon: '🐍',
    title: 'Python',
    detail: 'Kaggle learning',
    type: 'Technical',
  },
  {
    icon: '⚛',
    title: 'React',
    detail: 'Frontend project development',
    type: 'Technical',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    detail: 'Coursework & project-based learning',
    type: 'Technical',
  },
  {
    icon: '⌘',
    title: 'GitHub',
    detail: 'Personal & academic projects',
    type: 'Technical',
  },
]

function Achievements() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="relative w-full py-10">
      <div className="relative ml-auto w-[280px]">
        {/* Heading */}
        <p className="mb-2 ml-5 text-[10px] font-semibold tracking-[0.25em] text-purple-700">
          ACHIEVEMENTS & RECOGNITION
        </p>

        {/* Main blob */}
        <button
          type="button"
          onClick={() => setShowDetails(true)}
          className="beyond-blob group relative flex h-[190px] w-[250px] items-center justify-center rounded-[52%_48%_42%_58%/45%_58%_42%_55%] border border-white/60 bg-white/20 p-8 text-center shadow-[0_20px_55px_rgba(75,50,130,0.16)] backdrop-blur-xl transition duration-500 hover:scale-105"
        >
          <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-purple-300/30 blur-2xl" />

          <span className="absolute right-5 top-5 h-5 w-5 rounded-full border border-white/60 bg-white/25 backdrop-blur-md" />

          <span className="absolute bottom-6 left-6 h-3 w-3 rounded-full bg-white/60 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

          <span className="relative z-10">
            <span className="block text-3xl">🏆</span>

            <span className="mt-2 block font-serif text-2xl font-semibold italic text-[#21192d]">
              little wins
            </span>

            <span className="mt-3 block text-[9px] font-semibold tracking-[0.18em] text-purple-700/60 transition group-hover:text-purple-700">
              CLICK TO EXPLORE ✦
            </span>
          </span>
        </button>
      </div>

      {/* Details panel */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171323]/80 p-5 backdrop-blur-md">
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Close
            </button>

            <div className="mb-6 pr-20">
              <p className="text-[10px] font-semibold tracking-[0.25em] text-purple-200">
                A FEW THINGS I'VE BEEN PART OF
              </p>

              <h2 className="mt-2 font-serif text-4xl font-semibold italic text-white">
                Achievements & Recognition
              </h2>
            </div>

            <div className="max-h-[65vh] space-y-3 overflow-y-auto pr-2">
              {achievements.map((item) => (
                <div
                  key={`${item.title}-${item.detail}`}
                  className="flex items-center gap-4 rounded-[22px] border border-white/20 bg-white/10 p-4 backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.18em] text-purple-200">
                      {item.type.toUpperCase()}
                    </p>

                    <h3 className="mt-1 text-sm font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/65">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Achievements