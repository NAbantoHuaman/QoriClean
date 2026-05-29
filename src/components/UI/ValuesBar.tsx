import { Leaf, Heart, Recycle, MapPin } from 'lucide-react'
import { SpiralLogo } from './BrandIcons'

const values = [
  { icon: <Leaf size={16} strokeWidth={2} />, label: 'Ecoamigable' },
  { icon: <Heart size={16} strokeWidth={2} />, label: 'Responsable' },
  { icon: <Recycle size={16} strokeWidth={2} />, label: 'Consciente' },
  { icon: <MapPin size={16} strokeWidth={2} />, label: 'Hecho en Perú' },
]

const ValuesBar = () => {
  return (
    <div className="w-full bg-qori-dark py-5 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Values */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70">
              <span className="text-qori-green">{v.icon}</span>
              <span className="text-[10px] tracking-[0.18em] uppercase font-bold">{v.label}</span>
            </div>
          ))}
        </div>

        {/* Right side tagline */}
        <div className="flex items-center gap-2 text-white/50">
          <SpiralLogo size={18} color="#D4AF37" />
          <span className="text-[10px] tracking-[0.15em] font-medium italic">
            Pureza que transforma el cuidado personal y nuestro planeta.
          </span>
        </div>
      </div>
    </div>
  )
}

export default ValuesBar
