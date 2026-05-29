import { motion } from 'framer-motion'
import { LeafPlantIcon } from './BrandIcons'

const botanicals = [
  { name: 'Tara', desc: 'Poderoso antioxidante natural, conocido como el "oro verde" de los Incas.', icon: '🌿' },
  { name: 'Matico', desc: 'Propiedades purificantes y cicatrizantes que limpian profundamente sin resecar.', icon: '🍃' },
  { name: 'Aloe Vera', desc: 'Núcleo interno de gel hidratante que calma y refresca durante el uso.', icon: '💧' },
  { name: 'Maca', desc: 'Revitaliza y aporta luminosidad, estimulando la regeneración celular.', icon: '⚡' },
  { name: 'Sacha Inchi', desc: 'Rico en Omega 3, 6 y 9. Mantiene la barrera protectora de la piel.', icon: '🌰' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const Botanicals = () => {
  return (
    <section id="ingredientes" className="py-24 md:py-32 w-full flex flex-col items-center px-6 bg-qori-beige relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] left-[-100px] w-[400px] h-[400px] rounded-full bg-qori-green/[0.02] blur-[100px] pointer-events-none" />

      {/* Divider */}
      <div className="section-divider mb-14" />

      {/* Header */}
      <motion.div
        className="text-center mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <LeafPlantIcon size={20} className="opacity-50" />
          <p className="text-[11px] tracking-[0.3em] font-bold text-qori-green uppercase">
            Ingredientes Naturales Peruanos
          </p>
          <LeafPlantIcon size={20} className="opacity-50" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-qori-dark mb-5 leading-tight">
          La Esencia de
          <span className="italic font-medium text-qori-green"> la Tierra</span>
        </h2>
        <p className="text-qori-brown/55 text-base md:text-lg leading-relaxed">
          Cuidadosamente seleccionados de la biodiversidad peruana para nutrir
          y proteger tu piel de manera responsable.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-5 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-40px" }}
      >
        {botanicals.map((b, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative bg-white/70 backdrop-blur-sm p-7 rounded-2xl flex flex-col items-center text-center w-52 md:w-56 card-hover border border-qori-dark/[0.04] hover:border-qori-green/20"
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-qori-green/[0.04] rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-[1]" />

            {/* Emoji icon */}
            <div className="w-14 h-14 rounded-2xl bg-qori-cream group-hover:bg-qori-green/10 mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 text-2xl">
              {b.icon}
            </div>

            {/* Name */}
            <h4 className="font-serif text-lg font-bold text-qori-dark mb-2 tracking-tight">
              {b.name}
            </h4>

            {/* Description */}
            <p className="text-[12px] text-qori-brown/50 leading-relaxed">
              {b.desc}
            </p>

            {/* Bottom accent */}
            <div className="w-0 group-hover:w-8 h-[2px] bg-qori-green mt-4 transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Botanicals
