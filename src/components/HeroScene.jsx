import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function OrbitingShapes() {
  const groupRef = useRef(null)
  const pointsRef = useRef(null)

  const positions = useMemo(() => {
    const count = 260
    const data = new Float32Array(count * 3)

    for (let index = 0; index < count; index += 1) {
      const radius = 1.2 + Math.random() * 1.8
      const angle = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 2.6

      data[index * 3] = Math.cos(angle) * radius
      data[index * 3 + 1] = y
      data[index * 3 + 2] = Math.sin(angle) * radius
    }

    return data
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.06
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#7dd3fc"
          metalness={0.42}
          roughness={0.3}
          transparent
          opacity={0.36}
          wireframe
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color={new THREE.Color('#a78bfa')} size={0.03} sizeAttenuation transparent opacity={0.62} />
      </points>
    </group>
  )
}

export default function HeroScene() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return null
  }

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.8], fov: 48 }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 3, 4]} intensity={1.2} />
        <OrbitingShapes />
      </Canvas>
    </div>
  )
}
