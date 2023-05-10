import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import chinita from 'public/assets/images/psilo.png'
import ciervovolante from 'public/assets/images/ciervovolante.png'
import brote from 'public/assets/images/brote.png'


export default function page() {
    const language = 'EN'

  return (
    <div className="showproject">
        
        <div>
          <div className="font-tommyregular tracking-wider">
            <div className="flex items-center justify-center m-auto desktop:max-w-[50rem] pb-4">
              <p className="text-2xl laptop:hidden">
                
                {language == "EN"
                  ? `Tap below to see my`
                  : `Presiona abajo para ver mis trabajos como`}
                <strong className="font-bold">
                  {language == "EN" ? " web development" : " desarrollador web"}
                </strong>
                {language == "EN" ? " and " : ", y como "}
                <strong className="font-bold">
                  {language == "EN" ? "art" : "artista."}
                </strong>
                {language == "EN" ? " projects " : ""}
                <div
                  
                  className="laptop:hidden shrink flex flex-col items-center  group mt-4 mx-auto"
                >
                  <div /* onClick={handlerSide} */ className="flex justify-center cursos bg-violetad bg-violeta  dark:bg-violeta filtromorado w-11 h-11 tablet:w-14 tablet:h-14 items-center active:bg-violetaactive dark:active:bg-violetaactive transition-colors cursor-pointer rounded-full -translate-x-[1px]">
                    <p className="text-naranjad text-naranja dark:text-naranja font-tommybold font-black text-[1.5rem] tablet:text-[2rem] svg group-hover:text-fucsia">{`{ }`}</p>
                  </div>
                  <div /* onClick={handlerSide}  */className="cursor-pointer min-w-[59px]">
                    <p className="font-tommyregular text-[0.9rem] opacity-80 antialiased text-center tablet:text-whitem dark:text-fucsia transition-colors tracking-wider ">
                      {language == "EN" ? "projects" : "proyectos"}
                    </p>
                  </div>
                </div>
                
              </p>
              <p className="hidden laptop:block text-2xl">
                {language == "EN"
                  ? `Welcome to my portfolio, you will find all my works as a `
                  : `Bienvenido a mi portafolio donde verás todos mis trabajos como `}
                <strong className="font-bold">
                  {language == "EN" ? "web developer" : "desarrollador web"}
                </strong>
                {language == "EN" ? " but also as an " : ", pero también como "}
                <strong className="font-bold">
                  {language == "EN" ? "artist." : "artista."}
                </strong>
              </p>
              <Image
                src={chinita}
                alt="una chinita blanca"
                className="max-w-[8rem] tablet:max-w-[11rem] laptop:max-w-[13rem] desktop:max-w-[16rem] opacity-70"
              />
            </div>

            <div className="flex items-center justify-center m-auto desktop:max-w-[50rem] pb-6">
              <Image
                src={ciervovolante}
                alt="un ciervo volante"
                className="max-w-[8rem] tablet:max-w-[12rem] laptop:max-w-[14rem] desktop:max-w-[18rem] opacity-70"
              />
              <p className="mb-2 text-2xl ml-2">
                {language == "EN"
                  ? "or begin with the"
                  : "o comienza con el"}
                <strong className="font-bold">
                  {language == "EN" ? " last project" : " último proyecto"}
                </strong>{" "}
                {language == "EN"
                  ? " I made by pressing"
                  : " que hice desde"}
                   {/* <Link href={`${location}/${allProjectsDataArray[0].id}`}> */}

                <strong className="font-bold text-fucsia hover:text-naranja">
                  {language == "EN" ? " this link to view" : " este link"}
                </strong>
                   {/* </Link> */}
              </p>
            </div>
            <div>
              <Image src={brote} alt="ilustracion de un brote de helecho" className="opacity-70 max-w-[60vw] m-auto tablet:max-w-[50vw] laptop:max-w-[35vw] desktop:max-w-[25vw] laptop:mb-24" />
            </div>
            
          </div>
        </div>
      </div>
  )
}

