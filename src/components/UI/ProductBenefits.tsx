import { motion } from 'framer-motion'
import { LeafNaturalIcon, WaterDropIcon, RecycleZeroIcon, PeruMapIcon, LlamaIcon } from './BrandIcons'

const benefits = [
  {
    icon: <LeafNaturalIcon size={26} />,
    title: 'Natural',
    desc: 'Ingredientes de origen peruano.',
    color: 'green-icon-circle',
  },
  {
    icon: <WaterDropIcon size={26} />,
    title: 'Hidrata',
    desc: 'Limpia y regenera tu piel.',
    color: 'green-icon-circle',
  },
  {
    icon: <RecycleZeroIcon size={26} />,
    title: 'Cero Residuos',
    desc: 'Producto y empaque compostables.',
    color: 'green-icon-circle',
  },
  {
    icon: <PeruMapIcon size={26} />,
    title: 'Hecho en Perú',
    desc: 'Valoramos nuestra biodiversidad.',
    color: 'orange-icon-circle',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const ProductBenefits = () => {
  return (
    <section id="producto" className="w-full py-20 md:py-28 bg-qori-cream relative z-10 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-qori-copper/40" />
            <p className="text-[11px] tracking-[0.3em] font-bold text-qori-orange uppercase">
              Presentación del Producto
            </p>
            <div className="h-[1px] w-10 bg-qori-copper/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-qori-dark leading-tight">
            Un jabón que <span className="italic gradient-text-orange">transforma</span> tu rutina
          </h2>
        </div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className={`${b.color} mb-5`}>
                {b.icon}
              </div>
              {/* Title */}
              <h4 className="font-bold text-sm md:text-base text-qori-dark uppercase tracking-wide mb-2">
                {i === 3 ? (
                  <>Hecho en <span className="text-qori-orange">Perú</span></>
                ) : (
                  <span className="text-qori-green">{b.title}</span>
                )}
              </h4>
              {/* Description */}
              <p className="text-[12px] md:text-[13px] text-qori-brown/55 leading-relaxed max-w-[180px]">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl border border-qori-dark/[0.04] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-qori-orange/10 flex items-center justify-center shrink-0">
              <LlamaIcon size={42} color="#D4822A" />
            </div>
            <div>
              <p className="text-sm md:text-base text-qori-dark font-medium">
                Libre de parabenos, sulfatos y químicos agresivos.
              </p>
              <p className="text-sm font-bold text-qori-green mt-0.5">
                Bueno para ti, bueno para el planeta.
              </p>
            </div>
          </div>
          <a
            href="#ingredientes"
            className="shrink-0 px-6 py-2.5 rounded-full border-2 border-qori-green/20 text-qori-green text-[11px] font-bold tracking-widest uppercase hover:bg-qori-green hover:text-white transition-all duration-300"
          >
            Ver Ingredientes
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductBenefits
