import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 60 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        speed: 0.002 + Math.random() * 0.008,
        xFactor: -6 + Math.random() * 12,
        yFactor: -4 + Math.random() * 8,
        zFactor: -3 + Math.random() * 6,
        scale: 0.02 + Math.random() * 0.04,
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    const time = state.clock.elapsedTime
    particles.forEach((p, i) => {
      p.t += p.speed
      const x = p.xFactor + Math.sin(p.t * 0.6) * 0.8
      const y = p.yFactor + Math.cos(p.t * 0.4) * 0.5 + Math.sin(time * 0.3) * 0.2
      const z = p.zFactor + Math.sin(p.t * 0.3) * 0.4

      dummy.position.set(x, y, z)
      const breathe = 1 + Math.sin(time * 1.5 + i) * 0.3
      dummy.scale.setScalar(p.scale * breathe)
      dummy.updateMatrix()

      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix)
      }
    })
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color="#D4AF37"
        emissive="#C68E17"
        emissiveIntensity={2}
        roughness={0.3}
        metalness={0.9}
        transparent
        opacity={0.7}
      />
    </instancedMesh>
  )
}

export default Particles
