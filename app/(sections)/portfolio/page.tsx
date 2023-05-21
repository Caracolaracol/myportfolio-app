'use client'
import React from 'react'

import Image from 'next/image'

import {  useAtomValue } from 'jotai'
import { languageAtom } from '@/app/Store'

import flor from 'public/assets/images/flor1.png'
import ciervovolante from 'public/assets/images/ciervovolante.png'


export default function Page() {
  const language = useAtomValue(languageAtom)

  
  return (
    <div className="showOpacity1">
      <div className="absolute flex justify-center items-center m-[5vw] top-0 right-0 bottom-0 left-0 laptop:hidden ">
        <div className="flex items-center justify-center desktop:max-w-[50rem] pb-4 bg-violeta bg-opacity-20 p-2 rounded-md">
          <div className='flex items-center flex-col '>
            <p className='font-tommyregular tracking-wider text-2xl tablet:text-3xl'>{language == "EN"
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
            </p>
            <div className='flex items-center flex-col mt-4'>
              <div /* onClick={handlerSide} */ className="flex justify-center cursos bg-violetad bg-violeta  dark:bg-violeta filtromorado w-11 h-11 tablet:w-14 tablet:h-14 items-center active:bg-violetaactive dark:active:bg-violetaactive transition-colors cursor-pointer rounded-full -translate-x-[1px]">
                <p className="text-naranjad text-naranja dark:text-naranja font-tommybold font-black text-[1.5rem] tablet:text-[2rem] svg group-hover:text-fucsia">{`{ }`}</p>
              </div>
              <div /* onClick={handlerSide}  */ className="cursor-pointer min-w-[59px]">
                <p className="font-tommyregular text-[0.9rem] opacity-80 antialiased text-center tablet:text-whitem dark:text-fucsia transition-colors tracking-wider ">
                  {language == "EN" ? "projects" : "proyectos"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={flor}
              alt="una flor enredadera"
              className="max-w-[8rem] tablet:max-w-[11rem] laptop:max-w-[13rem] desktop:max-w-[16rem] opacity-70"
            />
          </div>
        </div>
      </div>

      <div className="hidden laptop:flex items-center justify-center">
        <div className='flex items-center my-[25vh]'>
          <p className="text-3xl font-tommyregular tracking-wider">
            {language == "EN"
              ? `Welcome to my portfolio! 🐸.`
              : `Bienvenidx a mi portafolio! 🐸. `}
            {language == "EN"
              ? ` Feel free to navigate between the sections as you like.`
              : ``}
          </p>
          <Image
            src={ciervovolante}
            alt="un ciervo volante macho"
            className="max-w-[8rem] tablet:max-w-[11rem] laptop:max-w-[13rem] desktop:max-w-[16rem] opacity-70"
          />
        </div>
      </div>
    </div>

  )
}

