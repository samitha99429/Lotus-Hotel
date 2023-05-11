import React from 'react';
import styles from './descriptionBanner.module.scss'


const DescriptionBanner = ({description,headingOne, headingTwo}) => {
  return (
    <div className=' md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 md:mt-10'>
      
      <div>
        <h2 className={`${styles.headingOne} text-center text-heading-color md:text-left md:text-6xl text-2xl font-bold`} >waterfront</h2>
        <h2 className={`${styles.headingTwo} text-center md:text-left text-2xl md:text-8xl font-bold md:px-20 `}>Retreat</h2>
      </div>
      <div>
        <p className={`${styles.description} text-center md:text-left md:text-md `}>
        63 spacious rooms with stunning views of lake Malawi, elegantly furnished to contrast the serenity of the tranquil surroundings. Escape to a world of refreshing comfort and a place where comfort meets style - your beachfront getaway awaits.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBanner;
