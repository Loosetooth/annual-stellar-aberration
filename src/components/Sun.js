import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { calcAxisRotation, daySeconds, getCircularOrbitPosition, timeMultiplier } from "../utils/orbitUtils"

const tilt = 23.44 / 180 * Math.PI

export const Sun = (props) => {
  const myMesh = useRef()
  const colorMap = useLoader(TextureLoader, '2k_sun.jpg')

  useFrame(({ clock }) => {
    if(!props.paused.current) {
      const elapsedTime = clock.getElapsedTime() * timeMultiplier
      myMesh.current.rotation.y = calcAxisRotation(elapsedTime, 24.47 * daySeconds)
    }
  })

  return <mesh ref={myMesh}>
    <sphereGeometry
      args={[4, 64, 64]}
    />
    {/* <meshBasicMaterial color="royalblue" /> */}
    <meshStandardMaterial map={colorMap} />
  </mesh>
}