
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BeyondScreen from './components/BeyondScreen'
import Achievements from './components/Achievements'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Page atmosphere */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Main lavender / blue atmosphere */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#e4ddf8] via-[#cfd1f0] to-[#b9c9e9]" />

        {/* Large soft lights */}

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-300/35 blur-[110px]" />

        <div className="absolute right-[-180px] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-300/30 blur-[120px]" />

        <div className="absolute left-[35%] top-[45%] h-[450px] w-[450px] rounded-full bg-violet-300/25 blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[20%] h-[500px] w-[500px] rounded-full bg-indigo-300/25 blur-[120px]" />


        {/* Floating light bubbles */}

        <div className="absolute left-[8%] top-[22%] h-16 w-16 rounded-full border border-white/50 bg-white/15 shadow-[0_0_40px_rgba(255,255,255,0.45)] backdrop-blur-md" />

        <div className="absolute right-[12%] top-[34%] h-24 w-24 rounded-full border border-white/40 bg-white/10 shadow-[0_0_50px_rgba(255,255,255,0.35)] backdrop-blur-md" />

        <div className="absolute left-[18%] top-[68%] h-10 w-10 rounded-full border border-white/50 bg-white/20 shadow-[0_0_30px_rgba(255,255,255,0.4)]" />

        <div className="absolute right-[25%] bottom-[12%] h-14 w-14 rounded-full border border-white/40 bg-white/15 shadow-[0_0_35px_rgba(255,255,255,0.4)] backdrop-blur-md" />

        {/* Tiny light */}

        <div className="absolute left-[48%] top-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />

        <div className="absolute right-[30%] top-[58%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />

        <div className="absolute left-[12%] bottom-[20%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />

      </div>


      {/* Portfolio content */}

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <div className="mx-auto grid w-[90%] max-w-[1150px] grid-cols-1 gap-6 md:grid-cols-2">
          <Education />
          <Skills />
        </div>

        <Projects />
        {/* <BeyondScreen />
         <Achievements /> */}
         <div className="mx-auto grid w-[90%] max-w-[700px] grid-cols-1 gap-10 md:grid-cols-2">
  <BeyondScreen />
  <Achievements />
</div>
<Footer />

      </div>

    </div>
  )
}

export default App