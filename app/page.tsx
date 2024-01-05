'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [planeScale, setPlaneScale] = useState([3, 3, 3]);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);

  useEffect(() => {
    const adjustSizes = () => {
      if (window.innerWidth < 768) {
        setPlaneScale([1.5, 1.5, 1.5]);
        setIslandScale([0.9, 0.9, 0.9]);
      } else {
        setPlaneScale([3, 3, 3]);
        setIslandScale([1, 1, 1]);
      }
    };

    adjustSizes();

    window.addEventListener('resize', adjustSizes);

    return () => {
      window.removeEventListener('resize', adjustSizes);
    };
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={[0, -10.4, -45]}
            scale={islandScale}
            rotation={[0, 4.7, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={[0, -4, -4]}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
