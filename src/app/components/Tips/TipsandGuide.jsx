import React from 'react'
import Card from '../Card/Card';
import { Icons, images } from '@/app/api/Api';
const TipsandGuide = () => {
  return (
    <>
         <section className="tips">
        <div className="container mx-auto">
          <div className="tips-content">
            <div className="flex sm:flex-row flex-col justify-between items-center py-3 px-3">
              <div className="flex flex-col items-start">
                <h3 className="text-primary font-bold" style={{fontSize: "clamp(1rem , 6vw, 2.3rem)"}}>News, Tips & Guides</h3>
                <p>Favorite destinations based on customer reviews</p>
              </div>
              <button className="btn rounded-full py-3 px-4 flex items-center gap-2">View More<Icons.rightarrow /></button>
            </div>
            <div className="flex items-center justify-center gap-5 flex-wrap">
            <Card img={images.blog1} />    
            <Card img={images.blog2}  />    
            <Card img={images.blog3}  />    
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TipsandGuide
