import { SpiralLogo, LlamaIcon, GoldStamp } from './BrandIcons'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer id="contacto" className="w-full bg-qori-footer text-white relative z-10 overflow-hidden">
      {/* Decorations */}
      <div className="absolute right-8 top-12 opacity-[0.03] pointer-events-none hidden md:block">
        <LlamaIcon size={200} color="#ffffff" />
      </div>

      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          {/* Brand — 5 cols */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <SpiralLogo size={32} color="#D4822A" />
              <div>
                <h2 className="font-brand text-2xl font-extrabold leading-none">
                  Qori<span className="text-qori-green-light">Clean</span>
                </h2>
                <p className="text-[8px] tracking-[0.2em] text-white/30 uppercase mt-0.5 font-semibold">
                  Pureza que Transforma
                </p>
              </div>
            </div>
            <p className="text-white/40 font-light text-sm leading-relaxed mb-5 max-w-xs">
              Jabón sólido artesanal con centro líquido, elaborado con activos naturales
              peruanos. Limpieza consciente y sostenible.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {[
                { label: 'Instagram', path: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> },
                { label: 'Facebook', path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { label: 'TikTok', path: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /> },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-qori-green hover:bg-qori-green/10 transition-all duration-300 group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white/50 group-hover:text-qori-green-light transition-colors">
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-5">
              Explorar
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Producto', href: '#producto' },
                { label: 'Ingredientes', href: '#ingredientes' },
                { label: 'Compromisos', href: '#compromisos' },
                { label: 'Tienda', href: '#tienda' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/45 text-sm hover:text-qori-green-light transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-qori-green transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Stamp — 4 cols */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-5">
              Contacto
            </h4>
            <div className="space-y-3 mb-6">
              <a href="#" className="text-white/45 text-sm hover:text-qori-green-light transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-qori-orange opacity-60">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                @qoriclean
              </a>
              <p className="text-white/45 text-sm flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-qori-orange opacity-60">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                www.qoriclean.pe
              </p>
            </div>
            <div className="mt-auto opacity-25">
              <GoldStamp size={80} />
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/25 font-light">
            &copy; 2026 QoriClean. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-white/15 font-light tracking-widest uppercase">
            Pureza · Bienestar · Sostenibilidad
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
