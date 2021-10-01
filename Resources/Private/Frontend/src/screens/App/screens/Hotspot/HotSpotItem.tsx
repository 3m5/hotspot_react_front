import React from 'react'

type Props = {
  spot: any
}

const HotspotItem: React.FC<Props> = (props) => {
  return (
    <div className='hotspot__item' style={{ left: props.spot.pos_x, top: props.spot.pos_y }}>
      <div className='hotspot__item__content'>{props.spot.text}</div>
    </div>
  )
}

export default HotspotItem
