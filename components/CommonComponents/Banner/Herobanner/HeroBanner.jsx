import React from 'react'
import Image from 'next/image';
import Herodeading from '../../heroHeading/heroHeading';
import Header from '../../header/header';



function Herobanner({ src, alt, objectFit = 'cover', objectPosition = 'center', className = '', ...rest }) {
    return (
      
        <div className={`relative w-full h-96 ${className}`}>
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit={objectFit}
                objectPosition={objectPosition}
                {...rest}
            />

            <Herodeading/>
        </div>
        
    )
}

export default Herobanner;