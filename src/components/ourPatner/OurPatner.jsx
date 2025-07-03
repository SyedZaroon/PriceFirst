import React from 'react'
import styles from './ourPatner.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import patner1 from "../../assets/images/partner1.png"
import patner2 from "../../assets/images/partner2.png";
import patner3 from "../../assets/images/partner3.png";
import patner4 from "../../assets/images/partner4.png";
import patner5 from "../../assets/images/partner5.png";
import patner6 from "../../assets/images/partner6.png";
import patner7 from "../../assets/images/partner7.png";
import patner8 from "../../assets/images/partner8.png";
import patner9 from "../../assets/images/partner9.png";
import patner10 from "../../assets/images/partner10.png";



const OurPatner = () => {

   const images = [
     patner1,
     patner2,
     patner3,
     patner4,
     patner5,
     patner6,
     patner7,
     patner8,
     patner9,
     patner10,
   ];


  return (
    <div className={styles["partner-section"]}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={8}
        speed={1500}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 8 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`partner-${index + 1}`}
              className={styles["partner-img"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurPatner