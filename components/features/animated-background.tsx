"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Line } from "@react-three/drei";
import * as THREE from "three";

function CircuitLines() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 2;
    }
  });

  const lines = Array.from({ length: 20 }).map((_, i) => {
    const radius = 15 + Math.random() * 10;
    const angle = (i / 20) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 20;

    const points = [
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x * 0.5, y + (Math.random() - 0.5) * 10, z * 0.5),
      new THREE.Vector3(0, y + Math.random() * 5, 0),
    ];

    return (
      <Line
        key={i}
        points={points}
        color="#3B82F6"
        lineWidth={1}
        transparent
        opacity={0.2}
      />
    );
  });

  return <group ref={group}>{lines}</group>;
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-accent-2/20 blur-[120px]" />
      
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <fog attach="fog" args={["#090e17", 10, 50]} />
        <ambientLight intensity={0.5} />
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <CircuitLines />
      </Canvas>
    </div>
  );
}
