
import React from 'react'
import { images } from '@/app/api/Api'
const TourCard = ({index, items}) => {


  return (
    <>
    <div className=' basis-[100%] sm:basis-[24%] grow' key={index}>
    <div className="flex flex-col justify-end bg-cover bg-no-repeat bg-center min-h-[60vh] px-4 py-2  " style={{backgroundImage: `url(${images.tour1})`}}>
    <h3 className="text-white font-bold item ">{items.title}</h3>
    <p className='text-[#B8B8B8]' style={{fontSize: 'clamp(12px, 2vw, 15px)'}}>
   {items.para}
    </p>

    </div>
  </div>
      
    </>
  )
}

export default TourCard