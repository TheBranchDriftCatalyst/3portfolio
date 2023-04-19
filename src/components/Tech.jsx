import React from "react";
import {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stats} from '@react-three/drei'
import {SectionWrapper} from "../hoc/index.js";
import {useGLTF} from '@react-three/drei'
import AmbientLightNode from "three/addons/nodes/lighting/AmbientLightNode.js";


//
function Model(props) {
  const {scene} = useGLTF('./alien_world_explorer.glb')
  return (
    <mesh>
      <primitive
        object={scene}
      />
    </mesh>
  )
}

//
// useGLTF.preload('alien_world_explorer.glb')

// const Box = (props) => {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

const Tech = () => {
  return (
    <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
      {/*<Environment files="./img/workshop_1k.hdr" background/>*/}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <Model />
      <OrbitControls autoRotate/>
      <Stats/>
    </Canvas>

  )
}


export default SectionWrapper(Tech, "");
