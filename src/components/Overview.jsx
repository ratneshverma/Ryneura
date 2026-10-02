import React from 'react'
import { motion } from 'framer-motion'
import { STATS, WHY_US } from '../data/constants'
import { CheckCircle2, Shield, Rocket, Cog, Microscope } from 'lucide-react'

export default function Overview() {
  const iconMap = {
    '🔬': Microscope,
    '⚙️': Cog,
    '🚀': Rocket,
    '🔒': Shield,
  }

  return (
    <section className="py-24 bg-[#0D1526]/60 relative border-y border-[#1E2D45]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Intelligence at the Core of <span className="gradient-text">Everything We Build</span>
          </h2>
          <p className="text-[#A0B0CC] text-base sm:text-lg leading-relaxed pt-2">
            Ryneura operates at the intersection of breakthrough machine learning and pragmatic software engineering.
            From generative AI copilots and real-time computer vision to scalable multi-tenant cloud platforms, we craft
            digital products designed to redefine performance.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center relative group hover:border-[#3B6EF5]/50 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white group-hover:text-[#00D4FF] transition-colors">
                {stat.value}
                <span className="text-[#00D4FF]">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-[#A0B0CC] font-medium">{stat.label}</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#3B6EF5] mx-auto rounded-full group-hover:w-20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-[#080D1A]/80 border border-[#1E2D45] hover:border-[#00D4FF]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#A0B0CC] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
