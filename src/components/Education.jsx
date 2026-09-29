
import { useState } from 'react'

const education = [
  {
    short: 'SSC',
    period: '2020',
    title: 'Jalalabad Cantonment Public School & College',
    detail: 'GPA 5.00',
  },
  {
    short: 'HSC',
    period: '2022',
    title: 'Jalalabad Cantonment Public School & College',
    detail: 'GPA 5.00',
  },
  {
    short: 'B.Sc.',
    period: '2024 — 2027',
    title: 'Metropolitan University',
    detail: 'Computer Science & Engineering',
  },
]

function Education() {
  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <section id="education" className="w-full py-14">
      <div className="mb-4">
        <p className="text-xs font-bold tracking-[0.3em] text-purple-700">
          EDUCATION
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#181525]">
          My academic path
        </h2>
      </div>

      <div className="relative -left-40 h-[390px] w-full">
        {/* Side glow */}

        <div className="pointer-events-none absolute left-0 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-purple-300/30 blur-[70px]" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-blue-300/30 blur-[70px]" />

        {education.map((item, index) => {
          const isActive = index === activeIndex

          const positions = [
            '-translate-x-[145px] translate-y- -rotate-6',
            'translate-x-0 translate-y-10 rotate-3',
            'translate-x-[140px] translate-y-2 rotate-6',
          ]

          return (
            <button
              key={item.short}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`
                absolute left-1/2 top-[20%]
                flex h-[190px] w-[235px]
                items-center justify-center
                border border-white/60
                bg-white/20
                p-7
                text-center
                backdrop-blur-xl
                transition-all duration-700
                ease-out
                ${positions[index]}
                ${
                  isActive
                    ? 'z-30 scale-110 shadow-[0_30px_80px_rgba(75,50,130,0.22)]'
                    : 'z-10 scale-90 opacity-75 shadow-[0_20px_50px_rgba(75,50,130,0.12)]'
                }
                ${
                  index === 0
                    ? 'rounded-[55%_45%_48%_52%/50%_42%_58%_50%]'
                    : ''
                }
                ${
                  index === 1
                    ? 'rounded-[45%_55%_58%_42%/43%_57%_44%_35%]'
                    : ''
                }
                ${
                  index === 2
                    ? 'rounded-[52%_48%_40%_60%/58%_42%_55%_45%]'
                    : ''
                }
                animate-[educationFloat_6s_ease-in-out_infinite]
              `}
              style={{
                animationDelay: `${index * -1.8}s`,
              }}
            >
              <span className="pointer-events-none absolute left-[15%] top-[12%] h-10 w-16 rounded-full bg-white/40 blur-xl" />

              <div className="relative z-10">
                <span className="text-xs font-bold tracking-[0.25em] text-purple-600">
                  {item.short}
                </span>

                <span className="mt-2 block text-xs font-semibold text-purple-700/80">
                  {item.period}
                </span>

                <h3 className="mt-3 text-sm font-bold leading-5 text-[#181525]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-[#514b5d]">
                  {item.detail}
                </p>
              </div>
            </button>
          )
        })}

        <span className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-semibold tracking-[0.18em] text-purple-700/40">
          CLICK A BUBBLE
        </span>
      </div>
    </section>
  )
}

export default Education