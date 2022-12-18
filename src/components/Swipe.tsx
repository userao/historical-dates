import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { IEvent } from '../types/data';
import './Swipe.sass';
import { useSelector } from 'react-redux';


const Swipe: React.FC = () => {
  const events = useSelector((state: any) => state.category.activeEvents);
  const nextButton = useRef<HTMLButtonElement>(null);
  const prevButton = useRef<HTMLButtonElement>(null);

  const [swiperInstance, setSwiperInstance] = useState<any>();
  
  useEffect(() => {
    swiperInstance?.slideTo(0, 0, true);
  }, [events]);

  const breakpoints = {
    200: {
     slidesPerView: 1,
     spaceBetween: 25
    },
    800: {
     slidesPerView: 3,
     spaceBetween: 80
    },
   };

  const switchButtonsVisibility = () => {
    const prevClasses = prevButton.current?.classList;
    const nextClasses = nextButton.current?.classList;
    if (swiperInstance?.isBeginning) {
      prevClasses?.add('swiper-button-disabled');
    } else {
      prevClasses?.remove('swiper-button-disabled');
    }
    if (swiperInstance?.isEnd) {
      nextClasses?.add('swiper-button-disabled');
    } else {
      nextClasses?.remove('swiper-button-disabled');
    }
  };

  return (
    events &&
    <div className="swiper-container">
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={25}
        slidesPerView={1}
        pagination
        modules={[Pagination]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        onSlideChange={switchButtonsVisibility}
      >
        {events.map((event: IEvent) => {
          return (
            <SwiperSlide key={event.id}>
              <h4 className="header">{event.year}</h4>
              <p className="description">{event.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button ref={nextButton} onClick={() => swiperInstance.slideNext()} className="swiper-button-next">
        <div className="arrow right" />
      </button>
      <button ref={prevButton} onClick={() => swiperInstance.slidePrev()} className="swiper-button-prev swiper-button-disabled">
        <div className="arrow left" />
      </button>
  </div>
  ) 
};

export default Swipe;
