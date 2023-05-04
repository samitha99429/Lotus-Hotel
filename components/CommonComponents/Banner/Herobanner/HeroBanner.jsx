import React from 'react'
import Image from 'next/image';
import Herodeading from '../../heroHeading/heroHeading';
import Header from '../../header/header';

function Herobanner({ src, alt, className = '', ...rest }) {
    return (
        <div className={`  ${className} overflow-x-hidden`} >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  relative">
                <div className="bg-hero-image">
                    <Image
                        src={src}
                        {...rest}
                    />
                </div>

                <div className="absolute flex justify-center items-center right-0 left-0 top-0 bottom-0">
                    <Herodeading extraClassName="text-white text-3xl md:text-4xl lg:text-5xl tracking-wider " />
                </div>

            </div>
        </div>
    )
}

export default Herobanner;
