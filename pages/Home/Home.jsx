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

function HomePage() {
  return (
    <div> 
        <Herobanner src={heroimage1}></Herobanner>
        {/* <DescriptionBanner/> */}
        {/* <div className='py-4 px-4 '>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4' >
            {cartViewData.map((cv, i) => (
                <CardView key={i} imageLink={cv.imageLink} title={cv.title} />
              ))}
          </div>
        </div>
        <Slider/>
        <Footer/>  */}
    </div>
  )
}

export default HomePage