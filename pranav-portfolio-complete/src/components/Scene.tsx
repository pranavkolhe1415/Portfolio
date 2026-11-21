import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Sparkles, Torus } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Group, Mesh } from 'three'

const blue = '#7894ff'
const paleBlue = '#b9c8ff'
const violet = '#9a83ff'
const screen = '#0b1222'

function ScreenCode() {
  const lineWidths = [0.88, 0.62, 0.76, 0.48, 0.94, 0.7, 0.56, 0.82]
  return (
    <group position={[0, 0, 0.105]}>
      <mesh position={[-0.78, 0.72, 0]}>
        <boxGeometry args={[0.055, 0.055, 0.012]} />
        <meshBasicMaterial color="#ff7b88" />
      </mesh>
      <mesh position={[-0.67, 0.72, 0]}>
        <boxGeometry args={[0.055, 0.055, 0.012]} />
        <meshBasicMaterial color="#e9c878" />
      </mesh>
      <mesh position={[-0.56, 0.72, 0]}>
        <boxGeometry args={[0.055, 0.055, 0.012]} />
        <meshBasicMaterial color="#62d9a4" />
      </mesh>
      <mesh position={[0.53, 0.72, 0]}>
        <boxGeometry args={[0.32, 0.035, 0.012]} />
        <meshBasicMaterial color="#273653" />
      </mesh>
      {lineWidths.map((width, index) => (
        <group key={index} position={[-0.73 + (index % 3) * 0.12, 0.48 - index * 0.145, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.035, 0.075, 0.012]} />
            <meshBasicMaterial color={index % 3 === 0 ? violet : blue} transparent opacity={0.95} />
          </mesh>
          <mesh position={[0.12 + width * 0.36, 0, 0]}>
            <boxGeometry args={[width * 0.72, 0.045, 0.012]} />
            <meshBasicMaterial color={index % 2 === 0 ? '#a9b9e7' : '#6e83ac'} transparent opacity={0.78} />
          </mesh>
          {index % 2 === 0 && <mesh position={[0.34 + width * 0.35, 0, 0]}>
            <boxGeometry args={[0.16, 0.045, 0.012]} />
            <meshBasicMaterial color="#86cdbb" transparent opacity={0.85} />
          </mesh>}
        </group>
      ))}
      <mesh position={[0.49, -0.48, 0]}>
        <boxGeometry args={[0.35, 0.04, 0.012]} />
        <meshBasicMaterial color="#8da3ff" transparent opacity={0.85} />
      </mesh>
    </group>
  )
}

function Monitor() {
  const monitor = useRef<Group>(null!)
  useFrame((state) => {
    monitor.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.035 + state.pointer.x * 0.035
    monitor.current.rotation.x = -0.025 + state.pointer.y * 0.018
  })
  return (
    <group ref={monitor} position={[0, 0.72, 0]}>
      <RoundedBox args={[2.55, 1.72, 0.16]} radius={0.11} smoothness={8}>
        <meshPhysicalMaterial color="#202b43" metalness={0.78} roughness={0.24} clearcoat={0.8} />
      </RoundedBox>
      <mesh position={[0, 0.015, 0.086]}>
        <planeGeometry args={[2.38, 1.54]} />
        <meshBasicMaterial color={screen} />
      </mesh>
      <ScreenCode />
      <mesh position={[0, -0.91, 0]}>
        <boxGeometry args={[0.42, 0.25, 0.12]} />
        <meshStandardMaterial color="#293752" metalness={0.75} roughness={0.3} />
      </mesh>
      <RoundedBox args={[1.08, 0.1, 0.48]} radius={0.045} smoothness={5} position={[0, -1.06, -0.02]}>
        <meshStandardMaterial color="#202c43" metalness={0.72} roughness={0.28} />
      </RoundedBox>
      <mesh position={[0, -0.82, 0.085]}>
        <boxGeometry args={[0.1, 0.018, 0.008]} />
        <meshBasicMaterial color={blue} />
      </mesh>
    </group>
  )
}

function Desk() {
  return (
    <group position={[0, -1.28, 0]}>
      <RoundedBox args={[4.45, 0.16, 2.05]} radius={0.09} smoothness={6}>
        <meshPhysicalMaterial color="#18243b" metalness={0.58} roughness={0.32} clearcoat={0.45} />
      </RoundedBox>
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[4.1, 0.025, 1.72]} />
        <meshStandardMaterial color="#101a2c" roughness={0.72} />
      </mesh>
      {[-1.82, 1.82].map((x) => <group key={x} position={[x, -0.68, 0]}>
        <mesh><boxGeometry args={[0.11, 1.05, 0.13]} /><meshStandardMaterial color="#293750" metalness={0.72} roughness={0.3} /></mesh>
        <mesh position={[0, -0.49, 0.1]}><boxGeometry args={[0.48, 0.08, 0.48]} /><meshStandardMaterial color="#202d45" metalness={0.65} roughness={0.35} /></mesh>
      </group>)}
      <mesh position={[0, 0.095, 0.04]}>
        <boxGeometry args={[4.1, 0.012, 0.035]} />
        <meshBasicMaterial color="#718cff" transparent opacity={0.72} />
      </mesh>
    </group>
  )
}

function Keyboard() {
  return (
    <group position={[0, -1.13, 0.82]} rotation={[-0.12, 0, 0]}>
      <RoundedBox args={[1.72, 0.11, 0.55]} radius={0.08} smoothness={5}>
        <meshStandardMaterial color="#26334c" metalness={0.55} roughness={0.38} />
      </RoundedBox>
      {Array.from({ length: 4 }).map((_, row) => Array.from({ length: 13 }).map((__, col) => (
        <mesh key={`${row}-${col}`} position={[-0.76 + col * 0.127, 0.068, -0.19 + row * 0.12]}>
          <boxGeometry args={[0.085, 0.035, 0.075]} />
          <meshStandardMaterial color={(row + col) % 7 === 0 ? '#718cff' : '#101a2b'} metalness={0.35} roughness={0.42} emissive={(row + col) % 7 === 0 ? '#344caa' : '#000000'} emissiveIntensity={0.55} />
        </mesh>
      ))) }
      <mesh position={[0, 0.07, 0.27]}>
        <boxGeometry args={[0.62, 0.025, 0.045]} />
        <meshStandardMaterial color="#718cff" emissive="#526fff" emissiveIntensity={0.45} />
      </mesh>
    </group>
  )
}

function MouseAndCoffee() {
  return (
    <group>
      <Float speed={1.1} floatIntensity={0.06} rotationIntensity={0.04}>
        <group position={[1.42, -1.08, 0.65]} rotation={[0, -0.12, 0]}>
          <mesh scale={[0.25, 0.1, 0.36]}>
            <sphereGeometry args={[1, 32, 20]} />
            <meshPhysicalMaterial color="#35425d" metalness={0.72} roughness={0.23} clearcoat={0.8} />
          </mesh>
          <mesh position={[0, 0.095, -0.08]}>
            <boxGeometry args={[0.012, 0.012, 0.15]} />
            <meshBasicMaterial color={blue} />
          </mesh>
        </group>
      </Float>
      <group position={[-1.62, -1.03, 0.57]}>
        <mesh>
          <cylinderGeometry args={[0.17, 0.2, 0.34, 32]} />
          <meshStandardMaterial color="#283650" metalness={0.5} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <torusGeometry args={[0.145, 0.018, 10, 32]} />
          <meshStandardMaterial color="#718cff" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0.2, 0.02, 0]}>
          <torusGeometry args={[0.105, 0.025, 10, 24, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#52627f" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </group>
  )
}

function FloatingWindow({ position, rotation = [0, 0, 0], variant = 0 }: {
  position: [number, number, number]
  rotation?: [number, number, number]
  variant?: number
}) {
  return (
    <Float speed={variant === 0 ? 0.9 : 1.15} rotationIntensity={0.08} floatIntensity={0.18}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[0.9, 0.58, 0.045]} radius={0.055} smoothness={5}>
          <meshPhysicalMaterial color="#17233c" metalness={0.45} roughness={0.25} transparent opacity={0.9} clearcoat={0.8} />
        </RoundedBox>
        <mesh position={[-0.31, 0.2, 0.027]}>
          <boxGeometry args={[0.07, 0.035, 0.008]} />
          <meshBasicMaterial color={variant === 0 ? '#91a8ff' : '#8bd6c3'} />
        </mesh>
        {Array.from({ length: 4 }).map((_, i) => <mesh key={i} position={[-0.2 + (i % 2) * 0.2, 0.08 - Math.floor(i / 2) * 0.15, 0.03]}>
          <boxGeometry args={[0.24 + (i % 2) * 0.13, 0.025, 0.008]} />
          <meshBasicMaterial color={i === 1 ? '#8bd6c3' : '#91a8ff'} transparent opacity={0.8} />
        </mesh>)}
      </group>
    </Float>
  )
}

function Workspace() {
  const root = useRef<Group>(null!)
  useFrame((state) => {
    root.current.rotation.y += (state.pointer.x * 0.12 - root.current.rotation.y) * 0.018
    root.current.rotation.x += (-state.pointer.y * 0.055 - root.current.rotation.x) * 0.018
  })
  return (
    <group ref={root}>
      <Desk />
      <Monitor />
      <Keyboard />
      <MouseAndCoffee />
      <FloatingWindow position={[-1.85, 1.25, -0.3]} rotation={[0.05, 0.24, -0.1]} variant={0} />
      <FloatingWindow position={[1.82, 0.25, -0.4]} rotation={[-0.08, -0.28, 0.08]} variant={1} />
      <Torus args={[2.7, 0.006, 8, 140]} rotation={[Math.PI / 2.4, 0, 0]} position={[0, -0.1, -0.85]}>
        <meshBasicMaterial color={blue} transparent opacity={0.23} />
      </Torus>
      <Sparkles count={90} scale={[5.5, 4, 3]} size={1.7} speed={0.28} opacity={0.55} color={paleBlue} />
    </group>
  )
}

export default function Scene() {
  return (
    <div className="scene-wrap workspace-scene" aria-label="Interactive 3D developer desk with monitor, code editor, keyboard and floating interface panels">
      <div className="workspace-glow" aria-hidden="true" />
      <Canvas camera={{ position: [0, 1.15, 7.5], fov: 35 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[3, 5, 5]} intensity={2.1} color="#dce5ff" />
        <pointLight position={[-3, 1.5, 2]} intensity={13} color="#627fff" />
        <pointLight position={[3, -1, -1]} intensity={10} color="#927aff" />
        <pointLight position={[0, 2, 1]} intensity={5} color="#8ca8ff" />
        <Suspense fallback={null}><Workspace /></Suspense>
      </Canvas>
      <div className="workspace-label workspace-label-top"><span className="tag-dot" /> LIVE DEVELOPMENT ENVIRONMENT</div>
      <div className="workspace-label workspace-label-bottom">✧ &nbsp; DESIGN · BUILD · CREATE</div>
    </div>
  )
}
