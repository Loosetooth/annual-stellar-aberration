import * as THREE from 'three'

export const FatArrow = (props) => {

  const defaultSettings = {
    // arrow:
    direction: new THREE.Vector3(0, 1, 0),
    length: 10,
    origin: new THREE.Vector3(0, 0, 0),
    // cylinder or 'line' part:
    lineRadius: 1,
    lineSegments: 16,
    // tip:
    tipRadius: 2,
    tipLength: 4,
    tipSegments: 16,
    // dashes
    dashed: false,
    dashLength: 1
  }

  const settings = Object.assign({}, defaultSettings, props.settings)

  const unitVectorUp = new THREE.Vector3(0, 1, 0)
  settings.direction.normalize()
  const rotationQuat = new THREE.Quaternion()
  rotationQuat.setFromUnitVectors(unitVectorUp, settings.direction)

  const cylinderHeight = settings.length - settings.tipLength
  const tipPosition = new THREE.Vector3(
    settings.origin.x,
    settings.origin.y + cylinderHeight,
    settings.origin.z
  )
  tipPosition.applyQuaternion(rotationQuat)
  const cylinderPosition = new THREE.Vector3(
    settings.origin.x,
    settings.origin.y + cylinderHeight / 2,
    settings.origin.z
  )
  cylinderPosition.applyQuaternion(rotationQuat)

  return <group {...props} ref={props.arrowRef}>
    <mesh
      position={cylinderPosition}
      quaternion={rotationQuat}
    >
      <cylinderGeometry
        args={[
          settings.lineRadius,
          settings.lineRadius,
          cylinderHeight,
          settings.lineSegments
        ]}
      />
      <meshBasicMaterial color={props.color} />
    </mesh>
    <mesh
      position={tipPosition}
      quaternion={rotationQuat}
    >
      <cylinderGeometry
        args={[
          0,
          settings.tipRadius,
          settings.tipLength,
          settings.tipSegments
        ]}
      />
      <meshBasicMaterial color={props.color} />
    </mesh>
  </group>
}