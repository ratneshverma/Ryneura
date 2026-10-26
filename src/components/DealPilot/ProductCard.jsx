import React from 'react'
import { ExternalLink, ShoppingBag } from 'lucide-react'

export default function ProductCard({ product }) {
  const isAmazon = product.source_platform.toLowerCase().includes('amazon')
  const platformName = isAmazon ? 'Amazon India' : 'Flipkart'
  const badgeBg = isAmazon ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-blue-500/10 text-blue-400 border-blue-500/30'

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)
  }

  return (
    <div className="glass-card rounded-2xl p-6 relative group flex flex-col justify-between border border-[#1E2D45] hover:border-[#3B6EF5]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#3B6EF5]/20">
      <div>
        {/* Top Header: Platform Badge & ID */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeBg} flex items-center gap-1.5`}>
            <ShoppingBag className="w-3 h-3" />
            {platformName}
          </span>
          <span className="text-[11px] font-mono text-[#5A6A85]">
            ID: {product.quick_id}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-base font-semibold text-white group-hover:text-[#00D4FF] transition-colors line-clamp-2 leading-snug">
          {product.title}
        </h3>

        {product.model_name && (
          <p className="mt-1.5 text-xs text-[#A0B0CC] font-mono truncate">
            Model: {product.model_name}
          </p>
        )}
      </div>

      {/* Bottom Section: Price & Affiliate CTA */}
      <div className="mt-6 pt-4 border-t border-[#1E2D45]/60 flex items-center justify-between gap-4">
        <div>
          <span className="text-[11px] text-[#5A6A85] block uppercase tracking-wider">Best Price</span>
          <span className="text-2xl font-bold font-heading text-white tracking-tight">
            {formatPrice(product.price)}
          </span>
        </div>

        <a
          href={product.affiliate_url || product.product_url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#3B6EF5] to-[#A855F7] text-white font-medium text-xs shadow-md shadow-[#3B6EF5]/30 hover:opacity-90 transition-opacity"
        >
          <span>View Deal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
