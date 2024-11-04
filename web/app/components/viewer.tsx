import * as THREE from 'three'
import {createRoot} from 'react-dom/client'
import React, {useRef, useState, ComponentProps} from 'react'
import {Canvas, useFrame, ThreeElements} from '@react-three/fiber'


const Viewer = (props: ComponentProps<any>) => {
    return (
        <Canvas camera={{position: [4, 3, 4]}}>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[-1, 0.5, 1]} intensity={Math.PI} />
            <axesHelper/>
            {props.children}
        </Canvas>
    );
}

export default Viewer;