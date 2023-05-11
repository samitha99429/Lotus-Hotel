import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from '../Button/buttonCard.module.scss'
import styless from './CardView.module.scss'

const CardView = ({ title, imageLink, description }) => {
  return (
    <div className="md:container md:mx-auto px-4 py-6">
      <div className="flex flex-wrap">
        <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-4  ">
          <article className=" shadow-lg bg-white rounded-lg">
            <div>
            <Image src={imageLink} alt="My Image" width={0} height={0} layout='responsive' className={`${styless.imageresponsive} transform hover:scale-90 transition duration-300 ease-in-out object-cover w-full h-full`}/>
            </div>
              
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className={`${styless.title} text-lg md:text-xl lg:text-2xl`}>
                {title}
              </h1>
            </header>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4 text-lg md:text-xl lg:text-2xl">
              <Button extraClassName={`${styles.buttoncard} px-4 py-2`}>Book Now</Button>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}

export default CardView;
