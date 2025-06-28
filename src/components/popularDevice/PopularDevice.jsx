import React from 'react'
import styles from './popularDevice.module.css'
import iphone from '../../assets/images/iphone.png'
import Label from '../labels/Label'
import IconButton from '../iconButton/IconButton'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import GreaterThan from '../../assets/icons/GreaterThan'
import LessThan from "../../assets/icons/LessThan";


const PopularDevice = () => {
    const a = [1, 2, 3, 4, 5, 6, 7,8,9,10];
  return (
    <div className={styles["popular-width"]}>
      <h2 className={styles["popular-heading"]}>Popular Devices Right Now</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={6}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }}
        className={styles["popular-component"]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {a.map((value) => {
          return (
            <SwiperSlide key={value}>
              <div className={styles["popular-box"]}>
                <div className={styles["popular-image"]}>
                  <img src={iphone} width="148px" />
                  <Label
                    size="md"
                    className={styles["popualr-label"]}
                    success={true}
                    text="popular"
                  />
                </div>
                <div className={styles["popular-content"]}>
                  <p className={styles["popular-title"]}>iPhone 16 Pro Max</p>
                  <p className={styles["popular-price"]}>
                    <span>upto </span>
                    <span className={styles["price"]}> £147</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`${styles["prev-btn"]} `}>
          {
            <IconButton
              className="custom-swiper-button-prev"
              size="2xs"
              icon={<LessThan />}
            />
          }
        </div>
        <div className={`${styles["next-btn"]} `}>
          {<IconButton className="custom-swiper-button-next" size="2xs" icon={<GreaterThan />} />}
        </div>
      </Swiper>
    </div>
  );
}

export default PopularDevice