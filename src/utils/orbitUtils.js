import * as THREE from 'three'

export const daySeconds = 24 * 3600
export const yearSeconds = daySeconds * 365.256
export const timeMultiplier = daySeconds * 4
export const earthOrbitRadius = 52

const TWO_PI = Math.PI * 2

// calculate position in circular orbit
export const getCircularOrbitPosition = (time, radius = earthOrbitRadius, period = yearSeconds) => {
  // in Z-X plane
  const startVector = new THREE.Vector2(0, radius)
  const angle = -time / period * TWO_PI
  startVector.rotateAround(new THREE.Vector2(0, 0), angle)

  const result = new THREE.Vector3(
    startVector.x,
    0,
    startVector.y
  )
  return result
}

export const getOrbitPositionFromClock = (clock, radius = earthOrbitRadius, period = yearSeconds) => {
  const time = clock.getElapsedTime() * timeMultiplier
  return getCircularOrbitPosition(time, radius, period)
}

export const calcAxisRotation = (time, period = daySeconds) => {
  return time / period * TWO_PI
}