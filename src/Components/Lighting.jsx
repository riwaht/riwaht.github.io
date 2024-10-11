import React, { useRef } from 'react'
import { Environment, useHelper } from '@react-three/drei'
import { DirectionalLightHelper, PointLightHelper } from 'three'

function Lighting() {
    const dirLightRef = useRef()
    const pointLightRef = useRef()
    useHelper(dirLightRef, DirectionalLightHelper, 1);
    useHelper(pointLightRef, PointLightHelper, 1);

    return (
        <>
            {/* HDRI for realistic environment lighting */}
            {/* <Environment preset="apartment" /> */}

            {/* Soft ambient light for base lighting */}
            {/* <ambientLight intensity={0.5} /> */}

            {/* Point light (simulating light bulb) */}
            <pointLight
                ref={pointLightRef}
                castShadow
                intensity={300}
                position={[-15, 20, 25]}
            />

            {/* Directional light (simulating sunlight) */}
            {/* <directionalLight
                ref={dirLightRef}
                castShadow
                intensity={1}
                position={[10, 10, 5]} // Coming from above and at an angle
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            /> */}
        </>
    )
}

export default Lighting
