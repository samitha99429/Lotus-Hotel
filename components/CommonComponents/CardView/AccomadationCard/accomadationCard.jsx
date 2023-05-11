import React from 'react'
import Image from 'next/image'
import styless from './accomadationCard.module.scss'
import accomadationCardBottomData from '@/data/accomadationCardData/accomadationCardBottomData/accomadationCardBottomData.json'
import AccomadatioonCardBottom from './accomadationCardBottom/accomadatioonCardBottom'

const AccomadationCard = ({ imageLink, title, paragraph }) => {
  return (

    <div className="md:container md:mx-auto  px-4 py-6">
      <div className={`${styless.container}flex flex-wrap`}>
        <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-4  ">
          <article className=" shadow-lg bg-white rounded-lg">
            <div className='relative'>
              <Image src={imageLink} alt="My Image" width={0} height={0} layout='responsive' className={`${styless.imageresponsive} transform hover:scale-90 transition duration-300 ease-in-out object-cover w-full h-full`} />
              <header className="absolute text-white bottom-0 left-0 right-0 flex items-center justify-between p-2 md:mt-6 ">
                <h1 className={`${styless.title}  uppercase text-lg md:text-xl lg:text-2xl`}>
                  {title}
                </h1>
              </header>

         

            </div>


            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <p className={`${styless.paragraph}  md:text-md md:justify-center `}>
                {paragraph}
              </p>
        

            </footer>
            <div className=' py-4 px-4 '>
        <div className='flex  flex-row  justify-center md:justify-start items-center md:flex-row ' >
            {accomadationCardBottomData.map((cv, i) => (
                <AccomadatioonCardBottom key={i} imagelink={cv.imagelink} />
              ))}
          </div>
        </div>
          </article>
        </div>
      </div>
    </div>


  )
}

export default AccomadationCard;