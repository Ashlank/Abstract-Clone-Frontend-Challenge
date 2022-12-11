import React from 'react'
import data from '../data.json'
import MainItem from './MainItem'

export default function Main() {
  return (
    <div className='m-auto w-[90%] my-32'>
      <div className='flex flex-wrap items-start justify-start lg:justify-center gap-8 md:px-10'>
        {
          data.map((item) => {
            return (
              <MainItem item={item} key={item.title}/>
            )
          })
        }
      </div>
    </div>
  )
}
