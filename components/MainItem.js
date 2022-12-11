import React from 'react'
import Image from 'next/image'

export default function MainItem({ item }) {
  return (
    <div className='flex w-auto lg:w-[calc(50%-32px)] min-h-[120px] my-8'>
      <Image src={item.icon} alt="Icon" width={80} height={80} className="w-auto h-[65px] sm:h-[80px]"/>
      <div className='flex flex-col gap-5 ml-6'>
        <h3 className='text-2xl font-bold'>{item.title}</h3>
        <p className='text-xl tracking-wide'>{item.description}</p>
        <span className='tracking-wider text-buttonTwo text-xl'>Learn More  →</span>
      </div>
    </div>
  )
}
