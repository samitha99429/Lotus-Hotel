import React from 'react'
import styles from './bottomHeroHeading.module.scss'

const  BottomHeroHeading =()=> {
  return (
    <div>
        <p className={`${styles.bottomheroheading}  text-white text-2xl md:text-4xl lg:text-5xl text-center uppercase justify-center md:justify-center md:items-center`}>
        The Epitome of luxury nestled <br/>in nature - Serendib awaits...
      </p>
    </div>
  )
}

export default BottomHeroHeading;