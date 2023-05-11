import CardView from '@/components/CommonComponents/CardView/CardView'
import Footer from '@/components/CommonComponents/footer/footer'
import Header from '@/components/CommonComponents/header/header'
import heroimage1 from '../../public/images/heroimage.png'
import React from 'react'
import ResponsiveImage from '@/components/CommonComponents/Banner/Herobanner/HeroBanner'
import Slider from '../slider'
import cartViewData from '@/data/cardViewData/CardViewData.json'
import Herobanner from '@/components/CommonComponents/Banner/Herobanner/HeroBanner'
import DescriptionBanner from '@/components/CommonComponents/Banner/descriptionbanner/descriptionBanner'
import HeroBannerData from '@/data/descriptionData/descriptionData.json'
import CardSlider from '@/components/CommonComponents/Slider/cardSlider'
import BottomHeroBanner from '@/components/CommonComponents/Banner/BottomHeroBanner/bottomHeroBanner'
import bottomimage from '../../public/images/bottomHeroImage/booking.png'
import AccomadationCard from '@/components/CommonComponents/CardView/AccomadationCard/accomadationCard'
import accomadationCardData from '@/data/accomadationCardData/accomadationCardData.json'

function HomePage() {
  return (
    <div className=''> 
           
        <Herobanner src={heroimage1}> 
      
        </Herobanner>
         <DescriptionBanner/>
         <div className='py-4 px-4 '>
        <div className=' md:container md:mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-4' >
            {accomadationCardData.map((cv, i) => (
                <AccomadationCard key={i} imageLink={cv.imageLink} title={cv.title} paragraph={cv.paragraph}/>
              ))}
          </div>
        </div> 
        <CardSlider/>
        <BottomHeroBanner src={bottomimage}></BottomHeroBanner>
        <Footer/> 
         
    </div>
  )
}

export default HomePage