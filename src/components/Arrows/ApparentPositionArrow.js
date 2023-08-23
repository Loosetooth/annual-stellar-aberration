
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { getOrbitPositionFromClock } from '../../utils/orbitUtils'
import { FatArrow } from './FatArrow'

export const ApparentPositionArrow = (props) => {
  
  const yVector = new THREE.Vector3(0, 1, 0)
  const xVector = new THREE.Vector3(1, 0, 0)
  
  // apparent position arrow
  const arrow = useRef()
  const vector = new THREE.Vector3(1, 0, 0)
  const quat = new THREE.Quaternion()
  const verticalLength = 50
  const horizontalLength = 5
  const arrowLength = Math.sqrt(
    Math.pow(verticalLength, 2) + Math.pow(horizontalLength, 2)
  )

  useFrame(({ clock }) => {
    if(!props.paused.current) {
      const position = getOrbitPositionFromClock(clock)
  
      // velocity arrow
      arrow.current.position.x = position.x
      arrow.current.position.z = position.z
      vector.crossVectors(yVector, position.clone().normalize())
      quat.setFromUnitVectors(xVector, vector)
      arrow.current.setRotationFromQuaternion(quat)
    }
  })

  return <FatArrow
      position={new THREE.Vector3(10, 0, 0)}
      color="green"
      settings={{
        direction: new THREE.Vector3(horizontalLength, verticalLength, 0),
        origin: new THREE.Vector3(0, 0, 0),
        length: arrowLength,
        lineRadius: 0.5,
        tipRadius: 1,
        tipLength: 2
      }}
      arrowRef={arrow}
    />
}