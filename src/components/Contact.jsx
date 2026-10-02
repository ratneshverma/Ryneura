import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICE_DROPDOWN } from '../data/constants'
import { Mail, Globe, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICE_DROPDOWN[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission state for demonstration
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 relative dot-grid">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-[#3B6EF5]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Let's Build Something <span className="gradient-text">Intelligent</span>
            </h2>
            <p className="text-[#A0B0CC] text-base leading-relaxed">
              Have an AI project, computer vision pipeline, or new SaaS idea in mind? Reach out and our engineering
              team will connect to assess feasibility, architecture, and deployment strategy.
            </p>

            {/* Contact details list */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3.5 text-[#F0F6FF]">
                <div className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#00D4FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6A85] font-mono uppercase">Direct Inquiries</div>
                  <a href="mailto:hello@ryneura.com" className="text-sm font-medium hover:text-[#00D4FF] transition-colors">
                    hello@ryneura.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-[#F0F6FF]">
                <div className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#3B6EF5]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6A85] font-mono uppercase">Website</div>
                  <a href="https://www.ryneura.com" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-[#00D4FF] transition-colors">
                    www.ryneura.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-[#F0F6FF]">
                <div className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#A855F7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6A85] font-mono uppercase">Headquarters</div>
                  <span className="text-sm font-medium">Remote-first · Global Delivery</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-[#1E2D45]/70">
              <div className="text-xs text-[#5A6A85] font-mono uppercase mb-3">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#A0B0CC] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#A0B0CC] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#A0B0CC] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-[#1E2D45] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/30 text-[#00E5A0] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank you for reaching out!</h3>
                  <p className="text-[#A0B0CC] max-w-md mx-auto text-sm">
                    We have received your message and a lead engineer from Ryneura will get back to you shortly at{' '}
                    <strong className="text-white">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', service: SERVICE_DROPDOWN[0], message: '' })
                    }}
                    className="mt-4 px-6 py-2 rounded-xl text-sm font-semibold bg-[#0D1526] border border-[#1E2D45] text-[#00D4FF] hover:border-[#00D4FF]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] text-white placeholder-[#5A6A85] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] text-white placeholder-[#5A6A85] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1A] border border-[#1E2D45] text-white text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                    >
                      {SERVICE_DROPDOWN.map((item) => (
                        <option key={item} value={item} className="bg-[#080D1A] text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                      Project Details / Requirements
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your technical goals, existing infrastructure, and expected timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] text-white placeholder-[#5A6A85] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#3B6EF5] to-[#A855F7] hover:opacity-95 shadow-lg shadow-[#3B6EF5]/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
