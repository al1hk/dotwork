import { useState } from 'react';
import { Search, ShoppingBag, Truck, ShoppingCart, Gift, RotateCcw, Play, ArrowRight, Star, ChevronLeft, ChevronRight, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const REVIEWS = [
  {
    quote: "The Nuvola Sofa completely transformed our living space. The craftsmanship is evident in every stitch, and the comfort is unparalleled. It's not just furniture; it's a work of art.",
    author: "Eleanor Vance",
    title: "Interior Designer"
  },
  {
    quote: "Exceptional quality and timeless design. The pieces we acquired have become the focal point of our home. The attention to detail is simply breathtaking.",
    author: "Marcus Sterling",
    title: "Architect"
  },
  {
    quote: "A seamless experience from ordering to delivery. The aesthetic perfectly balances modern minimalism with warm, inviting textures. Highly recommended.",
    author: "Sophia Laurent",
    title: "Creative Director"
  }
];

export default function App() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="px-6 md:px-12 py-6 md:py-8">
        <div className="flex justify-between items-center max-w-[1800px] mx-auto mb-6 md:mb-0">
          {/* Left Links (Desktop) */}
          <nav className="flex-1 hidden md:flex space-x-10 text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500">
            <a href="#home" className="hover:text-black transition-colors">Home</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#products" className="hover:text-black transition-colors">Products</a>
            <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
          </nav>

          {/* Logo */}
          <div className="shrink-0 text-3xl md:text-4xl font-serif font-bold tracking-[0.15em] text-center uppercase text-gray-900">
            dot work
          </div>

          {/* Right Icons */}
          <div className="flex-1 flex justify-end space-x-6 md:space-x-8 items-center text-gray-500">
            <button className="hover:text-black transition-colors flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
              <span className="hidden lg:inline-block">Search</span>
              <Search size={16} strokeWidth={1.5} />
            </button>
            <button className="hover:text-black transition-colors flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
              <span className="hidden lg:inline-block">Cart (0)</span>
              <ShoppingBag size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center space-x-6 text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500 overflow-x-auto">
          <a href="#home" className="hover:text-black transition-colors pb-1">Home</a>
          <a href="#about" className="hover:text-black transition-colors pb-1">About</a>
          <a href="#products" className="hover:text-black transition-colors pb-1">Products</a>
          <a href="#reviews" className="hover:text-black transition-colors pb-1">Reviews</a>
        </nav>
      </header>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300/80"></div>

      {/* Hero Section */}
      <main id="home" className="flex-1 px-6 md:px-12 py-12 md:py-20 max-w-[1800px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Content */}
          <div className="lg:col-span-7 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.15] font-serif font-medium tracking-tight mb-10 uppercase">
              We offer you the best home decor products & items for a dream home
            </h1>
            <button className="border border-black px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Explore Our Products
            </button>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-5 relative h-[500px] sm:h-[600px] lg:h-[750px] w-full mt-12 lg:mt-0">
            {/* Main Large Image */}
            <div className="absolute right-0 bottom-0 w-[85%] h-[100%] rounded-t-full overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern living room with orange chair" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Small Overlapping Image */}
            <div className="absolute left-0 bottom-0 w-[45%] h-[55%] rounded-t-full overflow-hidden border-[10px] border-[#F9F8F6] group cursor-pointer z-10">
              <img 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop" 
                alt="Minimalist bedroom" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1800px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Feature 1 */}
          <div className="flex items-center space-x-5 group cursor-pointer">
            <div className="w-[72px] h-[72px] rounded-full border border-gray-300 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors duration-300">
              <Truck strokeWidth={1} className="text-gray-700 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <div className="font-serif uppercase tracking-widest text-sm text-gray-800 leading-snug group-hover:text-black transition-colors duration-300">
              Quick<br/>Delivery
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center space-x-5 group cursor-pointer">
            <div className="w-[72px] h-[72px] rounded-full border border-gray-300 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors duration-300">
              <ShoppingCart strokeWidth={1} className="text-gray-700 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <div className="font-serif uppercase tracking-widest text-sm text-gray-800 leading-snug group-hover:text-black transition-colors duration-300">
              Pick Up In<br/>Store
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center space-x-5 group cursor-pointer">
            <div className="w-[72px] h-[72px] rounded-full border border-gray-300 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors duration-300">
              <Gift strokeWidth={1} className="text-gray-700 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <div className="font-serif uppercase tracking-widest text-sm text-gray-800 leading-snug group-hover:text-black transition-colors duration-300">
              Special<br/>Packaging
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-center space-x-5 group cursor-pointer">
            <div className="w-[72px] h-[72px] rounded-full border border-gray-300 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-colors duration-300">
              <RotateCcw strokeWidth={1} className="text-gray-700 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <div className="font-serif uppercase tracking-widest text-sm text-gray-800 leading-snug group-hover:text-black transition-colors duration-300">
              Return &<br/>Refund Policy
            </div>
          </div>
        </div>
      </section>

      {/* About Section - The Art of Living Well */}
      <div id="about" className="bg-[#F4F1EB] w-full py-24 md:py-32 mb-24 md:mb-32">
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Image Area */}
            <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0">
              {/* Main Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583847268964-b28ce8f30f62?q=80&w=1000&auto=format&fit=crop" 
                  alt="Bright living room interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Circular Badge */}
              <div className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center z-10">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                  <path id="circlePath" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="transparent" />
                  <text className="text-[10px] tracking-[0.15em] uppercase font-medium fill-gray-800">
                    <textPath href="#circlePath" startOffset="0%">
                      PREMIUM CRAFT • TIMELESS DESIGN • PREMIUM CRAFT • TIMELESS DESIGN • 
                    </textPath>
                  </text>
                </svg>
                <span className="font-serif text-2xl md:text-3xl italic text-[#D4C3B3]">DW</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="max-w-xl pt-12 lg:pt-0">
              <span className="block text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-400 mb-8">
                Our Philosophy
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-10 leading-[1.1]">
                <span className="block text-gray-900 font-normal">The Art of</span>
                <span className="block italic text-[#D4C3B3] font-light relative inline-block pr-6">
                  Living Well.
                  <span className="absolute right-0 top-2 bottom-2 w-[1px] bg-[#D4C3B3]/40 hidden md:block"></span>
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-500 text-[15px] leading-[1.8] font-light mb-12">
                <p>
                  At Dot Work, we believe that furniture is more than just functional objects filling a room. It is the silent architecture of your daily life, the backdrop to your most cherished memories.
                </p>
                <p>
                  Every piece in our collection is born from an obsession with materials and a deep respect for traditional craftsmanship, seamlessly blended with contemporary design sensibilities. We don't just make furniture; we craft heirlooms for the modern era.
                </p>
              </div>
              
              <button className="group flex items-center space-x-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-800">
                <span className="pb-1 border-b border-gray-400 group-hover:border-black transition-colors">Read Our Story</span>
                <ArrowRight size={16} strokeWidth={1} className="transform group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>

          </div>
        </section>
      </div>

      {/* Featured Products Section */}
      <section id="products" className="px-6 md:px-12 pb-24 md:pb-32 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-gray-200 pb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="block text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
              Curated Collection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-gray-900 font-light">
              Featured <span className="italic text-[#D4C3B3]">Pieces</span>
            </h2>
          </div>
          <a href="#" className="flex items-center space-x-3 text-xs font-bold tracking-[0.2em] uppercase hover:text-gray-500 transition-colors group">
            <span className="pb-1 border-b border-gray-400 group-hover:border-black transition-colors">Shop All</span>
            <ArrowRight size={16} strokeWidth={1} className="transform group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {/* Product 1 */}
          <div className="group cursor-pointer flex flex-col relative">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-gray-900">
              New
            </div>
            <div className="relative aspect-[3/4] bg-[#F9F8F6] mb-8 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                alt="Black Sofa Set" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Quick Add Button Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <button className="w-full bg-white/95 backdrop-blur-md text-black text-xs font-bold tracking-[0.15em] uppercase py-4 hover:bg-black hover:text-white transition-colors duration-300">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl tracking-wide text-gray-900 mb-2">Black Sofa Set</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400">Living Room</p>
              </div>
              <span className="text-sm text-gray-900 font-light">$1,200</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group cursor-pointer flex flex-col relative">
            <div className="relative aspect-[3/4] bg-[#F9F8F6] mb-8 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop" 
                alt="Circle Dining Table" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Quick Add Button Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <button className="w-full bg-white/95 backdrop-blur-md text-black text-xs font-bold tracking-[0.15em] uppercase py-4 hover:bg-black hover:text-white transition-colors duration-300">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl tracking-wide text-gray-900 mb-2">Circle Dining Table</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400">Dining</p>
              </div>
              <span className="text-sm text-gray-900 font-light">$850</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group cursor-pointer flex flex-col relative sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 w-full">
            <div className="relative aspect-[3/4] bg-[#F9F8F6] mb-8 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=800&auto=format&fit=crop" 
                alt="Minimal Sofa" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Quick Add Button Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <button className="w-full bg-white/95 backdrop-blur-md text-black text-xs font-bold tracking-[0.15em] uppercase py-4 hover:bg-black hover:text-white transition-colors duration-300">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl tracking-wide text-gray-900 mb-2">Minimal Sofa</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400">Living Room</p>
              </div>
              <span className="text-sm text-gray-900 font-light">$1,400</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Testimonial Section */}
      <section id="reviews" className="bg-[#EBE8E2] py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
        {/* Giant Quote Mark */}
        <div className="absolute top-10 left-6 md:top-20 md:left-24 text-[12rem] md:text-[20rem] font-serif leading-none text-white select-none pointer-events-none opacity-80">
          "
        </div>
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10 min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-serif italic leading-[1.4] md:leading-[1.5] text-[#2A2A2A] mb-12 max-w-4xl mx-auto">
                "{REVIEWS[currentReview].quote}"
              </h2>
              
              <div className="flex flex-col items-center mb-16">
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-[#2A2A2A] mb-2">{REVIEWS[currentReview].author}</span>
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-500">{REVIEWS[currentReview].title}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Review Carousel Controls */}
          <div className="flex justify-center items-center space-x-8">
            <button onClick={prevReview} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#2A2A2A] hover:border-[#2A2A2A] transition-all duration-300">
              <ChevronLeft size={16} strokeWidth={1} />
            </button>
            
            <div className="flex items-center space-x-3">
              {REVIEWS.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`transition-all duration-300 rounded-full ${currentReview === idx ? 'w-8 h-[3px] bg-[#2A2A2A]' : 'w-1.5 h-1.5 bg-gray-400 hover:bg-gray-600'}`}
                ></button>
              ))}
            </div>

            <button onClick={nextReview} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#2A2A2A] hover:border-[#2A2A2A] transition-all duration-300">
              <ChevronRight size={16} strokeWidth={1} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#141414] text-[#F4F1EB] pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-3xl tracking-widest uppercase mb-8">Dot Work</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md mb-8">
                Curating exceptional pieces for the modern sanctuary. Elevate your living space with our collection of timeless, minimalist design.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase font-bold mb-8 text-white">Explore</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Living Room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bedroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lighting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase font-bold mb-8 text-white">Support</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-500 font-light">
            <p>&copy; {new Date().getFullYear()} Dot Work. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={16} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={16} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={16} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
