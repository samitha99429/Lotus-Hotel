import React from 'react'
import Image from 'next/image';
import Herodeading from '../../heroHeading/heroHeading';
import Header from '../../header/header';

function Herobanner({ src, alt, className = '', ...rest }) {
    return (
        <div className={`relative w-full ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full">
                <div className="relative w-full md:h-auto ">
                    <Image
                        src={src}
                     
                        {...rest}
                    />
                </div>
              
                <div className=" absolute">
          <Herodeading extraClassName="text-white text-3xl md:text-4xl lg:text-5xl tracking-wider " />
        </div>
                  
            </div>
        </div>
    )
}

export default Herobanner;
