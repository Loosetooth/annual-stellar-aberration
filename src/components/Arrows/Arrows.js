
import { ActualPositionArrow } from './ActualPositionArrow'
import { ApparentPositionArrow } from './ApparentPositionArrow'
import { EarthVelocityArrow } from './EarthVelocityArrow'
import { ExpectedParallaxArrow } from './ExpectedParallaxArrow'

export const Arrows = (props) => {
  return <group>
    <ActualPositionArrow paused={props.paused} />
    <EarthVelocityArrow paused={props.paused} />
    <ApparentPositionArrow paused={props.paused} />
    <ExpectedParallaxArrow paused={props.paused} />
  </group>
}