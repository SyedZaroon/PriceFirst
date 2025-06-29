import React from 'react'
import HomeBanner from '../../components/homeBanner/HomeBanner'
import HowToCompare from '../../components/howToCompare/HowToCompare'
import PopularDevice from '../../components/popularDevice/PopularDevice'
import WhyUs from '../../components/whyUs/WhyUs'
import Trustpilot from '../../components/trustPilot/Trustpilot'
import UniqueSellingPoints from '../../components/uniqueSellingPoints/UniqueSellingPoints'
import FrequentlyQuestion from '../../components/frequentlyQuestion/FrequentlyQuestion'

const OfferPage = () => {
  return (
    <div>
      <HomeBanner />
      <HowToCompare />
      <PopularDevice />
      <WhyUs />
      <Trustpilot />
      <UniqueSellingPoints />
      <FrequentlyQuestion />
    </div>
  )
}

export default OfferPage