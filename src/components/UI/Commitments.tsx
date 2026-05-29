import { motion } from 'framer-motion'
import { BunnyIcon, FlaskIcon, HeartIcon, LlamaIcon, GoldStamp } from './BrandIcons'
import { Leaf, Recycle, Globe, Sparkles } from 'lucide-react'

const commitmentCards = [
  {
    icon: <BunnyIcon size={38} />,
    label: 'Cruelty Free',
  },
  {
    icon: <FlaskIcon size={38} />,
    label: 'Sin Químicos Tóxicos',
  },
  {
    icon: <Leaf size={34} strokeWidth={1.5} />,
    label: '100% Natural',
  },
  {
    icon: <Recycle size={34} strokeWidth={1.5} />,
    label: 'Empaque Compostable',
  },
]

const sustainabilityPoints = [
  {
    icon: <Globe size={22} strokeWidth={1.8} className="text-qori-green" />,
    title: 'Materias primas naturales y locales',
    desc: 'Reducimos la dependencia de insumos importados y la huella de carbono.',
  },
  {
    icon: <Leaf size={22} strokeWidth={1.8} className="text-qori-green" />,
    title: 'Biodiversidad peruana',
    desc: 'Fortalecemos el biocomercio con ingredientes nativos y sostenibles.',
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.8} className="text-qori-green" />,
    title: 'Enfoque "Cero Residuos"',
    desc: 'Integramos el contenido y el envase en un solo producto compostable.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const Commitments = () => {
  return (
    <section id="compromisos" className="w-full py-24 md:py-32 bg-qori-sand relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute right-[-20px] bottom-8 opacity-[0.03] pointer-events-none hidden md:block">
        <LlamaIcon size={300} color="#2C2C2C" />
      </div>
      <div className="absolute left-8 top-12 pointer-events-none hidden lg:block">
        <GoldStamp size={90} className="opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* ── Section 1: Compromisos ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mb-24">
          {/* Left column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.3em] font-bold text-qori-green uppercase mb-3">
              Nuestros Compromisos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-qori-dark leading-tight mb-5">
              Comprometidos con el
              <span className="block italic font-medium text-qori-green">planeta y la belleza responsable.</span>
            </h2>
            <p className="text-qori-brown/55 text-base md:text-lg mb-8 leading-relaxed">
              Creemos que el lujo real no debe costar el planeta. Nuestro empaque es totalmente compostable,
              impreso sobre papel kraft, y formulado sin crueldad animal.
            </p>

            {/* Side badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-qori-green/8 border border-qori-green/15 text-[10px] tracking-widest uppercase font-bold text-qori-green">
                <Leaf size={14} strokeWidth={2} />
                Ecoamigable
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-qori-orange/8 border border-qori-orange/15 text-[10px] tracking-widest uppercase font-bold text-qori-orange">
                <HeartIcon size={14} />
                Responsable
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-qori-green/8 border border-qori-green/15 text-[10px] tracking-widest uppercase font-bold text-qori-green">
                <Sparkles size={14} strokeWidth={2} />
                Consciente
              </div>
            </div>

            {/* Modo de Uso */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 border border-qori-dark/[0.04]">
              <h4 className="text-[11px] font-bold tracking-[0.25em] text-qori-dark mb-5 uppercase flex items-center gap-2">
                <span className="w-5 h-[2px] bg-qori-orange rounded-full" />
                Modo de Uso
              </h4>
              <ul className="space-y-4">
                {[
                  'Humedecer el jabón y frotar suavemente sobre la piel hasta generar espuma.',
                  'Durante el uso, se descubre el núcleo interno de gel hidratante.',
                  'Enjuagar con abundante agua, conservar en un lugar seco después de cada uso.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-qori-green/10 text-qori-green text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-qori-brown/60 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column — cards */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-5 content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-40px" }}
          >
            {commitmentCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-8 flex flex-col items-center justify-center text-center card-hover border border-qori-dark/[0.04] hover:border-qori-green/15 h-44 md:h-52"
              >
                <div className="mb-4 text-qori-dark group-hover:text-qori-green transition-colors duration-300 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <p className="font-bold text-qori-dark text-[13px] tracking-wide leading-tight">
                  {card.label}
                </p>
                <div className="w-0 group-hover:w-6 h-[2px] bg-qori-green mt-3 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Section 2: Sostenibilidad ── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] font-bold text-qori-orange uppercase mb-3">
              Desarrollo Sostenible
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-qori-dark leading-tight">
              Economía <span className="italic text-qori-green">Circular</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sustainabilityPoints.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 border border-qori-dark/[0.04] card-hover hover:border-qori-green/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              >
                <div className="w-10 h-10 rounded-xl bg-qori-green/8 flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <h4 className="font-bold text-sm text-qori-dark mb-2 uppercase tracking-wide">
                  {point.title}
                </h4>
                <p className="text-[13px] text-qori-brown/50 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom banner */}
          <div className="mt-10 values-bar rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <p className="text-sm md:text-base font-medium text-center md:text-left">
              <span className="font-bold">Fórmula Consciente:</span> Libre de parabenos, sulfatos y químicos agresivos.
              <span className="opacity-70 block md:inline md:ml-1">Segura para tu piel y para el entorno.</span>
            </p>
            <div className="flex items-center gap-2 shrink-0 text-[10px] tracking-widest uppercase font-bold opacity-80">
              <Leaf size={14} strokeWidth={2} />
              Pureza que Transforma
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Commitments
