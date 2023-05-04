import React from 'react';
import styles from './descriptionBanner.module.scss'


const DescriptionBanner = ({description,headingOne, headingTwo}) => {
  return (
    <div className={styles.DescriptionBanner}>
      <div>
      <p class={styles.description}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
       but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      </div>
     <div>
      <text className={styles.headingOne}>waterfront</text>
     </div>
     <div>
      <text className={styles.headingTwo}>Retreat</text>
     </div>

    </div>
  )
}

export default DescriptionBanner;