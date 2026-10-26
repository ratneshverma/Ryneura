import { useState, useEffect } from 'react'
import logo from '../assets/ryneura-logo.png'
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('pushstate', handleLocationChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('pushstate', handleLocationChange)
    }
  }, [])

  const navLinks = [
    { label: 'Overview', href: '/#overview' },
    { label: 'Services', href: '/#services' },
    { label: 'DealPilot Store', href: '/dealpilot' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false)
    if (href.startsWith('/#')) {
      e.preventDefault()
      const elementId = href.substring(2)
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/')
        window.dispatchEvent(new Event('popstate'))
        setTimeout(() => {
          const el = document.getElementById(elementId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.getElementById(elementId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      e.preventDefault()
      window.history.pushState({}, '', href)
      window.dispatchEvent(new Event('popstate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080D1A]/85 backdrop-blur-md border-b border-[#1E2D45] py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Ryneura"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,212,255,0.25)]"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href || (currentPath === '/' && link.href === '/#overview')
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                  link.href === '/dealpilot'
                    ? 'text-[#00D4FF] font-semibold hover:text-white'
                    : isActive ? 'text-[#00D4FF]' : 'text-[#A0B0CC] hover:text-[#00D4FF]'
                }`}
              >
                {link.label === 'DealPilot Store' && <ShoppingBag className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl font-medium text-sm group bg-gradient-to-r from-[#00D4FF] via-[#3B6EF5] to-[#A855F7] hover:shadow-lg hover:shadow-[#3B6EF5]/30 transition-all duration-300 cursor-pointer"
          >
            <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-[#080D1A] rounded-[10px] group-hover:bg-opacity-0 text-[#F0F6FF] flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#A0B0CC] hover:text-white p-2 rounded-lg bg-[#0D1526] border border-[#1E2D45]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080D1A]/95 backdrop-blur-xl border-b border-[#1E2D45] px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-left text-[#A0B0CC] hover:text-[#00D4FF] text-base font-medium py-2 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {link.label === 'DealPilot Store' && <ShoppingBag className="w-4 h-4 text-[#00D4FF]" />}
                {link.label}
              </a>
            ))}
            <button
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#3B6EF5] to-[#A855F7] text-white font-medium text-center flex items-center justify-center gap-2 shadow-lg shadow-[#3B6EF5]/25 cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
