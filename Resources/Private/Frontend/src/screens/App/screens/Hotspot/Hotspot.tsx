import React, {useState} from 'react'
import './Hotspot.scss'
import altBg from '../../../../assets/bg.jpg'

import HotspotItem from './HotSpotItem'

const Hotspot: React.FC = () => {
  const hotspots = [
    {
      pos_x: 22.5,
      pos_y: 55,
      text: 'Felix Hellwig',
    },
    {
      pos_x: 26.5,
      pos_y: 58,
      text: 'Markus List',
    },
    {
      pos_x: 29.5,
      pos_y: 60,
      text: 'Markus Richter',
    },
    {
      pos_x: 33,
      pos_y: 64,
      text: 'Mariia Würtz',
    },
    {
      pos_x: 35.5,
      pos_y: 62,
      text: 'Georg Posselt',
    },
  ]

  const [isBuilding, setIsBuilding] = useState<boolean>(false)
  const [spotList, setSpotList] = useState<JSX.Element[] | string>('')

  const buildSpots = () => {
    if (isBuilding) return
    setIsBuilding(true)
    setSpotList('')
    const img = document.querySelector('.hotspot__background')
    const imgWidth = img ? img.clientWidth : 0
    const imgHeight = img ? img.clientHeight : 0

    const newSpotList = hotspots.map((spot, i) => {
      spot.pos_x = (spot.pos_x / 100 * imgWidth)
      spot.pos_y = (spot.pos_y / 100 * imgHeight)
      return (
        <HotspotItem spot={spot} key={`hotspot-item-${i}`}/>
      )
    })

    setSpotList(newSpotList)
    window.setTimeout(() => {
      setIsBuilding(false)
    }, 100)
  }

  window.addEventListener('resize', buildSpots)

  const bg = document.getElementById('bild')?.getAttribute('data-bilduri') || altBg

  return (
    <div className='hotspot'>
      <img src={bg} className='hotspot__background' onLoad={buildSpots}/>
      {spotList}
    </div>
  )
}

export default Hotspot
