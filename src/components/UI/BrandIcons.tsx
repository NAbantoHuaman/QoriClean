/**
 * QoriClean Brand Icons — faithfully matching the brand identity system.
 * Spiral logo, green circular icons, gold stamp, decorative leaves, llama, etc.
 */

// ── SPIRAL LOGO (brand isotipo) ──
export const SpiralLogo = ({ size = 40, color = '#D4822A', className = '' }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
    <path
      d="M30 6 C42 6 52 16 52 28 C52 40 42 48 32 48 C22 48 14 40 14 32 C14 24 20 18 28 18 C34 18 38 22 38 28 C38 32 35 35 31 35 C28 35 26 33 26 30 C26 28 27.5 26.5 30 26.5"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// ── LLAMA SILHOUETTE (from box & brand) ──
export const LlamaIcon = ({ size = 120, color = '#D4822A', className = '' }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 140 126" fill={color} className={className}>
    <path d="M45 8 C43 4 44 2 47 2 C49 2 50 4 50 6 L48 18 C48 20 50 22 52 22 L54 22 C56 22 58 20 58 18 L60 6 C60 4 61 2 63 2 C66 2 67 4 65 8 L60 22 L60 28 C60 28 62 30 66 30 C72 30 78 28 82 28 C88 28 92 32 92 38 L92 48 C92 48 94 48 96 50 C98 52 98 56 98 60 L98 96 C98 100 96 102 92 102 L86 102 C82 102 80 100 80 96 L80 82 C80 80 78 78 76 78 L60 78 C56 78 54 80 54 84 L54 96 C54 100 52 102 48 102 L42 102 C38 102 36 100 36 96 L36 60 C36 52 32 46 28 42 C24 38 22 34 22 28 L22 24 C22 20 26 18 28 20 C30 22 34 26 38 26 C42 26 44 24 44 22 Z" />
    <circle cx="52" cy="12" r="2.5" fill={color === '#D4822A' ? '#2C2C2C' : color} opacity="0.7" />
    {/* Decorative pattern on body */}
    <path d="M65 45 L75 45 L70 55 Z" fill="white" opacity="0.15" />
    <path d="M58 50 L68 50 L63 58 Z" fill="white" opacity="0.1" />
    <line x1="30" y1="110" x2="105" y2="110" stroke={color} strokeWidth="1.5" opacity="0.15" />
  </svg>
)

// ── LARGE HERO LLAMA ──
export const LlamaHeroIcon = ({ className = '' }: { className?: string }) => (
  <LlamaIcon size={220} color="#D4822A" className={className} />
)

// ── GREEN LEAF ICON (for Natural) ──
export const LeafNaturalIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 28 V14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 14 C16 8 20 4 28 4 C28 12 24 16 16 16Z" fill="white" opacity="0.9" />
    <path d="M16 20 C16 16 12 13 4 13 C4 19 8 22 16 22Z" fill="white" opacity="0.7" />
    <path d="M22 8 L16 14" stroke="white" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
  </svg>
)

// ── WATER DROP ICON (for Hidrata) ──
export const WaterDropIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 3 C16 3 6 14 6 20 C6 26 10.5 29 16 29 C21.5 29 26 26 26 20 C26 14 16 3 16 3Z" fill="white" opacity="0.9" />
    <path d="M12 20 C12 17 14 14 16 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
)

// ── RECYCLE ICON (for Cero Residuos) ──
export const RecycleZeroIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M10.5 5 L16 13 L7 13 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <path d="M21.5 5 L27 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M27 13 L24 21 L21 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M24 21 L16 27 L8 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 21 L5 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <polyline points="13,25 16,27 19,25" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

// ── PERU MAP ICON (for Hecho en Perú) ──
export const PeruMapIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M11 3 L8 6 L5 8 L4 12 L5 16 L6 18 L8 22 L10 25 L14 28 L16 29 L18 28 L20 25 L22 22 L24 18 L26 14 L27 10 L26 7 L23 4 L20 3 L16 2 L13 2 Z"
      fill="white" opacity="0.9" />
    <circle cx="16" cy="14" r="2" fill="#2D6B30" opacity="0.5" />
  </svg>
)

// ── ORANGE SLICE ICON ──
export const OrangeSliceIcon = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="15" stroke="#D4822A" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="11" stroke="#D4822A" strokeWidth="0.8" opacity="0.3" />
    <line x1="20" y1="5" x2="20" y2="35" stroke="#D4822A" strokeWidth="1" />
    <line x1="5" y1="20" x2="35" y2="20" stroke="#D4822A" strokeWidth="1" />
    <line x1="9.4" y1="9.4" x2="30.6" y2="30.6" stroke="#D4822A" strokeWidth="1" />
    <line x1="9.4" y1="30.6" x2="30.6" y2="9.4" stroke="#D4822A" strokeWidth="1" />
    <circle cx="20" cy="20" r="3" fill="#D4822A" opacity="0.12" />
  </svg>
)

// ── LEAF PLANT ICON (two leaves) ──
export const LeafPlantIcon = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 36 V18" stroke="#2D6B30" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 18 C20 10 26 5 34 5 C34 13 28 18 20 18Z" fill="#2D6B30" opacity="0.15" stroke="#2D6B30" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 26 C20 20 14 16 6 16 C6 22 12 26 20 26Z" fill="#2D6B30" opacity="0.1" stroke="#2D6B30" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M27 11 L20 18" stroke="#2D6B30" strokeWidth="0.8" opacity="0.4" />
    <path d="M13 21 L20 26" stroke="#2D6B30" strokeWidth="0.8" opacity="0.4" />
  </svg>
)

// ── BUNNY ICON (Cruelty Free) ──
export const BunnyIcon = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <ellipse cx="20" cy="26" rx="8" ry="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 13 L13 4 C12.5 2.5 14 1.5 15 3 L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 13 L27 4 C27.5 2.5 26 1.5 25 3 L23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="17" r="1" fill="currentColor" />
    <circle cx="22" cy="17" r="1" fill="currentColor" />
    <ellipse cx="20" cy="20" rx="1.5" ry="1" fill="#D4822A" opacity="0.5" />
    <path d="M18.5 21 C19 22 21 22 21.5 21" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
)

// ── FLASK ICON (Sin químicos) ──
export const FlaskIcon = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M16 6 L16 16 L8 32 C7 34 8.5 36 11 36 L29 36 C31.5 36 33 34 32 32 L24 16 L24 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 26 L28 26" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <circle cx="18" cy="30" r="1.5" fill="#D4822A" opacity="0.3" />
    <circle cx="24" cy="29" r="1" fill="#D4822A" opacity="0.2" />
  </svg>
)

// ── HEART ICON (Belleza Responsable) ──
export const HeartIcon = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M20 35 C14 29 5 23 5 15 C5 10 9 6 14 6 C17 6 19 7.5 20 9 C21 7.5 23 6 26 6 C31 6 35 10 35 15 C35 23 26 29 20 35Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" opacity="0.1"
    />
  </svg>
)

// ── DECORATIVE LEAF (corner decoration) ──
export const DecorativeLeaf = ({ className = '', flip = false }: { className?: string; flip?: boolean }) => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className={className} style={flip ? { transform: 'scaleX(-1)' } : {}}>
    <path d="M0 0 C20 10 40 30 50 60 C52 40 60 20 80 10 C60 15 40 10 20 0 Z" fill="#2D6B30" opacity="0.08" />
    <path d="M10 0 C25 8 35 25 42 50 C44 35 50 18 65 10 C50 14 35 10 18 2 Z" fill="#2D6B30" opacity="0.05" />
    <path d="M60 0 C70 5 78 15 82 30 L84 25 C86 15 92 8 100 5 L80 2 Z" fill="#D4822A" opacity="0.06" />
  </svg>
)

// ── GOLD STAMP "Hecho en Perú · Con Amor por lo Natural" ──
export const GoldStamp = ({ size = 100, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
    {/* Outer ring */}
    <circle cx="60" cy="60" r="54" stroke="#B8860B" strokeWidth="2" />
    <circle cx="60" cy="60" r="48" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" />
    {/* Inner circle */}
    <circle cx="60" cy="60" r="38" stroke="#B8860B" strokeWidth="1.5" />
    {/* Leaf in center */}
    <path d="M60 72 V52" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 52 C60 44 66 40 74 40 C74 48 68 52 60 52Z" fill="#B8860B" opacity="0.3" stroke="#B8860B" strokeWidth="1.2" />
    <path d="M60 60 C60 55 55 52 48 52 C48 57 52 60 60 60Z" fill="#B8860B" opacity="0.2" stroke="#B8860B" strokeWidth="1.2" />
    {/* Curved text - top */}
    <path id="stampTextTop" d="M60 12 A48 48 0 0 1 108 60" fill="none" />
    <text fontSize="7" fill="#B8860B" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.15em">
      <textPath href="#stampTextTop" startOffset="15%">HECHO EN PERÚ</textPath>
    </text>
    {/* Curved text - bottom */}
    <path id="stampTextBottom" d="M108 60 A48 48 0 0 1 12 60" fill="none" />
    <text fontSize="6" fill="#B8860B" fontWeight="500" fontFamily="Inter, sans-serif" letterSpacing="0.12em">
      <textPath href="#stampTextBottom" startOffset="8%">CON AMOR POR LO NATURAL</textPath>
    </text>
    {/* Small stars */}
    <circle cx="20" cy="40" r="2" fill="#D4AF37" opacity="0.5" />
    <circle cx="100" cy="40" r="2" fill="#D4AF37" opacity="0.5" />
    <circle cx="20" cy="80" r="2" fill="#D4AF37" opacity="0.5" />
    <circle cx="100" cy="80" r="2" fill="#D4AF37" opacity="0.5" />
  </svg>
)

// ── HechoEnPerú Badge ──
export const HechoEnPeruBadge = ({ className = '' }: { className?: string }) => (
  <div className={`badge-peru ${className}`}>
    <SpiralLogo size={16} color="#D4822A" />
    <span>Hecho en Perú</span>
  </div>
)

// ── Spiral leaf (100% natural) ──
export const SpiralLeafIcon = ({ size = 28, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M20 36 C20 36 20 28 20 24 C20 20 22 16 26 14 C30 12 32 8 30 4 C28 8 24 10 20 12 C16 14 14 18 14 22 C14 18 12 14 8 12 C4 10 4 6 6 4 C4 8 6 12 10 14 C14 16 16 20 16 24"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)
