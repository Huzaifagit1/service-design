import Fotter from "@/components/Fotter"
import {
  
  TrustBar,
  AgencyIntro,
  BeyondSocialMedia,
  TechnicalAdvantages,
  FeaturedTestimonials,
  
} from "@/components/home"
import HeroSection from "@/components/home/HeroSection"
import CaseStudySection from "@/components/home/casestudy"
import CommonStruggleSection from "@/components/home/Common"


// import{ Fotter} from '@/components'
import MainFotter from '../components/home/MainFotter'
import ReviewStrip from "@/components/home/reviewstrip"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 sm:p-[10px]" >  
        <HeroSection />
        <ReviewStrip/>
        <AgencyIntro />
        {/* <BeyondSocialMedia /> */}
        <TechnicalAdvantages />
        <CommonStruggleSection/>
        <CaseStudySection/>
        <FeaturedTestimonials />
        <Fotter/>
        <MainFotter/>
      </main>
      {/* <Footer /> */}
      {/* <Fotter/> */}
    </div>
  )
}

