import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'
import Shirt from './Shirt'
import BackDrop from './BackDrop'
import CameraRig from './CameraRig'
  
const CanvasModel = () => {
  return (
    <Canvas
      shadows
    camera={{position : [0,0,0] , fov:25}}>
      <ambientLight intensity={ 0.5 } />
      <Environment preset="city" />
      <CameraRig>
        <BackDrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  ) 
}
//1hr10min24seconds
export default CanvasModel;