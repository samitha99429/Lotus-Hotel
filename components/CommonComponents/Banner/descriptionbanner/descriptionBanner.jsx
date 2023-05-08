import React from 'react';
import styles from './descriptionBanner.module.scss'


const DescriptionBanner = ({description,headingOne, headingTwo}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2'>
      
      <div>
        <h2 className={`${styles.headingOne} text-center text-heading-color md:text-left md:text-6xl text-2xl font-bold`} >waterfront</h2>
        <h2 className={`${styles.headingTwo} text-center md:text-left text-2xl md:text-8xl font-bold md:px-20 `}>Retreat</h2>
      </div>
      <div>
        <p className={`${styles.description} text-center md:text-left md:text-md `}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBanner;
