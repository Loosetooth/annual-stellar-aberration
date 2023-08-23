import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { getOrbitPositionFromClock } from '../../utils/orbitUtils'
import { FatArrow } from './FatArrow'

export const ActualPositionArrow = (props) => {
  // star position arrow
  const starPositionArrow = useRef()
  const positionArrowLength = 50

  useFrame(({ clock }) => {
    if(!props.paused.current) {
      const position = getOrbitPositionFromClock(clock)
  
      // star position arrow
      starPositionArrow.current.position.x = position.x
      starPositionArrow.current.position.z = position.z
    }
  })

  return <FatArrow
      position={new THREE.Vector3(10, 0, 0)}
      color="royalblue"
      settings={{
        direction: new THREE.Vector3(0, 1, 0),
        origin: new THREE.Vector3(0, 0, 0),
        length: positionArrowLength,
        lineRadius: 0.5,
        tipRadius: 1,
        tipLength: 2
      }}
      arrowRef={starPositionArrow}
    />
}