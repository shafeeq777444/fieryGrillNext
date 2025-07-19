"use client"
import React from 'react'
import DeliveryLocations from '../../components/Location/DeliveryLocations'
import LocationHero from '../../components/Location/HeroLocation'
import AnimatedOnScroll from '../../components/common/AnimatedScrollerOnWraaper'


const Location = () => {
  return (
    <div className='bg-white'>
       <div className="h-20 "></div>

<AnimatedOnScroll><LocationHero/></AnimatedOnScroll>
<AnimatedOnScroll> <DeliveryLocations/></AnimatedOnScroll>
    </div>
  )
}

export default Location
