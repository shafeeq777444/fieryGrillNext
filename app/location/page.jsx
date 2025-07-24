"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const DeliveryLocations = dynamic(
  () => import('../../components/Location/DeliveryLocations'),
  {
    ssr: false,
    loading: () => <DeliveryLocationsSkeleton />, 
  }
);
import AnimatedOnScroll from '../../components/common/AnimatedScrollerOnWraaper'
import LocationHero from '@/components/Location/HeroLocation'
import DeliveryLocationsSkeleton from '@/components/skeltons/location-skeltons/DeliveryLocationsSkeleton';


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
