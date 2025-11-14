import { useState } from 'react'
import { ShoppingBag, ArrowRight, Tag, Percent, Star, Facebook, Twitter, Instagram, Mail } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white grid place-items-center shadow-sm">
              <ShoppingBag size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">ShopSphere</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a className="hover:text-gray-900 transition" href="#categories">Categories</a>
            <a className="hover:text-gray-900 transition" href="#trending">Trending</a>
            <a className="hover:text-gray-900 transition" href="#reviews">Reviews</a>
            <a className="hover:text-gray-900 transition" href="#newsletter">Newsletter</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition">
              Sign In
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition">
              Shop Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm mb-4">
              <Percent size={14} />
              New Season Arrivals
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Elevate Your Everyday Style
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Premium picks from top brands. Minimal design, maximum impact. Discover products curated for quality, comfort, and timeless aesthetics.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#trending" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white font-medium shadow-sm hover:bg-black transition">
                Shop Now <ArrowRight size={18} />
              </a>
              <a href="#sale" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition">
                Explore Deals <Tag size={18} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Star className="text-yellow-500" size={18} /><span>4.9/5 average rating</span></div>
              <div>Free shipping over $50</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gray-200 to-gray-50 overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop"
                alt="Lifestyle hero"
                className="h-full w-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCategories() {
  const categories = [
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYXNoaW9ufGVufDB8MHx8fDE3NjMxMDQyMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]

  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Featured Categories</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href="#trending" className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
              <img src={cat.image} alt={cat.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-medium">{cat.name}</span>
                <span className="text-white/90 text-xs inline-flex items-center gap-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  Shop <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrendingProducts() {
  const [items] = useState([
    { id: 1, name: 'Minimal Sneakers', price: 129, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, name: 'Noise-cancel Headphones', price: 249, rating: 4.7, image: 'https://images.unsplash.com/photo-1636601170757-ac7a5e19b7ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwU25lYWtlcnN8ZW58MHwwfHx8MTc2MzEwNDIxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 3, name: 'Timeless Watch', price: 189, rating: 4.6, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, name: 'Designer Tote', price: 159, rating: 4.5, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, name: 'Smart Lamp', price: 79, rating: 4.4, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, name: 'Silk Scarf', price: 49, rating: 4.3, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop' },
  ])

  return (
    <section id="trending" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Trending Products</h2>
            <p className="text-gray-600 mt-1">Hand-picked items loved by our community</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-gray-700 hover:text-gray-900">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 overflow-hidden transition hover:shadow-md">
              <div className="relative">
                <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <button className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow hover:bg-white transition">
                  New
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <div className="mt-1 text-sm text-gray-600 flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">${item.price}</div>
                    <div className="text-xs text-gray-500">Free returns</div>
                  </div>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-black transition">
                  Add to Cart <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeasonalSaleBanner() {
  return (
    <section id="sale" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 text-white shadow-lg">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
          <div className="relative grid md:grid-cols-2 gap-6 items-center p-8 sm:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">Limited Time</div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Seasonal Sale</h3>
              <p className="mt-2 text-white/90">Upgrade your essentials with up to 50% off on selected styles and gadgets.</p>
            </div>
            <div className="flex md:justify-end">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white text-gray-900 px-5 py-4 shadow-lg">
                <Percent className="text-rose-500" />
                <div>
                  <div className="text-sm text-gray-600">Save up to</div>
                  <div className="text-2xl font-semibold">50% OFF</div>
                </div>
                <button className="ml-4 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-black transition">
                  Grab Deal <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      name: 'Ava Thompson',
      text: 'Beautifully curated selection. The quality is top-notch and shipping was super fast.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Liam Carter',
      text: 'Minimal design and great prices. Felt like shopping at a premium boutique online.',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Sophia Lee',
      text: 'The product pages are clean and the checkout experience was seamless. Love it!',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-500">Verified Buyer</div>
                </div>
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">“{r.text}”</p>
              <div className="mt-3 text-yellow-500 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section id="newsletter" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Get updates and exclusive offers</h3>
              <p className="mt-2 text-gray-600">Join our newsletter for early access to drops, curated picks, and seasonal sales.</p>
            </div>
            <form className="flex w-full items-center gap-3">
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" required placeholder="Enter your email" className="w-full rounded-2xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300" />
              </div>
              <button className="rounded-2xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black transition">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-900 text-white grid place-items-center">
                <ShoppingBag size={16} />
              </div>
              <span className="font-semibold text-gray-900">ShopSphere</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Premium, minimalist shopping experience with curated products and effortless checkout.</p>
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <a href="#" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Instagram size={18} /></a>
              <a href="#" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Twitter size={18} /></a>
              <a href="#" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Facebook size={18} /></a>
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-3">Shop</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
              <li><a href="#" className="hover:text-gray-900">Sale</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-3">Support</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
          <p>Made with care • Premium UI inspired by Apple, Shopify, Zara</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <SeasonalSaleBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
