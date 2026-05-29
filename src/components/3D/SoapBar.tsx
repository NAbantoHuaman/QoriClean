import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const SoapBar = ({ position, visible, onClick }: { position: [number, number, number], visible: boolean, onClick: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Scale animation
    const targetScale = visible ? (hovered ? 1.05 : 1) : 0
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5)

    // Floating
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.06

    // Mouse parallax
    if (visible) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, pointer.y * 0.1, delta * 3)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, pointer.x * 0.1, delta * 3)
    }
  })

  return (
    <RoundedBox
      ref={meshRef}
      position={position}
      scale={0}
      args={[1.8, 2.8, 0.8]}
      radius={0.15}
      smoothness={4}
      onClick={(e) => { e.stopPropagation(); onClick() }}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true) }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false) }}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        color="#D97A00"
        transmission={0.92}
        opacity={1}
        metalness={0}
        roughness={0.05}
        ior={1.5}
        thickness={2}
        clearcoat={1}
        clearcoatRoughness={0.05}
        envMapIntensity={1.5}
        attenuationColor={new THREE.Color('#FF8C00')}
        attenuationDistance={0.5}
      />
    </RoundedBox>
  )
}

export default SoapBar
