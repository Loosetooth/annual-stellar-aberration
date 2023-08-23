import { earthOrbitRadius } from "../utils/orbitUtils"

export const EarthOrbit = (props) => {

  const tubeRadius = 0.1
  const radialSegments = 12
  const tubularSegments = 365

  return <mesh rotation={[Math.PI / 2, 0, 0]}>
    <torusGeometry
      args={[earthOrbitRadius, tubeRadius, radialSegments, tubularSegments]}
    />
    {/* <meshBasicMaterial color="royalblue" /> */}
    <meshStandardMaterial color="lightgray"/>
  </mesh>
}