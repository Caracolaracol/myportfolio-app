import React from 'react'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Index'

import localFont from 'next/font/local';

import '../globals.css'
import Providers from '../Providers';
import SideMenu from '@/components/SideMenu/Index';

export const metadata = {
  title: 'Caracolaracol || Creative Developer',
  description: 'Portfolio of caracolaracol, web developer',
  generator: 'Caracolaracol',
  applicationName: 'Caracolaracol',
  referrer: 'origin-when-cross-origin',
  keywords: ['Caracolaracol', 'Developer', 'Portfolio'],
  authors: [{ name: 'Agustin' }, { name: 'Agustin', url: 'https://nextjs.org' }],
  creator: 'Agustin Rojas',
  publisher: 'Agustin Rojas',
}

const chronoType = localFont({
  src: '../../public/fonts/ChronoType.ttf',
  display: 'swap',
  variable:'--font-chrono',
  adjustFontFallback: 'Times New Roman',
  preload:false
});
const tommy = localFont({
  src: '../../public/fonts/MADE Tommy Soft Medium PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommy',
  preload:false
});
const tommyLight = localFont({
  src: '../../public/fonts/MADE Tommy Soft Light PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyLight',
  preload:false
});
const tommyRegular = localFont({
  src: '../../public/fonts/MADE Tommy Soft Regular PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyRegular',
  preload:false
});
const tommyBold = localFont({
  src: '../../public/fonts/MADE TOMMY ExtraBold_PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyBold',
  preload:false
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'  className={`${chronoType.variable} ${tommy.variable} ${tommyLight.variable} ${tommyRegular.variable} ${tommyBold.variable} `}>
      <body>
        <Providers>
            <div className="gradient_dia dark:text-blancon dark:gradient_noche relative min-h-screen flex flex-col justify-between" >
              <div>
                <Header />
                <div className="pb-[7rem] tablet:pb-[5rem]" >
                  <div className='top-0 h-20 tablet:h-[5.9rem]'>
                  </div>
                  <div className='flex justify-center mx-auto laptop:pl-[25vw] desktop:pl-[20.1rem] w-[89%] tablet:w-[82.6%] laptop:w-[90%] desktop:w-[80%]'>
                    {children}
                    <SideMenu />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout