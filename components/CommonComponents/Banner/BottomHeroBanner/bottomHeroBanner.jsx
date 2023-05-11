import React from 'react'
import Image from 'next/image';
import BottomHeroHeading from '../../BottomHeroHeading/bottomHeroHeading';


const BottomHeroBanner = ({ src, alt, className = '', ...rest }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  relative">
                <Image src={src} />

                <div className="absolute flex justify-center items-center right-0 left-0 top-0 bottom-0">
                    <BottomHeroHeading extraClassName="text-white text-3xl md:text-4xl lg:text-5xl tracking-wider " />
                </div>

            </div>
        </div>
    )
}

export default BottomHeroBanner;