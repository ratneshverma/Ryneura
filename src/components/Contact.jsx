import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICE_DROPDOWN, CONTACT_INFO } from '../data/constants'
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, MessageCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_DROPDOWN[0],
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Build WhatsApp text from current form state or defaults
  const buildWhatsAppMessage = () => {
    let text = `*New Inquiry for Ryneura*\n`
    text += `👤 *Name:* ${formData.name || 'Not provided'}\n`
    text += `📧 *Email:* ${formData.email || 'Not provided'}\n`
    if (formData.phone) text += `📱 *Phone:* ${formData.phone}\n`
    text += `🎯 *Service:* ${formData.service}\n`
    text += `📝 *Project Details:*\n${formData.message || 'I would like to discuss a project with Ryneura.'}`
    return encodeURIComponent(text)
  }

  const handleWhatsAppDirect = (e) => {
    e.preventDefault()
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`
    window.open(url, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    try {
      // Free direct email dispatch to meetratnesh@gmail.com via FormSubmit AJAX API
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          service: formData.service,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name} - Ryneura`,
          _template: 'table',
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Fallback: mailto client if service blocked
        window.location.href = `mailto:${CONTACT_INFO.email}?subject=Project Inquiry - ${encodeURIComponent(
          formData.service
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        )}`
        setSubmitted(true)
      }
    } catch (err) {
      // In case of network error, launch mailto so submission is never lost
      window.location.href = `mailto:${CONTACT_INFO.email}?subject=Project Inquiry - ${encodeURIComponent(
        formData.service
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
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
              Have an AI project, machine learning pipeline, or software idea in mind? Reach out directly to Ratnesh.
              Fill out the form or reach out immediately on WhatsApp for a fast response.
            </p>

            {/* Contact details list */}
            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="flex items-center gap-3.5 text-[#F0F6FF]">
                <div className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#00D4FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6A85] font-mono uppercase">Direct Inquiries</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-medium hover:text-[#00D4FF] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp & Call */}
              <div className="flex items-center gap-3.5 text-[#F0F6FF]">
                <div className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6A85] font-mono uppercase">WhatsApp / Phone</div>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                      CONTACT_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#25D366] hover:underline flex items-center gap-1.5"
                  >
                    {CONTACT_INFO.phone}
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#25D366]/20 font-mono text-[#25D366]">
                      Instant Reply
                    </span>
                  </a>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-center gap-3.5 text-[#F0F6FF]">
                <div className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center text-[#A855F7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A6A85] font-mono uppercase">Location</div>
                  <span className="text-sm font-medium">India · Remote-first Global Delivery</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-6 border-t border-[#1E2D45]/70">
              <div className="text-xs text-[#5A6A85] font-mono uppercase mb-3">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#0D1526] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/10 transition-all"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
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
                  href="https://github.com/ratneshverma"
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
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/30 text-[#00E5A0] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank you for reaching out!</h3>
                  <p className="text-[#A0B0CC] max-w-md mx-auto text-sm leading-relaxed">
                    Your inquiry has been submitted and sent to{' '}
                    <strong className="text-white">{CONTACT_INFO.email}</strong>. Ratnesh will review your requirements
                    and reply shortly.
                  </p>

                  {/* Immediate WhatsApp Prompt */}
                  <div className="pt-4 max-w-md mx-auto bg-[#0D1526] border border-[#25D366]/30 p-4 rounded-xl text-left space-y-2">
                    <div className="text-xs font-semibold text-[#25D366] flex items-center gap-1.5 uppercase tracking-wider">
                      <MessageCircle className="w-4 h-4" /> Want an immediate reply?
                    </div>
                    <p className="text-xs text-[#A0B0CC]">
                      Send these details directly to Ratnesh's WhatsApp for an instant response.
                    </p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${buildWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-lg text-xs font-semibold bg-[#25D366] hover:bg-[#22bf5b] text-white transition-all shadow-md shadow-[#25D366]/20"
                    >
                      <span>Open in WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: SERVICE_DROPDOWN[0],
                        message: '',
                      })
                    }}
                    className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold bg-[#0D1526] border border-[#1E2D45] text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                        Full Name *
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
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] text-white placeholder-[#5A6A85] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] text-white placeholder-[#5A6A85] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                      />
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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A0B0CC] uppercase tracking-wider mb-2">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project goals, technical expectations, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] text-white placeholder-[#5A6A85] text-sm focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Primary Email Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#3B6EF5] to-[#A855F7] hover:opacity-95 shadow-lg shadow-[#3B6EF5]/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-4 h-4" />
                    </button>

                    {/* Instant WhatsApp Action */}
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#5A6A85] text-center pt-1">
                    Direct inquiries go to <span className="text-[#A0B0CC]">{CONTACT_INFO.email}</span> &{' '}
                    <span className="text-[#A0B0CC]">{CONTACT_INFO.phone}</span>. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
