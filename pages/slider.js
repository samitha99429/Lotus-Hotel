import React from 'react';

    var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

 import "owl.carousel/dist/assets/owl.carousel.css";
 import "owl.carousel/dist/assets/owl.theme.default.css";
 import dynamic from 'next/dynamic';
import ResponsiveImage from '@/components/CommonComponents/Banner/Herobanner/HeroBanner';
import CardView from '@/components/CommonComponents/CardView/CardView';
import cartViewData from '@/data/cardViewData/CardViewData.json'
   

  const OwlCarousel = dynamic(()=> import ("react-owl-carousel"),
  { ssr: false, 
});

export default function Slider(){

    const Responsive = {
        0: {
            items:1.5,
            margin: 5
        },

        768: {

            items: 2.5,
            margin: 10
        },

        1024: {
            items:3.5,
            margin: 20
        }
    }
    return(
        <OwlCarousel
        responsive={Responsive}
        autoplay={true}    // set autoplay to true
        autoplayTimeout={5000}
        autoplaySpeed={1000}   
        >


     
            {cartViewData.map((cv, i) => (
                <CardView key={i} imageLink={cv.imageLink} title={cv.title} />
              ))}
       
        
     
 
        </OwlCarousel>


    )
}
