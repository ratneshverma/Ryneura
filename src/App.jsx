import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import DealPilotPage from './components/DealPilot/DealPilotPage'

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <div className="min-h-screen bg-[#080D1A] text-[#F0F6FF] selection:bg-[#00D4FF]/30 selection:text-white">
      <Navbar />
      <main>
        {currentPath === '/dealpilot' ? (
          <DealPilotPage />
        ) : (
          <>
            <Hero />
            <Overview />
            <Services />
            <Process />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
