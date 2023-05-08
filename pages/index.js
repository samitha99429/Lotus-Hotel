import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './Home/home'
import Header from '@/components/CommonComponents/header/header'
import Footer from '@/components/CommonComponents/footer/footer'
import ResponsiveImage from '@/components/CommonComponents/Banner/Herobanner/HeroBanner'
import Slider from './slider'
import CardView from '@/components/CommonComponents/CardView/CardView'
import Herodeading from '@/components/CommonComponents/heroHeading/heroHeading'
import DescriptionBanner from '@/components/CommonComponents/Banner/descriptionbanner/descriptionBanner'
import CardSlider from '@/components/CommonComponents/Slider/cardSlider'
import styles from '../components/CommonComponents/CardView/CardView.module.scss'
import Herobanner from '@/components/CommonComponents/Banner/Herobanner/HeroBanner'
import heroimage1 from '../public/images/heroimage.png'
import AppRoutes from '@/appRoutes/appRoutes'
import Contact from './contact/contact'






const inter = Inter({ subsets: ['latin'] })

export default function Home({children}) {
  return (
    <div>
 <HomePage/>
 {children}
 </div>
  )
}

