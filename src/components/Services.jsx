import React from 'react'
import { motion } from 'framer-motion'
import { SERVICES } from '../data/constants'
import { Brain, Network, Eye, Layers, Sparkles, Cloud, ArrowUpRight } from 'lucide-react'

export default function Services() {
  const iconComponents = {
    Brain: Brain,
    Network: Network,
    Eye: Eye,
    Layers: Layers,
    Sparkles: Sparkles,
    Cloud: Cloud,
  }

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-28 relative">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#3B6EF5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Comprehensive <span className="gradient-text">AI & Software Services</span>
          </h2>
          <p className="text-[#A0B0CC] text-base sm:text-lg pt-1">
            From research proof-of-concept to resilient multi-tenant SaaS architecture — we power your product lifecycle
            with specialized engineering.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((srv, idx) => {
            const Icon = iconComponents[srv.icon] || Brain
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-7 relative group flex flex-col justify-between border border-[#1E2D45] hover:border-[#3B6EF5]/60 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon & Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${srv.iconBg} flex items-center justify-center text-white shadow-md shadow-[#080D1A] group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#5A6A85]">0{srv.id}</span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#A0B0CC] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Bottom Tags & Action */}
                <div className="mt-6 pt-5 border-t border-[#1E2D45]/60 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#080D1A] text-[#A0B0CC] border border-[#1E2D45]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors group/btn pt-1"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
