import React from 'react'
import Image from 'next/image';
import styles from './footerBottom.module.scss'



const FooterBottom =({imagelink , title})=> {
  return (
    <div className='md:container md:mx-auto'>
        <div className='flex flex-row px-4 md:flex-row'>
        <Image className='' src={imagelink}  width={40} height={30}/>
        </div>

        <div className='flex felx-col md:flex-row md:mt-2 md:mr-10'>  
        <h1 className={`${styles.title} text-title-color text-xs md:text-base flex flex-row px-2 `}
        >{title}</h1>
        </div>
      
    </div>

  )
}

export default FooterBottom;