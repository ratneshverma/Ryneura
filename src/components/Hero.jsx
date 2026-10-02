import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Cpu, Activity, ShieldCheck, Zap } from 'lucide-react'
import { FLOATING_TAGS, METRICS } from '../data/constants'

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="overview" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden dot-grid">
      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-[#A855F7]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#3B6EF5]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-xs font-semibold text-[#00D4FF] shadow-sm shadow-[#00D4FF]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
              <span>AI-Powered Solutions · Next-Gen Intelligence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Building the Future with{' '}
              <span className="gradient-text">Intelligent Technology</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[#A0B0CC] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">Intelligence, Reimagined.</strong> Ryneura engineers
              end-to-end AI, Machine Learning, Computer Vision systems, and SaaS products — transforming complex
              algorithms into robust, enterprise-grade software.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('#services')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#3B6EF5] to-[#A855F7] hover:opacity-95 shadow-lg shadow-[#3B6EF5]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-[#F0F6FF] bg-[#0D1526]/80 hover:bg-[#0D1526] border border-[#1E2D45] hover:border-[#3B6EF5]/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Talk to Us
              </button>
            </div>

            {/* Technology stack pill bar */}
            <div className="pt-6 border-t border-[#1E2D45]/60 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#A0B0CC]">
              <span className="text-[#5A6A85] uppercase tracking-wider text-[11px] font-semibold">Tech Stacks:</span>
              {['PyTorch', 'TensorFlow', 'OpenCV', 'React', 'FastAPI', 'AWS / GCP', 'Docker', 'CUDA'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-[#0D1526] border border-[#1E2D45] text-[#A0B0CC]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: AI Console & Live Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Tags */}
            {FLOATING_TAGS.map((tag, idx) => {
              const positions = [
                '-top-4 -left-4',
                '-top-6 -right-2',
                '-bottom-5 -left-2',
                '-bottom-6 -right-4',
              ]
              return (
                <motion.div
                  key={tag.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: tag.delay, ease: 'easeInOut' }}
                  className={`absolute ${positions[idx % 4]} z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-[#00D4FF]/30 text-xs font-medium text-white shadow-md shadow-[#080D1A]`}
                >
                  <span>{tag.label}</span>
                </motion.div>
              )
            })}

            {/* Glassmorphic Neural Hub Container */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative border border-[#1E2D45] shadow-2xl shadow-[#080D1A] overflow-hidden">
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#00D4FF]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2D45]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#00E5A0]" />
                  <span className="text-xs font-mono text-[#5A6A85] ml-2">ryneura-engine v2.4</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/20 text-[11px] font-mono text-[#00E5A0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-ping" />
                  ONLINE
                </div>
              </div>

              {/* Neural Topology Preview */}
              <div className="my-5 p-4 rounded-xl bg-[#080D1A]/70 border border-[#1E2D45] relative">
                <div className="flex items-center justify-between text-xs text-[#A0B0CC] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[#00D4FF]" /> Neural Pipeline
                  </span>
                  <span className="text-[#00D4FF] font-mono">Inference Active</span>
                </div>

                {/* SVG Visualizer */}
                <div className="h-28 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 320 90">
                    <defs>
                      <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="50%" stopColor="#3B6EF5" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>

                    {/* Connection lines */}
                    <line x1="30" y1="20" x2="110" y2="45" stroke="#1E2D45" strokeWidth="2" />
                    <line x1="30" y1="70" x2="110" y2="45" stroke="#1E2D45" strokeWidth="2" />
                    <line x1="110" y1="45" x2="200" y2="25" stroke="#3B6EF5" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="110" y1="45" x2="200" y2="65" stroke="#3B6EF5" strokeWidth="2" strokeDasharray="4 2" />
                    <line x1="200" y1="25" x2="290" y2="45" stroke="#A855F7" strokeWidth="2" />
                    <line x1="200" y1="65" x2="290" y2="45" stroke="#A855F7" strokeWidth="2" />

                    {/* Nodes */}
                    <circle cx="30" cy="20" r="7" fill="#00D4FF" className="animate-pulse" />
                    <circle cx="30" cy="70" r="7" fill="#00D4FF" />
                    <circle cx="110" cy="45" r="9" fill="#3B6EF5" />
                    <circle cx="200" cy="25" r="8" fill="#8B5CF6" />
                    <circle cx="200" cy="65" r="8" fill="#8B5CF6" />
                    <circle cx="290" cy="45" r="10" fill="#A855F7" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-[#5A6A85] pt-1">
                  <span>Input: Sensor / Stream</span>
                  <span>Latency: 14ms</span>
                  <span>Target: Edge API</span>
                </div>
              </div>

              {/* Metric stats grid */}
              <div className="grid grid-cols-3 gap-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="p-3 rounded-lg bg-[#080D1A]/50 border border-[#1E2D45]">
                    <div className="text-lg font-bold font-heading text-white">{metric.value}</div>
                    <div className="text-[11px] text-[#A0B0CC] font-medium truncate">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
