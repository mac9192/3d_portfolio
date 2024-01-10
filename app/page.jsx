'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import sakura from '../music/sakura.mp3'
import { soundoff, soundon } from '../assets-3d/icons'

export default function Home() {
  const audioRef = useRef(null);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [planeScale, setPlaneScale] = useState([3, 3, 3]);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    // Check if the code is running in the client environment
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(sakura);
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;

      if (isPlayingMusic) {
        audioRef.current.play();
      }

      return () => {
        audioRef.current.pause();
      }
    }
  }, [isPlayingMusic]);

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
            scale={planeScale}
            position={[0, -4, -4]}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <Image
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
}
