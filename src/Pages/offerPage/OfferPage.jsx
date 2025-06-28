import React from 'react'
import HomeBanner from '../../components/homeBanner/HomeBanner'
import HowToCompare from '../../components/howToCompare/HowToCompare'
import PopularDevice from '../../components/popularDevice/PopularDevice'
import WhyUs from '../../components/whyUs/WhyUs'
import Trustpilot from '../../components/trustPilot/Trustpilot'
import UniqueSellingPoints from '../../components/uniqueSellingPoints/UniqueSellingPoints'

const OfferPage = () => {
  return (
    <div>
      <HomeBanner />
      <HowToCompare />
      <PopularDevice />
      <WhyUs />
      <Trustpilot />
      <UniqueSellingPoints />
    </div>
  )
}

export default OfferPage