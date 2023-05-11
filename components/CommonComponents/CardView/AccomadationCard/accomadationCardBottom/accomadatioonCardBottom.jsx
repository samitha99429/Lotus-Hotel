import React from 'react'
import Image from 'next/image'
import styles from './accomadationCardBottom.module.scss'


const AccomadatioonCardBottom=({imagelink})=>{
  return (
    <div className='md:container md:mx-auto'>
    <div className='flex flex-row px-4 md:flex-row'>
    <Image className='' src={imagelink}  width={90} height={90}/>
    </div>

  
</div>
  )
}

export default AccomadatioonCardBottom;