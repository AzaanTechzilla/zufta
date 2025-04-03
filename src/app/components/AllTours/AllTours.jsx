'use client'
import React from 'react'
import TourCard from '../Card/TourCard'

const AllToursComponent = ({tourname, tourTypearray, images}) => {
  return (
    <>
     <div className="tourtype-content">
            <div className="flex items-center flex-wrap  justify-between py-2">
              <h2
                className="text-primary font-medium basis-[100%] md:basis-[50%] lg:basis-[40%] xl:basis-[30%] "
                style={{ fontSize: "clamp(20px , 6vw, 2.5rem)" }}
              >
                {tourname}
              </h2>
              <div className="bg-gray-400 basis-[100%] md:basis-[50%] lg:basis-[60%] xl:basis-[70%] h-[1.2px] "></div>
            </div>
            <p className="text-gray-500 py-2">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor
              similique ut quasi maxime ut deserunt autem At praesentium
              voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
              aut provident aliquam.
            </p>
            <div className="flex  gap-4 justify-center flex-wrap">
                <div className={`basis-[100%]`}>
                  <div className="flex flex-col justify-end bg-cover bg-no-repeat bg-center min-h-[50vh] px-4 py-2  " style={{backgroundImage: `url(${images.tour1})`}}>
                  <h3 className="text-white font-bold item ">Naran Kaghan</h3>
                  <p className='text-[#B8B8B8]' style={{fontSize: 'clamp(12px, 2vw, 15px)'}}>
                3 2 1 pilyaa
                  </p>
              
                  </div>
                </div>
              {tourTypearray?.map((items, index) => (
                <TourCard key={index} items={items} index={index} />
              ))}
              <p className="text-center">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
                aut provident aliquam. Aut aspernatur consequuntur eum quaerat
                distinctio ut inventore aliquid et quasi alias ut rerum suscipit
                et nihil deleniti. Ex optio sequi et quos praesentium in nostrum
                labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste
                expedita est dolor similique ut quasi maxime ut deserunt autem
                At praesentium voluptatem aut libero nisi. Et eligendi sint ab
                cumque veritatis aut provident aliquam. Aut aspernatur
                consequuntur eum quaerat distinctio ut inventore aliquid et
                quasi alias ut rerum suscipit et nihil deleniti.
              </p>
            </div>
          </div>
      
    </>
  )
}

export default AllToursComponent
