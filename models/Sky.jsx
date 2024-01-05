import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sky = ({ isRotating }) => {

    const sky = useGLTF(' assets /3d/sky.glb')
    const skyRef = useRef()

    useFrame((_, delta) => {
        if(isRotating){
            skyRef.current.rotation.y += 0.15 * delta
        }
    })

    return(
        <mesh ref={skyRef}>
            <primitive object={sky.scene} /> {/*Primitive bc we are just taking it in, nothing specisl to it*/}
        </mesh>
    )
}

export default Sky 