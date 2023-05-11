import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardView from '@/components/CommonComponents/CardView/CardView';
import cartViewData from '@/data/cardViewData/CardViewData.json'


export default function CardSlider() {
  var settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1

   
  };
  return (
      <Slider {...settings} className="md:container md:mx-auto">

      {cartViewData.map((cv, i) => (
                <CardView key={i} imageLink={cv.imageLink} title={cv.title} />
              ))}
       
    
    </Slider>
  );
}