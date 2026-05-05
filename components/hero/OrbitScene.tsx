'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

/** Three orbital ribbons inspired by the QNTGC brand mark */
function Ribbon({
  color,
  rotation,
  thickness = 0.18,
  radius = 2.4,
}: {
  color: string;
  rotation: [number, number, number];
  thickness?: number;
  radius?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.2) * 0.08;
    ref.current.rotation.x = rotation[0] + Math.cos(t * 0.15) * 0.06;
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, thickness, 32, 200]} />
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.25}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function CenterCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.45, 64, 64]} />
      <meshStandardMaterial
        color="#002561"
        metalness={0.6}
        roughness={0.2}
        emissive="#0a3a8a"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function FloatingPlanet({
  color,
  position,
  size = 0.18,
  speed = 1,
}: {
  color: string;
  position: [number, number, number];
  size?: number;
  speed?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const angle = useMemo(() => Math.random() * Math.PI * 2, []);
  const radius = useMemo(() => Math.hypot(position[0], position[2]), [position]);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * speed * 0.2 + angle;
    group.current.position.x = Math.cos(t) * radius;
    group.current.position.z = Math.sin(t) * radius;
    group.current.position.y = position[1] + Math.sin(t * 2) * 0.15;
  });
  return (
    <group ref={group} position={position}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} emissive={color} emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#B01117" />
      <pointLight position={[0, 5, -5]} intensity={0.6} color="#002561" />

      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <group>
          <Ribbon color="#B01117" rotation={[0, 0, -0.4]} />
          <Ribbon color="#002561" rotation={[0, 0, 0.4]} />
          <Ribbon color="#919497" rotation={[0, 0, Math.PI / 2]} thickness={0.12} />
          <CenterCore />
        </group>
      </Float>

      <FloatingPlanet color="#FF6B9D" position={[3.2, 0.5, 1.5]} size={0.22} />
      <FloatingPlanet color="#FFB703" position={[-3, -0.8, 1]} size={0.18} speed={1.3} />
      <FloatingPlanet color="#06A77D" position={[2.5, -1.2, -2]} size={0.2} speed={0.8} />
      <FloatingPlanet color="#3A86FF" position={[-2.8, 1.3, -1]} size={0.16} speed={1.1} />
      <FloatingPlanet color="#9D4EDD" position={[0.5, 2.2, 2]} size={0.14} speed={1.4} />
      <FloatingPlanet color="#F77F00" position={[-1.5, -2, -1.5]} size={0.16} speed={0.9} />

      <Sparkles count={80} scale={[10, 6, 6]} size={2} speed={0.4} color="#B01117" opacity={0.5} />
      <Sparkles count={60} scale={[8, 5, 5]} size={1.5} speed={0.3} color="#002561" opacity={0.4} />
    </>
  );
}

export default function OrbitScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Scene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}
