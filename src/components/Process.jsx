import React from 'react'
import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../data/constants'
import { Check } from 'lucide-react'

export default function Process() {
  return (
    <section className="py-24 bg-[#0D1526]/50 border-y border-[#1E2D45]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            From Idea to <span className="gradient-text">Intelligent Product</span>
          </h2>
          <p className="text-[#A0B0CC] text-base sm:text-lg">
            A disciplined, milestone-driven framework ensuring your AI roadmap moves rapidly from conceptual architecture to reliable production.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-6 rounded-2xl bg-[#080D1A]/90 border border-[#1E2D45] flex flex-col justify-between group hover:border-[#00D4FF]/40 transition-all duration-300"
            >
              <div>
                {/* Step badge */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D1526] to-[#080D1A] border border-[#00D4FF]/40 flex items-center justify-center font-mono font-bold text-lg text-[#00D4FF] shadow-sm shadow-[#00D4FF]/20 group-hover:scale-105 transition-transform mb-6">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#A0B0CC] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2D45]/40 flex items-center gap-2 text-xs text-[#00E5A0]">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Milestones</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
