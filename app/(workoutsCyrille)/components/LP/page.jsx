import Image from 'next/image'
import ClientComponent from './ClientComponent'
// import FeaturesOurServices from './index/FeaturesOurServices'
import FeaturesOurServices_copy from './index/FeaturesOurServices_copy'
import CTAPurchase from './index/CTAPurchase'
// import FeaturesWhyUs from './index/FeaturesWhyUs'
import FeaturesWhyUs_copy from './index/FeaturesWhyUs_copy'

// import JumbotronVideo from './index/JumbotronVideo'
// import JumbotronVideo_copy from './index/JumbotronVideo_copy'

// import FilterOurWorks from './index/FilterOurWorks'
import FilterOurWorks_copy from './index/FilterOurWorks_copy'
// import PricingPlans from './index/PricingPlans'
import PricingPlans_copy from './index/PricingPlans_copy'
import CountersBlock from './index/CountersBlock'
import CarouselTestimonial from './index/CarouselTestimonial'
import CTADownload from './index/CTADownload'
// import CardsOurTeam from './index/CardsOurTeam'
import CardsOurTeam_copy from './index/CardsOurTeam_copy'
import FormSubscribe from './index/FormSubscribe'
import CardsBlogPosts from './index/CardsBlogPosts'
import ParadeTheyTrustUs from './index/ParadeTheyTrustUs'
import ContactInfos from './index/ContactInfos'
import Map from './index/Map'

export default function Home() {
  return (
    <main id="home">
      <ClientComponent />
      {/* <FeaturesOurServices /> */}
      <FeaturesOurServices_copy />
      <CTAPurchase />
      {/* <FeaturesWhyUs /> */}
      <FeaturesWhyUs_copy />

      {/* <JumbotronVideo /> */}
      {/* <JumbotronVideo_copy /> */}
      
      {/* <FilterOurWorks /> */}
      <FilterOurWorks_copy />
      {/* <PricingPlans /> */}
      <PricingPlans_copy />
      <CountersBlock />
      <CarouselTestimonial />
      <CTADownload />
      {/* <CardsOurTeam /> */}
      <CardsOurTeam_copy />
      <FormSubscribe />
      <CardsBlogPosts />
      <ParadeTheyTrustUs />
      <ContactInfos />
      <Map />
    </main>
  )
}
