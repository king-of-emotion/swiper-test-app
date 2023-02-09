import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectCoverflow } from "swiper";
import 'swiper/css';

SwiperCore.use([Navigation, Autoplay, EffectCoverflow]);

function App(props: {srcs: string[]}) {
  const slides = Array.from({length: 10}).map((_: any, index)=>{
    return <SwiperSlide>
      <div>
        <img key={index} src={props.srcs[index]}/>
      </div>
    </SwiperSlide>
  })
  return (
    <div className="App">
      <header className="App-header">
        <Swiper
            tag="section"
            wrapperTag="ul"
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            loopedSlides={4}
            speed={300}
        >
          {slides}
        </Swiper>
      </header>
    </div>
  );
}

export {App};
