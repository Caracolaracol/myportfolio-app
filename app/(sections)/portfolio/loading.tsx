import Image from 'next/image'
import React from 'react'

import caracol from '/public/assets/images/logo2.jpg'

function loading() {
  return (
    <div className='dark:text-blancol gradient_dia dark:gradient_noche absolute h-screen w-screen flex justify-center items-center'>
        <div className='w-12 flex flex-col justify-center items-center'>
            <Image src={caracol.src}  className='loader_icon w-12 h-12 mb-4 rounded-full' alt='loading logo' width='48' height='48'/>
            <h1 className='font-chrono text-xl'>Loading...</h1>
        </div>
      </div>
  )
}

export default loading