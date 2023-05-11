import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/images/Logo/Lotus 2 (1).png'
import styles from '../../CommonComponents/footer/footer.module.scss'
import Button from "../Button/Button";
import styless from '../Button/buttonCard.module.scss'
import FooterBottom from "../footerBottom/footerBottom";
import FooterBottomData from '@/data/footerBottomData/footerBottomData.json'
import FooterSocialBar from "../footerSocialBar/footerSocialBar";

const Footer = () => {
  return (
    <>
      <footer
        class=" md:container md:mx-auto bg-neutral-200 text-center text-black lg:bg-white md:bg-white bg:white md:text-black lg:text-left">
        


        <div class="mx-6 py-10 text-center md:text-left justify-center">
          <div class=" w-[100%] items-center flex flex-col md:flex-row justify-center md:justify-center ">

            <div className="w-[20%] flex justify-center">
              <div class="">
                <div
                  class="mb-4 flex items-center justify-center md:jusify-start">
                  <Image class={styles.logo} src={logo} />

                </div>
                <div>
                <p className={`${styles.description} text-s md:text-sm`} >
                  Where the lavishness of luxury meets the warmth of authentic African hospitality. Discover the true serenity and comfort of Malawi.
              
                </p>
                <div className="md:mt-5 md:justify-start">
                  <FooterSocialBar/>
                </div>
                <div className="md:mt-5 justify-center">
                <p class="mb-4">
                  <a href="#!" className ={`${styles.serendib} text-xs md:text-base uppercase`}>
                  serendib home</a
                  >
                </p>
                </div>
                </div>
              </div>
             
            </div>
            

            <div className="w-[20%]  flex justify-center md:mt-20 ">
              <div class="">
                <h6
                  class={`${styles.linkHeading} text-s mb-4 flex justify-center font-semibold uppercase md:justify-start`}>
                  Quick Links
                </h6>
                <p class="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs text-black md:text-black lg:text-black md:text-sm`}
                  >Home</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs text-black md:text-black lg:text-black md:text-sm`}
                  >Accomodation</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs text-black md:text-black lg:text-black md:text-sm`}
                  >Experience</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs text-black md:text-black lg:text-black md:text-sm`}
                  >About</a
                  >
                </p>
                <p className="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs text-black md:text-black lg:text-black md:text-sm`}
                  >conference</a
                  >
                </p>
                <p className="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs  text-black md:text-black lg:text-black md:text-sm`}
                  >Gallery</a
                  >
                </p>
                <p className="mb-4">
                  <a href="#!" class={`${styles.linkSubHeadings} text-xs text-black md:text-black lg:text-black md:text-sm`}
                  >Contact</a
                  >
                </p>
              </div>
            </div>

            <div className="w-[20%] flex justify-center">
              <div class=" ">
                <h6
                  class={`${styles.linkHeading2} mb-4 flex justify-center font-semibold uppercase md:justify-start`}>
                  Experience
                </h6>
                <p class="mb-4">
                  <a href="#!" class=" text-xs text-black-600 md:text-black-600 md:text-sm"
                  >Namalenje Dinner</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-xs text-black-600 md:text-black-600 md:text-sm"
                  >Dinning</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-xs text-black-600 md:text-black-600 md:text-sm"
                  >Meeting</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-xs text-black-600 md:text-black-600 md:text-sm"
                  >Activity</a
                  >
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-xs text-black-600 md:text-black-600 md:text-sm"
                  >Event</a
                  >
                </p>
              </div>
            </div>

            <div className=" w-[40%] flex justify-center md:mt-20">

              <div className="">
                <h1
                  class={`${styles.SignUpHeadline} mb-4 flex justify-center font-semibold uppercase md:justify-start md:mt-6`}>
                  sign up to our
                </h1>
                <h1
                  class={`${styles.SignUpHeadline2} mb-4 flex font-semibold uppercase md:justify-start`}>
                  newsletter
                </h1>
                <div>
                  <div class="mb-4 flex justify-center">
                    <input
                      class=" justify-center peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder="yourname@gmail.com"
                    />
                    <button class="bg-button-color  md:text-white text-white py-2 px-4 border md:ml-2">
                      Send
                    </button>
                  </div>
                </div>
                <div>
                <p class={`${styles.svgNameEmail} mb-4 flex items-center justify-center md:justify-start md:mt-20`}>
                  <svg className={styles.svgEmail}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  reservation@serendibhotel.com
                </p>
                </div>
                <div className="md:ml-3">
                <p class={`${styles.svgNameContact} mb-4 flex items-center justify-center md:ml-80  md:justify-start`}>
                  <svg className={styles.svgContact}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                +265 885 976 419
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className=' py-4 px-4 '>
        <div className='flex  flex-row  justify-center md:justify-start items-center md:flex-row ' >
            {FooterBottomData.map((cv, i) => (
                <FooterBottom key={i} imagelink={cv.imagelink} title={cv.title} />
              ))}
          </div>
        </div>

        <div
          class="flex items-center justify-center border-b-2 border-neutral-300 p-6 dark:border-neutral-300 lg:justify-between">
            </div>
        <div class="bg-white p-6 text-center md:bg-w ">
          <span>© 2023 seredip Hotels. All Rights Reserved. A Creative Hub Website.</span>
          <a
            class="font-semibold text-neutral-600 dark:text-neutral-400"
            href=""
          ></a
          >
        </div>

        
      </footer>
    </>
  );

};

export default Footer;

