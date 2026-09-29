import { useState } from 'react'

const lovePhotos = Array.from(
  { length: 20 },
  (_, index) => `/photos/photo${index + 1}.jpg`
)

function BeyondScreen() {
  const [showGallery, setShowGallery] = useState(false)

  return (
    <section
      id="beyond-screen"
      className="relative mx-auto flex w-[90%] max-w-[1150px] justify-start py-10"
    >
      <div className="relative ml-2 w-[260px]">
        {/* Heading */}
        <p className="mb-2 ml-5 text-[10px] font-semibold tracking-[0.25em] text-purple-700">
          BUSHRA OUTSIDE THE SCREEN
        </p>

        {/* Blob */}
        <button
          type="button"
          onClick={() => setShowGallery(true)}
          className="beyond-blob group relative flex h-[215px] w-[320px] items-center justify-center rounded-[28%_52%_38%_42%/45%_48%_62%_55%] border border-white/60 bg-white/20 shadow-[0_20px_55px_rgba(75,50,130,0.16)] backdrop-blur-xl transition duration-500 hover:scale-105"
        >
          {/* Soft glow */}
          <span className="pointer-events-none absolute -left-8 -top-6 h-20 w-20 rounded-full bg-purple-300/30 blur-2xl" />

          {/* Decorative bubble */}
          <span className="absolute right-5 top-4 h-5 w-5 rounded-full border border-white/60 bg-white/25 backdrop-blur-md" />

          <span className="absolute bottom-6 left-6 h-3 w-3 rounded-full bg-white/60 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

          {/* Text */}
          <span className="relative z-10 text-center">
            <span className="block text-[11px] font-medium tracking-[0.18em] text-[#51455f]">
              pass a lil
            </span>

            <span className="mt-1 block font-serif text-3xl font-semibold italic text-[#21192d]">
              vibe check
            </span>

            <span className="mt-3 block text-[9px] font-semibold tracking-[0.18em] text-purple-700/60 transition group-hover:text-purple-700">
              CLICK ME ✦
            </span>
          </span>
        </button>
      </div>

      {/* Photo Gallery */}
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171323]/80 p-5 backdrop-blur-md">
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={() => setShowGallery(false)}
              className="absolute -right-1 -top-12 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Close
            </button>

            <div className="overflow-x-auto rounded-[30px] bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex w-max gap-5">
                {lovePhotos.map((photo, index) => (
                  <div
                    key={photo}
                    className="w-[250px] shrink-0 rotate-[-1deg] bg-[#faf7f0] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                  >
                    <img
                      src={photo}
                      alt={`Things I Love ${index + 1}`}
                      className="h-[300px] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default BeyondScreen