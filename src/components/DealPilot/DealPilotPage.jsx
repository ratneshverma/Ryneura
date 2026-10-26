import React, { useState, useEffect } from 'react'
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, Loader2, RefreshCw, ShoppingCart, Sparkles } from 'lucide-react'
import ProductCard from './ProductCard'

const BACKEND_API = 'https://dealpilot-stap.onrender.com/api/v1/products'

export default function DealPilotPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Filters & Pagination State
  const [platform, setPlatform] = useState('all')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('newest')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)

  const categories = ['All', 'Electronics', 'Apparel', 'Toys', 'Furniture']
  const platforms = [
    { label: 'All Platforms', value: 'all' },
    { label: 'Amazon India', value: 'amazon' },
    { label: 'Flipkart', value: 'flipkart' },
  ]

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      let url = `${BACKEND_API}?page=${page}&limit=24&sort=${sort}`
      if (platform !== 'all') url += `&platform=${platform}`
      if (category !== 'all') url += `&category=${category}`
      if (searchQuery.trim()) url += `&search=${encodeURIComponent(searchQuery.trim())}`

      const res = await fetch(url)
      if (!res.ok) throw new Error(`Server returned HTTP ${res.status}`)
      const data = await res.json()

      if (data.status === 'success') {
        setProducts(data.products || [])
        setTotalPages(data.totalPages || 1)
        setTotalProducts(data.total || 0)
      } else {
        throw new Error('Failed to load products')
      }
    } catch (err) {
      console.error('DealPilot API error:', err)
      setError('Could not connect to DealPilot backend engine. Make sure uvicorn is running at http://127.0.0.1:8000.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [platform, category, sort, searchQuery, page])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(searchInput)
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-[#080D1A] text-[#F0F6FF] pt-28 pb-20">
      {/* Background glow highlights */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-[#3B6EF5]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            DealPilot Affiliate Intelligence
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Curated <span className="gradient-text">Affiliate Deals</span>
          </h1>
          <p className="text-[#A0B0CC] text-base sm:text-lg">
            Browse verified products tracked across Amazon and Flipkart with pre-built affiliate tracking links. Click any deal to buy with instant commission routing.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card rounded-2xl p-6 mb-10 border border-[#1E2D45] space-y-6 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

            {/* Search Form */}
            <form onSubmit={handleSearchSubmit} className="w-full lg:w-96 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6A85]" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products or models..."
                className="w-full bg-[#080D1A] border border-[#1E2D45] rounded-xl pl-10 pr-24 py-2.5 text-sm text-white placeholder-[#5A6A85] focus:outline-none focus:border-[#00D4FF] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-[#3B6EF5] text-white text-xs font-medium hover:bg-[#2563EB] transition-colors"
              >
                Search
              </button>
            </form>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <span className="text-xs text-[#A0B0CC] flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                className="bg-[#080D1A] border border-[#1E2D45] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
              >
                <option value="newest">Newest Tracked</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Platform & Category Filters */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#1E2D45]/60 justify-between items-start sm:items-center">

            {/* Platforms */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#5A6A85] font-medium mr-1 uppercase tracking-wider">Platform:</span>
              {platforms.map((p) => (
                <button
                  key={p.value}
                  onClick={() => { setPlatform(p.value); setPage(1); }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    platform === p.value
                      ? 'bg-[#3B6EF5] text-white shadow-md shadow-[#3B6EF5]/30'
                      : 'bg-[#080D1A] text-[#A0B0CC] border border-[#1E2D45] hover:border-[#3B6EF5]/40'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#5A6A85] font-medium mr-1 uppercase tracking-wider">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat.toLowerCase()); setPage(1); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    category === cat.toLowerCase()
                      ? 'bg-gradient-to-r from-[#00D4FF] to-[#3B6EF5] text-white shadow-md shadow-[#00D4FF]/20'
                      : 'bg-[#080D1A] text-[#A0B0CC] border border-[#1E2D45] hover:border-[#00D4FF]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 px-2">
          <p className="text-sm text-[#A0B0CC]">
            Showing <span className="text-white font-semibold">{products.length}</span> of <span className="text-white font-semibold">{totalProducts}</span> tracked products
          </p>
          <button
            onClick={fetchProducts}
            className="inline-flex items-center gap-1.5 text-xs text-[#00D4FF] hover:underline"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh Deals
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-24 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-10 h-10 text-[#00D4FF] animate-spin" />
            <p className="text-sm text-[#A0B0CC]">Fetching live database products...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="glass-card rounded-2xl p-8 text-center max-w-xl mx-auto border border-red-500/30 bg-red-950/20">
            <p className="text-red-400 font-medium text-sm mb-4">{error}</p>
            <button
              onClick={fetchProducts}
              className="px-5 py-2.5 rounded-xl bg-[#3B6EF5] text-white text-xs font-medium shadow-md hover:bg-[#2563EB] transition-colors"
            >
              Retry Connection
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="glass-card rounded-2xl p-12 text-center max-w-xl mx-auto border border-[#1E2D45]">
            <ShoppingCart className="w-12 h-12 text-[#5A6A85] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No products found</h3>
            <p className="text-sm text-[#A0B0CC] mb-6">No products match your current filter criteria or the database is empty.</p>
            <button
              onClick={() => { setPlatform('all'); setCategory('all'); setSearchQuery(''); setSearchInput(''); setPage(1); }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#3B6EF5] text-white text-xs font-medium shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={`${product.quick_id}-${product.source_platform}`} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#0D1526] border border-[#1E2D45] text-sm text-[#F0F6FF] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#3B6EF5] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <span className="text-sm text-[#A0B0CC]">
              Page <strong className="text-white">{page}</strong> of <strong className="text-white">{totalPages}</strong>
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#0D1526] border border-[#1E2D45] text-sm text-[#F0F6FF] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#3B6EF5] transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
