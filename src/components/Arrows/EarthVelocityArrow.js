
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { getOrbitPositionFromClock } from '../../utils/orbitUtils'
import { FatArrow } from './FatArrow'

export const EarthVelocityArrow = (props) => {
  
  const yVector = new THREE.Vector3(0, 1, 0)
  
  // velocity arrow
  const velocityArrow = useRef()
  const velocityVector = new THREE.Vector3(1, 0, 0)
  const velocityQuat = new THREE.Quaternion()
  const velocityArrowLength = 10

  useFrame(({ clock }) => {
    if(!props.paused.current) {
      const position = getOrbitPositionFromClock(clock)
  
      // velocity arrow
      velocityArrow.current.position.x = position.x
      velocityArrow.current.position.z = position.z
      velocityVector.crossVectors(yVector, position.clone().normalize())
      velocityQuat.setFromUnitVectors(yVector, velocityVector)
      velocityArrow.current.setRotationFromQuaternion(velocityQuat)
    }
  })

  return <FatArrow
      position={new THREE.Vector3(10, 0, 0)}
      color={0xff00ff}
      settings={{
        direction: new THREE.Vector3(0, 1, 0),
        origin: new THREE.Vector3(0, 0, 0),
        length: velocityArrowLength,
        lineRadius: 0.5,
        tipRadius: 1,
        tipLength: 2
      }}
      arrowRef={velocityArrow}
    />
}