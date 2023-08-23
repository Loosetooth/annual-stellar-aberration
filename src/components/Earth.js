import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { calcAxisRotation, getCircularOrbitPosition, timeMultiplier } from "../utils/orbitUtils"
import * as THREE from 'three'

const tilt = 23.44 / 180 * Math.PI

export const Earth = (props) => {
  const myMesh = useRef()
  const colorMap = useLoader(TextureLoader, '2k_earth_daymap.jpg')

  useFrame(({ clock }) => {
    if(!props.paused.current) {
      const elapsedTime = clock.getElapsedTime() * timeMultiplier
      const newPosition = getCircularOrbitPosition(elapsedTime)
      const newAxisRotation = calcAxisRotation(elapsedTime)
      myMesh.current.position.x = newPosition.x
      myMesh.current.position.z = newPosition.z
      myMesh.current.rotation.x = tilt
      myMesh.current.rotation.y = newAxisRotation
    }
  })

  return <mesh ref={myMesh}>
    <sphereGeometry
      args={[2, 64, 64]}
    />
    {/* <meshBasicMaterial color="royalblue" /> */}
    <meshStandardMaterial map={colorMap} />
  </mesh>
}