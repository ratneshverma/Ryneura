import React from 'react'
import logo from '../assets/ryneura-logo.png'
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080D1A] border-t border-[#1E2D45] pt-16 pb-12 relative">
      {/* Top Gradient Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B6EF5] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E2D45]/60 items-center justify-between">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <img src={logo} alt="Ryneura Logo" className="h-10 w-auto object-contain opacity-95 drop-shadow-[0_0_10px_rgba(59,110,245,0.2)]" />
            <p className="text-xs text-[#A0B0CC] max-w-sm">
              Engineering intelligence for tomorrow's software. Custom AI, Machine Learning models, and high-performance
              cloud SaaS platforms.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 flex items-center gap-8">
            <button
              onClick={() => scrollTo('#overview')}
              className="text-xs font-semibold text-[#A0B0CC] hover:text-[#00D4FF] transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="text-xs font-semibold text-[#A0B0CC] hover:text-[#00D4FF] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="text-xs font-semibold text-[#A0B0CC] hover:text-[#00D4FF] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-[#A0B0CC] bg-[#0D1526] border border-[#1E2D45] hover:text-white hover:border-[#00D4FF]/40 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6A85]">
          <div>
            © {new Date().getFullYear()} Ryneura. All rights reserved. · Intelligence, Reimagined.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
