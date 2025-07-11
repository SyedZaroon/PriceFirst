import React from 'react'
import HomeBanner from '../../components/homeBanner/HomeBanner'
import HowToCompare from '../../components/howToCompare/HowToCompare'
import PopularDevice from '../../components/popularDevice/PopularDevice'
import WhyUs from '../../components/whyUs/WhyUs'
import Trustpilot from '../../components/trustPilot/Trustpilot'
import UniqueSellingPoints from '../../components/uniqueSellingPoints/UniqueSellingPoints'
import FrequentlyQuestion from '../../components/frequentlyQuestion/FrequentlyQuestion'
import OurPatner from '../../components/ourPatner/OurPatner'
import SubMenu from '../../components/subMenu/SubMenu'

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HowToCompare />
      <PopularDevice />
      <WhyUs />
      <Trustpilot />
      <UniqueSellingPoints />
      <FrequentlyQuestion />
      <OurPatner /> 
    </div>
  );
}

export default Home