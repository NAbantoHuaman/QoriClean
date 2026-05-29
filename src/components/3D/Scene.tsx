import { useState, useRef } from 'react'
import { Environment, Float, OrbitControls, Lightformer } from '@react-three/drei'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SoapBar from './SoapBar'
import KraftBox from './KraftBox'
import Particles from './Particles'

const BreathingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null)
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 1.5) * 0.25
    }
  })
  return <pointLight ref={lightRef} position={[-4, 3, -2]} color="#E8A040" intensity={0.8} distance={15} />
}

const Scene = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFF5E6" castShadow />
      <ambientLight intensity={0.35} color="#FFF8F0" />
      <directionalLight position={[-3, 2, -5]} intensity={0.6} color="#FFD090" />
      <BreathingLight />

      <Environment resolution={256}>
        <Lightformer form="ring" intensity={0.8} position={[0, 5, -5]} scale={5} color="#FFF0D0" />
        <Lightformer form="rect" intensity={0.4} position={[-5, 2, 0]} scale={[3, 5, 1]} color="#FFE8C8" />
        <Lightformer form="rect" intensity={0.3} position={[5, 0, -3]} scale={[3, 5, 1]} color="#FFF5E0" />
      </Environment>

      <Particles count={50} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />

      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.8} floatingRange={[-0.08, 0.08]}>
        <group position={[0, -0.1, 0]}>
          <SoapBar position={[0, 0, 0]} visible={isOpen} onClick={() => setIsOpen(false)} />
          <KraftBox position={[0, 0, 0]} visible={!isOpen} onClick={() => setIsOpen(true)} />
        </group>
      </Float>

      <EffectComposer>
        <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} intensity={0.4} mipmapBlur />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    </>
  )
}

export default Scene
