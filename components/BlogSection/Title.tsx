'use client'
import Link from "next/link"
import next from '@/public/assets/extraAssets/proximo.png'
import prev from '@/public/assets/extraAssets/previo.png'
import Image from "next/image"

import ProjectsButton from "../ProjectSection/ProjectsButton"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, languageAtom, showSideMenuAtom } from "@/app/Store"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"


function Title({name , idNext, idPrev, nameES, prevData, nextData}:any) {
    const pathname = usePathname()
    const [isShowingSideMenu, setIsShowingSideMenu] = useAtom(isShowingSideMenuAtom)
    const setShowSideMenu = useSetAtom(showSideMenuAtom)
    const setHideSideMenuAnimation = useSetAtom(hideSideMenuAnimationAtom)
    const language = useAtomValue(languageAtom)
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const location = '/blog'

    useEffect(() => {

        idNext == null ? setAtEnd(true) : setAtEnd(false)
        idPrev == null ? setAtStart(true) : setAtStart(false)
    },[idPrev, idNext,])
    
    const handlerSide = () => {
        if (isShowingSideMenu == false){
            setShowSideMenu(true)
            setIsShowingSideMenu(true)
        } else {
            setHideSideMenuAnimation(true)
            setTimeout(() => {
                setShowSideMenu(false)
                setIsShowingSideMenu(false)
                setHideSideMenuAnimation(false)  
            }, 452);
        }
    }

    useEffect(() =>{
        idNext == null ? setAtEnd(true) : setAtEnd(false)
        idPrev == null ? setAtStart(true) : setAtStart(false)
    },[idNext, idPrev])
    return (
        <div className="flex justify-between items-center  border-b-[1px] border-spacing-2 border-negrod dark:border-b-blancon !border-opacity-30 pb-3 mb-6">
            <ProjectsButton handlerSide={handlerSide} language={language}/>

            {/* <div onClick={sideMenuHandler} className="laptop:hidden shrink  w-9 min-w-9 tablet:w-9 tablet:min-w-9 min-h-9 bg-violeta dark:bg-violeta dark:hover:bg-violetadl active:bg-violetaactive dark:active:bg-violetaactive circleround group transition-colors">
                <button className="w-full h-full pr-[2px] tablet:p-[3px] tablet:pr-[5px]">
                    <h2 className="font-tommy text-2xl tablet:text-3xl text-naranja group-hover:text-fucsia ">{'{'}</h2>
                    <h2 className="font-tommy text-2xl tablet:text-3xl text-naranja group-hover:text-fucsia hidden">{'}'}</h2>
                </button>
            </div> */}
            <div className="pl-2 h-[2.7rem] flex items-center">
                <h1 key={name} className={`text-xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-tommy  transitionshort`}>{language == 'EN' ? name : nameES == undefined ? name : nameES} </h1>
            </div>
            <div className='flex justify-end items-center grow gap-2 tablet:pb-0'>
                <div className="w-8 min-w-8 tablet:w-12 tablet:min-w-12 min-h-12 rounded-full">
                    {atStart ? null : <Link href={`${location}/${idPrev ? idPrev : null}`}>
                        <button key={name}
                            className={`p-1  font-tommyregular  tablet:text-xl bg-violetad circleround bg-violeta dark:bg-violeta dark:hover:bg-violetadl dark:hover:text-fucsia dark:text-blancol  hover:bg-violetadl hover:text-texth active:bg-violetaactive dark:active:bg-violetaactive`}>
                            <Image src={prev} alt='anterior proyecto' width={30} height={45} className={`p-1 dark:active:brightness-50  `} />
                        </button>
                    </Link>
                    }
                </div>

                <div className="w-8 min-w-8 tablet:w-12 tablet:min-w-12 min-h-12 rounded-full">
                    {atEnd ? null : <Link href={`${location}/${idNext}`} >
                        <button key={name}
                            className=' p-1  font-tommyregular tablet:text-xl circleround bg-violeta dark:bg-violeta dark:hover:bg-violetadl dark:hover:text-fucsia dark:text-blancol  hover:bg-violetadl hover:text-texth active:bg-violetaactive dark:active:bg-violetaactive'>
                            <Image src={next} alt='siguiente' width={30} height={45} className={`p-1 dark:active:brightness-50 `} />
                        </button>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default Title