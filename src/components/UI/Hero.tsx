import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { ACESFilmicToneMapping } from 'three'
import Scene from '../3D/Scene'
import { LlamaHeroIcon, HechoEnPeruBadge, DecorativeLeaf, GoldStamp } from './BrandIcons'

const Hero = () => {
  const [hasInteracted, setHasInteracted] = useState(false)

  return (
    <section className="min-h-screen w-full flex flex-col items-center pt-24 md:pt-28 relative z-10 overflow-hidden">
      {/* ── Background ambient glows ── */}
      <div className="absolute top-[-100px] right-[-200px] w-[700px] h-[700px] rounded-full bg-qori-orange/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-200px] w-[500px] h-[500px] rounded-full bg-qori-green/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] rounded-full bg-qori-copper/[0.03] blur-[80px] pointer-events-none" />

      {/* ── Decorative corner leaves ── */}
      <div className="absolute top-0 right-0 pointer-events-none animate-leaf-sway hidden lg:block">
        <DecorativeLeaf />
      </div>
      <div className="absolute top-[15%] left-0 pointer-events-none animate-leaf-sway hidden lg:block" style={{ animationDelay: '2s' }}>
        <DecorativeLeaf flip />
      </div>

      {/* ── Llama watermark ── */}
      <div className="absolute left-[-20px] md:left-10 bottom-[15%] opacity-20 pointer-events-none animate-float-slow hidden lg:block">
        <LlamaHeroIcon className="text-qori-orange" />
      </div>

      {/* ── Gold stamp right side ── */}
      <div className="absolute right-8 md:right-20 top-[30%] pointer-events-none animate-stamp-reveal delay-1000 hidden lg:block">
        <GoldStamp size={110} className="opacity-20 animate-spin-slow" />
      </div>

      {/* ── Hero content ── */}
      <div className="flex flex-col items-center text-center max-w-5xl px-6 relative z-20">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6">
          <HechoEnPeruBadge />
        </div>

        {/* Tagline */}
        <p className="text-[11px] tracking-[0.35em] font-semibold text-qori-green uppercase mb-4 animate-fade-in-up delay-100">
          Cleansing Gel Soap · Orange & Turmeric
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-qori-dark leading-[1.05] animate-fade-in-up delay-200">
          Innovación natural
          <br />
          <span className="italic font-medium gradient-text-orange">desde el Perú.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg font-light text-qori-brown/65 max-w-xl leading-relaxed mt-6 animate-fade-in-up delay-300">
          Un jabón sólido con centro líquido elaborado con activos naturales peruanos
          que limpian, regeneran e hidratan tu piel de forma <span className="font-medium text-qori-green">efectiva y sostenible.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-fade-in-up delay-400">
          <a
            href="#producto"
            className="px-9 py-3.5 rounded-full bg-qori-green text-white text-sm font-bold tracking-widest uppercase hover:bg-qori-green-light transition-all duration-300 shimmer-btn shadow-lg shadow-qori-green/20 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qori-green focus-visible:ring-offset-2 focus-visible:ring-offset-qori-beige"
          >
            Descubre más
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a
            href="#ingredientes"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-qori-orange/25 hover:border-qori-orange text-sm font-bold tracking-widest text-qori-orange uppercase group hover:bg-qori-orange/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qori-orange focus-visible:ring-offset-2 focus-visible:ring-offset-qori-beige"
          >
            Ingredientes
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-y-0.5 transition-transform">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Bottom values strip */}
        <div className="flex items-center gap-6 md:gap-8 mt-12 animate-fade-in delay-600">
          {['Pureza', 'Bienestar', 'Sostenibilidad'].map((val, i) => (
            <span key={val} className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-qori-dark/30">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-qori-copper/40" />}
              {val}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3D Canvas ── */}
      <div 
        className="w-full max-w-4xl mx-auto h-[420px] md:h-[580px] relative z-10 mt-0 cursor-grab active:cursor-grabbing animate-fade-in-scale delay-500"
        onPointerDown={() => setHasInteracted(true)}
      >
        <Canvas
          camera={{ position: [0, 0, 7], fov: 42 }}
          gl={{
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            toneMappingExposure: 1.1,
            alpha: true,
          }}
          style={{ background: 'transparent' }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>

        <p className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-qori-dark/40 tracking-[0.25em] uppercase pointer-events-none select-none font-bold transition-opacity duration-700 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}>
          Click para abrir · Arrastra para girar
        </p>
      </div>
    </section>
  )
}

export default Hero
