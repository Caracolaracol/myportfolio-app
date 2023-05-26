'use client'
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import logoCaracol from '@/public/caracolaracol.png'

import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import TooltipNav from './TooltipNav';

/* import NavBar from '../NavBar'
import NavBarMobile from '../NavBarMobile'; */
/* 
import { changeDarkMode } from '@/store/darkModeSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { changeLanguage } from '@/store/languageSlice'; */


function Header() {


    /* const dispatch = useAppDispatch()
    const darkMode = useAppSelector(state => state.darkMode.value)
    const language = useAppSelector((state) => state.language.value)

    const handler = () => {
        if (darkMode == true) {
            localStorage.setItem('darkmode', 'false')
            dispatch(changeDarkMode(false))
        } else {
            localStorage.setItem('darkmode', 'true')
            dispatch(changeDarkMode(true))
        }
    }
    const languageHandler = () => {
        dispatch(changeLanguage(language == 'EN' ? 'ES' : 'EN'))
    } */


  return (
      <div id='header' className='fixed z-10 w-[99vw] tablet:w-screen bg-[#e3e0ed] dark:bg-[#0c0913] '>
          <header className='flex flex-row justify-between  items-center border-b-[1px] border-fucsia dark:border-fucsiadark border-opacity-50 dark:border-opacity-70 mx-2 tablet:mr-6 tablet:ml-[2%] laptop:ml-[27vw] desktop:ml-[21.6rem]'>
              <div className='ml-2 laptop:ml-12 z-[99] laptop:invisible'>
                  <Link href='/'>
                      <Image src={logoCaracol} className='w-20 tablet:w-[5.5rem] drop-shadow-md showOpacityShort z-[99]' alt='caracol' priority />
                  </Link>
              </div>
              <div className="hidden tablet:mr-4 laptop:flex"> 
                  <NavBar />
                  <div className='items-center flex mx-4 max-h-[3rem] min-h-[3rem] border-l-[1px] dark:border-opacity-70 border-l-fucsia dark:border-l-fucsia self-center'></div>
                  <TooltipNav />

                  {/* 
                    <Image src={cast} alt='castnia moth' className={`w-10 h-auto ${language == 'ES' ? 'hidden' : ''} cursor-pointer `} /> mt-2 
                        <Image src={actia} alt='actias luna' className={`w-10 h-auto ${language == 'EN' ? 'hidden' : ''} cursor-pointer `} />
                        <div className=''>
                            <p className='flex font-tommyregular text-[0.7rem] opacity-80 antialiased text-center tablet:text-whitem dark:text-fucsia hover:cursor-pointer hover:text-naranjad px-2  rounded-2xl active:bg-violetadl transition-colors active:bg-opacity-70 tracking-wider' >{language == 'ES' ? 'English' : 'Español'}</p>

                        </div> 
                    */}
              </div>
              <div className='laptop:hidden flex'>
                  <div key='menunav' className='laptop:hidden flex flex-row showOpacityShort'>
                      <NavBarMobile />
                  </div>
              </div>
          </header>
      </div>
  )
}

export default Header