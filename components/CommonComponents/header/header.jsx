import React from 'react'
import logo from '../../../public/images/Logo/Lotus 2 (1).png'
import Image from 'next/image';
import styles from '../header/header.module.scss'

function Header() {
  return (
    <div>
        <div>
        <header className={styles.navbar}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4 bg-transparent ">
            
            <div className="hidden md:flex">
              <nav>
                <ul className="flex items-center space-x-4 md:space-x-16 md:justify-center">
                  <li><a href="#" className={styles.navbarHeadings}>ACCOMMODATIONS</a></li>
                  <li><a href="#" className={styles.navbarHeadings}>EXPERIENCE</a></li>
                  <li><a href="#" className={styles.navbarHeadings}>ABOUT</a></li>
                  <li><div className="flex items-center md:justify-center md:px-10 ">
              <Image className={styles.logoimg} src={logo}  />
            </div></li>
                  <li><a href="#" className={styles.navbarHeadings}>CONFERENCE</a></li>
                  <li><a href="#" className={styles.navbarHeadings}>GALLERY</a></li>
                  <li><a href="contact/contact" className={styles.navbarHeadings}>CONTACT</a></li>
                </ul>
              </nav>
            </div>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-white focus:outline-none">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
          </div>
        </header>


      </div>
    </div>
  )
}

export default Header