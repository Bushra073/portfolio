
import { useEffect, useState } from 'react'

function Hero() {
  const [text, setText] = useState('')
  const [showAbout, setShowAbout] = useState(false)

  const name = 'Bushra Salsabil'

  useEffect(() => {
    let index = 0
    let deleting = false
    let pause = false

    const typing = setInterval(() => {
      if (pause) {
        return
      }

      if (!deleting) {
        setText(name.slice(0, index + 1))
        index++

        if (index === name.length) {
          pause = true

          setTimeout(() => {
            pause = false
            deleting = true
          }, 1800)
        }
      } else {
        setText(name.slice(0, index - 1))
        index--

        if (index === 0) {
          deleting = false
        }
      }
    }, 110)

    return () => clearInterval(typing)
  }, [])

  return (
    <>
      <section
        id="home"
        className="relative mx-auto mt-8 min-h-[610px] w-[92%] max-w-[1250px] overflow-hidden rounded-[38px] border border-white/45 bg-white/10 backdrop-blur-md"
      >
        {/* Decorative background word */}

        <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(4rem,13vw,10rem)] font-bold tracking-[0.18em] text-white/20">
          PORTFOLIO
        </div>

        {/* Soft internal glow */}

        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-300/20 blur-[90px]" />

        <div className="pointer-events-none absolute bottom-[-100px] right-10 h-80 w-80 rounded-full bg-blue-300/20 blur-[100px]" />

        {/* LEFT SIDE */}

        <div className="relative z-20 flex min-h-[610px] items-center px-8 py-20 md:px-14 lg:w-[55%] lg:px-16">
          <div className="max-w-xl">

            <p className="mb-4 text-xs font-bold tracking-[0.35em] text-purple-700">
              HELLO, I'M
            </p>

            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#181525]">
              {text}
              <span className="ml-1 animate-pulse text-purple-600">
                |
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg font-semibold leading-8 text-[#373142]">
              Computer Science Student, Reader & Aspiring Developer
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#514b5d] md:text-base">
              I enjoy turning ideas into meaningful digital experiences,
              exploring new technologies, and continuously learning through
              the things I build.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#projects"
                className="rounded-full bg-[#30254a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/10 transition duration-300 hover:-translate-y-1 hover:bg-[#241c38]"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/70 bg-white/30 px-6 py-3 text-sm font-semibold text-[#30254a] shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/50"
              >
                Let's Talk
              </a>

            </div>

            {/* About Me trigger */}

            <button
              type="button"
              onClick={() => setShowAbout(true)}
              className="group mt-8 flex items-center gap-2 text-sm font-semibold text-[#51455f] transition duration-300 hover:text-purple-700"
            >
              <span className="relative">
                Click to know a fragment of thought on me
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-60 bg-purple-400 transition duration-300 group-hover:scale-x-100" />
              </span>

              <span className="text-purple-600 transition duration-300 group-hover:translate-x-1">
                ✦
              </span>
            </button>

          </div>
        </div>


        {/* RIGHT SIDE — PERSONALITY ORBIT */}

        <div className="absolute bottom-6 right-4 top-6 hidden w-[45%] lg:block">

          {/* Outer orbital rings */}

          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border border-white/25" />

          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full border border-white/30" />

          <div className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35" />


          {/* Central BS glass orb */}

          {/* <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/20 shadow-[0_25px_80px_rgba(76,54,130,0.25)] backdrop-blur-2xl">

            <div className="absolute inset-3 rounded-full border border-white/30" />

            <div className="absolute left-8 top-7 h-12 w-12 rounded-full bg-white/40 blur-xl" />

            <span className="relative text-5xl font-bold tracking-[-0.06em] text-[#30254a]">
              BS
            </span>

          </div> */}

{/* Central image glass orb */}

<div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/20 shadow-[0_25px_80px_rgba(76,54,130,0.25)] backdrop-blur-2xl">

  {/* Image */}
  <img
    src="/blueflower.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover opacity-75"
    style={{
      maskImage:
        'radial-gradient(circle, black 45%, transparent 100%)',
      WebkitMaskImage:
        'radial-gradient(circle, black 45%, transparent 100%)',
    }}
  />

  {/* Soft glass overlay */}
  <div className="absolute inset-0 rounded-full bg-white/10" />

  {/* Inner glass ring */}
  <div className="absolute inset-3 rounded-full border border-white/30" />

  {/* Glass highlight */}
  <div className="absolute left-8 top-7 h-12 w-12 rounded-full bg-white/40 blur-xl" />

</div>



          {/* Academia bubble */}

          <div className="personality-bubble personality-bubble-academia absolute left-[4%] top-[8%] flex h-32 w-36 rotate-[-7deg] items-center justify-center border border-white/60 bg-white/20 px-5 text-center shadow-[0_20px_50px_rgba(76,54,130,0.16)] backdrop-blur-xl">

            <div>
              <span className="block text-xl text-purple-600">
                ✦
              </span>

              <strong className="block text-sm font-bold text-[#30254a]">
                Academia
              </strong>

              <small className="mt-1 block text-[10px] leading-4 text-[#5b5368]">
                Learn · Explore · Research
              </small>
            </div>

          </div>


          {/* Code bubble */}

          <div className="personality-bubble personality-bubble-code absolute bottom-[10%] left-[2%] flex h-28 w-32 rotate-[6deg] items-center justify-center border border-white/60 bg-white/20 px-4 text-center shadow-[0_20px_50px_rgba(76,54,130,0.16)] backdrop-blur-xl">

            <div>
              <span className="block text-lg font-bold text-purple-600">
                &lt;/&gt;
              </span>

              <strong className="block text-sm font-bold text-[#30254a]">
                Code
              </strong>

              <small className="mt-1 block text-[10px] leading-4 text-[#5b5368]">
                Build · Create · Solve
              </small>
            </div>

          </div>


          {/* Literature bubble */}

          <div className="personality-bubble personality-bubble-literature absolute bottom-[2%] right-[2%] flex h-32 w-40 rotate-[-5deg] items-center justify-center border border-white/60 bg-white/20 px-5 text-center shadow-[0_20px_50px_rgba(76,54,130,0.16)] backdrop-blur-xl">

            <div>
              <span className="block text-xl text-purple-600">
                ✎
              </span>

              <strong className="block text-sm font-bold text-[#30254a]">
                Literature
              </strong>

              <small className="mt-1 block text-[10px] leading-4 text-[#5b5368]">
                Read · Write · Reflect
              </small>
            </div>

          </div>


          {/* Tiny floating lights */}

          <span className="absolute left-[28%] top-[20%] h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]" />

          <span className="absolute right-[14%] top-[30%] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.9)]" />

          <span className="absolute bottom-[27%] right-[30%] h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]" />

        </div>

      </section>


      {/* FULL-SCREEN ABOUT ME */}

      {showAbout && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#171323]/80 p-5 backdrop-blur-xl md:p-10">

          {/* Background glow */}

          <div className="pointer-events-none fixed -left-32 top-10 h-96 w-96 rounded-full bg-purple-400/20 blur-[120px]" />

          <div className="pointer-events-none fixed -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />


          {/* Close button */}

          <button
            type="button"
            onClick={() => setShowAbout(false)}
            className="fixed right-6 top-6 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:rotate-90 hover:bg-white/20"
            aria-label="Close about me"
          >
            ×
          </button>


          {/* About page */}

          <div className="relative mx-auto flex min-h-[calc(100vh-40px)] max-w-5xl items-center justify-center py-20 md:min-h-[calc(100vh-80px)]">

            <div className="relative w-full overflow-hidden rounded-[38px] border border-white/20 bg-[#f8f5fc]/90 px-7 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:px-14 md:py-16">

              {/* Decorative details */}

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-200/50 blur-3xl" />

              <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl" />

              <div className="relative z-10">

                <div className="mb-10 flex items-center gap-4">

                  <span className="h-px w-12 bg-purple-400" />

                  <p className="text-xs font-bold tracking-[0.3em] text-purple-700">
                    A LITTLE ABOUT ME
                  </p>

                </div>


                <h2 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#21192d] md:text-7xl">
                  Between
                  <span className="text-purple-600"> logic </span>
                  & literature.
                </h2>


                <div className="mt-12 max-w-3xl space-y-6 text-[15px] leading-8 text-[#514b5d] md:text-base md:leading-9">

                  <p>
                    I study computer science, where everything must be precise:
                    a missing semicolon can undo an entire program. Yet I've
                    always believed the most important things in life resist
                    precision. I learned this from Jane Austen, who understood
                    that a whole life can turn on a single glance across a
                    crowded room, or a letter that arrives a day too late.
                  </p>

                  <p>
                    I am a student in every sense: of algorithms and
                    architectures by day, of hearts and their quiet
                    contradictions by night. I chase knowledge the way some
                    people chase horizons, not because I expect to arrive, but
                    because the walking changes me.
                  </p>

                  <p>
                    I love the small things. The way someone remembers how you
                    take your tea. A book returned with a pencilled note in the
                    margin. A sentence that says less than it means, and is all
                    the more true for it. Grand gestures fade, but the small
                    ones stay, and they are where love actually lives.
                  </p>

                  <p>
                    Code taught me that anything can be built with logic.
                    Literature taught me that nothing worth keeping can be built
                    with logic alone.
                  </p>

                  <p>
                    So I try to live between the two: rigorous in thought,
                    tender in attention, and always curious about what a
                    well-made thing, whether a program or a paragraph, can
                    quietly say to the person who meets it.
                  </p>

                </div>


                <div className="mt-12 flex items-center gap-3">

                  <span className="h-2 w-2 rounded-full bg-purple-500" />

                  <span className="h-px w-20 bg-purple-300" />

                  <span className="font-serif text-xl italic text-purple-700">
                    Bushra Salsabil
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default Hero