import { ShoppingBag, Menu, X } from 'lucide-react'
import { SpiralLogo } from './BrandIcons'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'INICIO', href: '#' },
    { label: 'PRODUCTO', href: '#producto' },
    { label: 'INGREDIENTES', href: '#ingredientes' },
    { label: 'COMPROMISOS', href: '#compromisos' },
  ]

  return (
    <nav className={`w-full py-4 px-6 md:px-12 lg:px-16 flex justify-between items-center pointer-events-auto fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled ? 'bg-qori-beige/98 backdrop-blur-3xl shadow-md shadow-qori-dark/5 border-b border-qori-copper/30' : 'bg-qori-beige/60 backdrop-blur-xl border-b border-transparent shadow-sm shadow-black/[0.02]'}`}>
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="relative">
          <SpiralLogo size={36} color="#D4822A" className="group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="flex flex-col">
          <span className="font-brand text-xl font-extrabold text-qori-dark tracking-tight leading-none">
            Qori<span className="text-qori-green">Clean</span>
          </span>
          <span className="text-[8px] tracking-[0.2em] font-medium text-qori-brown/50 uppercase leading-tight mt-0.5 hidden sm:block">
            Pureza que Transforma
          </span>
        </div>
      </a>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-10">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[11px] tracking-[0.18em] font-semibold text-qori-dark/60 hover:text-qori-green transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-qori-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a
          href="#tienda"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-qori-green text-white text-[11px] tracking-[0.12em] font-bold uppercase hover:bg-qori-green-light transition-all duration-300 shimmer-btn shadow-md shadow-qori-green/20"
        >
          <ShoppingBag size={14} strokeWidth={2} />
          Tienda
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-qori-dark p-1.5 rounded-lg hover:bg-qori-dark/5 transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[56px] bg-qori-beige/98 backdrop-blur-2xl z-40 lg:hidden animate-fade-in">
          <ul className="flex flex-col items-center justify-center gap-8 pt-20">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.2em] font-semibold text-qori-dark hover:text-qori-green transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#tienda"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-qori-green text-white text-sm tracking-[0.12em] font-bold uppercase shadow-md"
              >
                <ShoppingBag size={16} strokeWidth={2} />
                Tienda
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
