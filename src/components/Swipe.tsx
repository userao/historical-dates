import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { IEvent } from '../types/data';
import './Swipe.sass';

interface IButtonsProps {
  events: IEvent[]
};

const Swipe: React.FC<IButtonsProps> = ({ events }) => {
  let swiperInstance: any;

  return (
    <div className="swiper-container">
      <button onClick={() => swiperInstance.slideNext()} className="swiper-button-next">
        <div className="arrow right" />
      </button>
      <button onClick={() => swiperInstance.slidePrev()} className="swiper-button-prev">
      <div className="arrow left" />
      </button>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => swiperInstance = swiper}
      >
        {events.map((event) => {
          return (
            <SwiperSlide>
              <h4 className="header">{event.year}</h4>
              <p className="description">{event.description}</p>
            </SwiperSlide>
          );
        })} 
      </Swiper>
  </div>
  ) 
};

export default Swipe;
