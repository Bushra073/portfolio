import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-16 min-h-[250px] w-full overflow-hidden border-t border-white/30"
    >
      {/* Ocean background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ocean-sunset.jpg')",
        }}
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#171323]/45 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[250px] flex-col items-center justify-center px-6 text-center">
        <p className="text-[10px] font-semibold tracking-[0.3em] text-white/70">
           CONNECT WITH ME
        </p>

        <h2 className="mt-2 font-serif text-3xl font-semibold italic text-white">
          Let&apos;s build something.
        </h2>

        <div className="mt-5 flex items-center gap-4">
          <a
            href="mailto:bushrasalsabil43@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/25"
          >
            <FaEnvelope size={20} />
          </a>

          <a
            href="https://github.com/Bushra073"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/25"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/bushra-salsabil-370681388/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/25"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="mt-5 text-[10px] text-white/50">
          © 2026 Bushra Salsabil
        </p>
      </div>
    </footer>
  )
}

export default Footer