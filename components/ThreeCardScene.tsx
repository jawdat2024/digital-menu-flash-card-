import React, { useRef, Suspense } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { PresentationControls, Float, Html, useTexture } from '@react-three/drei';
import { Loader2 } from 'lucide-react';
import * as THREE from 'three';

// NOTE: Manual JSX.IntrinsicElements augmentation removed to prevent overwriting global React types.
// @react-three/fiber provides its own type definitions for Three.js elements like <mesh>.

interface ModelProps {
  imageUrl: string;
}

const LoadingFallback = () => {
  return (
    <Html center>
      <div className="text-white opacity-50">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    </Html>
  );
};

const ImageMesh: React.FC<ModelProps> = ({ imageUrl }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use useTexture for automatic caching and disposal
  const texture = useTexture(imageUrl);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle idle animation
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.z = Math.sin(t / 4) / 20;
      meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <mesh ref={meshRef} scale={[3, 3, 3]}>
      {/* Box Geometry for a "Card" thickness */}
      <boxGeometry args={[1, 1, 0.05]} />
      <meshStandardMaterial map={texture} attach="material-4" /> {/* Front */}
      <meshStandardMaterial color="#111" attach="material-5" /> {/* Back */}
      <meshStandardMaterial color="#222" attach="material-0" /> {/* Right */}
      <meshStandardMaterial color="#222" attach="material-1" /> {/* Left */}
      <meshStandardMaterial color="#222" attach="material-2" /> {/* Top */}
      <meshStandardMaterial color="#222" attach="material-3" /> {/* Bottom */}
    </mesh>
  );
};

const ThreeCardScene: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={<LoadingFallback />}>
          <PresentationControls
            global={false} 
            cursor={true}
            snap={true} 
            speed={1.5}
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]} // Limit vertical rotation
            azimuth={[-Math.PI / 4, Math.PI / 4]} // Limit horizontal rotation
          >
            <Float rotationIntensity={0.4} floatIntensity={0.5} floatingRange={[0, 0.2]}>
              <ImageMesh imageUrl={imageUrl} />
            </Float>
          </PresentationControls>
        </Suspense>
    </Canvas>
  );
};

export default ThreeCardScene;