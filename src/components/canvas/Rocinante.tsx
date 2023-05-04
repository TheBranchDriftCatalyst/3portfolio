import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {OrbitControls, OrthographicCamera, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Rocinante = () => {
  const rocinante = useGLTF("./rocinante/scene.gltf");

  return (
    <primitive object={rocinante.scene} rotation-x={0} />
  );
};

const RocinanteCanvas = () => {
  return (
    <Canvas
      // shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.70} />
        <Rocinante />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RocinanteCanvas;
