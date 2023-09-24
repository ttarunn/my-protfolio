import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {

  const computer = useGLTF("./computer_and_laptop/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="black"
      />
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      />
      <pointLight intensity={10}/>
      
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.70}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      
    </mesh>
  )
};


const ComputerCanvas = ()=> {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };    
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //Garbage Collection
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{preserveDrawingBuffer: true}} className="lg:ml-28">
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas