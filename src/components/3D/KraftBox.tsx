import { useRef, useMemo, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const KraftBox = ({ visible, onClick }: { position?: [number, number, number], visible: boolean, onClick: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { pointer, gl } = useThree()

  const [right, left, top, bottom, front, back] = useTexture([
    '/modelo/costado derecho.png',
    '/modelo/costado izquierdo.png',
    '/modelo/tapa.png',
    '/modelo/base.png',
    '/modelo/parte delantera.png',
    '/modelo/parte trasera.png',
  ])

  // Maximum anisotropic filtering for sharp textures at any angle
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy()

  useMemo(() => {
    const textures = [right, left, top, bottom, front, back]
    textures.forEach(t => {
      t.colorSpace = THREE.SRGBColorSpace
      t.generateMipmaps = true
      t.minFilter = THREE.LinearMipmapLinearFilter
      t.magFilter = THREE.LinearFilter
      t.anisotropy = maxAnisotropy
      t.needsUpdate = true
    })
  }, [right, left, top, bottom, front, back, maxAnisotropy])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const targetScale = visible ? (hovered ? 1.08 : 1) : 0
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5)

    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, pointer.y * 0.12, delta * 3)
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, pointer.x * 0.12, delta * 3)
  })

  return (
    <mesh
      ref={meshRef}
      scale={0}
      onClick={(e) => { e.stopPropagation(); onClick() }}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true) }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false) }}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2, 3.2, 1.2]} />
      <meshStandardMaterial attach="material-0" map={right}  roughness={0.75} metalness={0.0} envMapIntensity={0.4} />
      <meshStandardMaterial attach="material-1" map={left}   roughness={0.75} metalness={0.0} envMapIntensity={0.4} />
      <meshStandardMaterial attach="material-2" map={top}    roughness={0.75} metalness={0.0} envMapIntensity={0.4} />
      <meshStandardMaterial attach="material-3" map={bottom} roughness={0.75} metalness={0.0} envMapIntensity={0.4} />
      <meshStandardMaterial attach="material-4" map={front}  roughness={0.75} metalness={0.0} envMapIntensity={0.4} />
      <meshStandardMaterial attach="material-5" map={back}   roughness={0.75} metalness={0.0} envMapIntensity={0.4} />
    </mesh>
  )
}

export default KraftBox
