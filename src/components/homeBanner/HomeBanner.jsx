import React from 'react'
import styles from './homeBanner.module.css'
import InputFields from '../inputFields/InputFields';
import SearchIcon from '../../assets/icons/SearchIcon';
import BannerImg from '../../assets/images/HomeBannerMobile.png'

const HomeBanner = () => {
  return (
    <div className={styles["home-banner"]}>
      <div className={styles["home-banner-content"]}>
        <h1 className={styles["banner-heading"]}>
          <span>Get Top</span> Offers <span>For Your</span> Old Phone{" "}
          <span>or</span> Gadget
        </h1>
        <p className={styles["banner-description"]}>
          We match you with top rated recyclers offering competitive prices.
        </p>
        <div className={[styles["banner-newsletter"]].join(" ")}>
          <InputFields
            className={styles["search-field"]}
            type="border"
            placeholder="Search device"
            suffixIcon={<SearchIcon />}
          />
        </div>
      </div>
      <div className={styles["banner-box"]} >
        <img className={styles["banner-img"]} src={BannerImg} width="370px" height="383px" />
      </div>
    </div>
  );
}

export default HomeBanner