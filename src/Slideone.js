import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Sdata from './Sdata';
import './slide.css'

const Slideone = () => {
  return (
    <>
    <div className='contener'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {
        Sdata.map((value)=>{
          return(
            <SwiperSlide>
              <div className='box'>
               <div className='img'>
                  <img  src={value.cover} alt=''/>
               </div>
               <div className='text'>
                <span>{ value.category}</span>
                <h2>{value.title}</h2>
                <p>{value.desc}</p>
               </div>
             </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>

    </div>
    </>
  );
}

export default Slideone
