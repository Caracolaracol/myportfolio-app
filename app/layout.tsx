import Image from 'next/image';
import localFont from 'next/font/local';

import myself1 from 'public/assets/images/yo.jpg'
import myself2 from 'public/assets/images/yo2.jpg'

import './globals.css'

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
  src: '../public/fonts/ChronoType.ttf',
  display: 'swap',
  variable:'--font-chrono'
});
const tommy = localFont({
  src: '../public/fonts/MADE Tommy Soft Medium PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommy'
});
const tommyLight = localFont({
  src: '../public/fonts/MADE Tommy Soft Light PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyLight'
});
const tommyRegular = localFont({
  src: '../public/fonts/MADE Tommy Soft Regular PERSONAL USE.otf',
  display: 'swap',
  variable:'--font-tommyRegular'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  
  const styles = 'font-chrono text-2xl tablet:text-3xl laptop:text-4xl'

  return (
    <html lang="en" className={`${chronoType.variable} ${tommy.variable} ${tommyLight.variable} ${tommyRegular.variable} `}>
      <body>
        <div className="flex flex-col gradient_dia dark:gradient_noche select-none h-screen justify-center">
          <div className=" flex flex-col justify-center self-center items-center transition_verylong mb-12">
            <header className="flex w-64 h-[237px] justify-center mb-4">
              <div className="relative w-full h-full rounded-full flex justify-center items-end">
                <Image
                  alt="Myself with nature background"
                  className="round_img1"
                  src={myself2}
                />
                <Image
                  alt="Myself with other nature background "
                  className="round_img2"
                  src={myself1}
                />
              </div>
            </header>
            {children}
            <footer className="flex flex-col justify-between text-center dark:text-blancon mb-8 z-50">
              <div className="flex gap-4 shrink self-center">
                <a
                  className={styles}
                  href="https://github.com/Caracolaracol"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  className={styles}
                  href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a
                  className={styles}
                  href="https://www.instagram.com/caracol.___/"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className={styles}
                  href="https://drive.google.com/file/d/1leg_c4dXK_TOjvJ2J35yD0Hf5FyeqX8f/view?usp=sharing"
                  target="_blank"
                >
                  CV
                </a>
              </div>
              <div className={`flex justify-center gap-3`}></div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
