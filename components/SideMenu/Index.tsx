'use client'
import { useEffect, useRef } from "react"

import { useAtom } from "jotai"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showSideMenuAtom } from "@/app/Store"
import logoCaracol from '@/public/caracolaracol.png'
import MenuList from "./MenuList"
import Link from "next/link"
import Image from "next/image"

function SideMenu() {
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const [showSideMenu, setShowSideMenu] = useAtom(showSideMenuAtom)
    const [isShowingSideMenu, setIsShowingSideMenu] = useAtom(isShowingSideMenuAtom)
    const [hideSideMenuAnimation, setHideSideMenuAnimation] = useAtom(hideSideMenuAnimationAtom)

    // SHOW AND HIDE SIDE MENU HANDLER
  useEffect(() => {
    const sideMenuHandler = () => {
      if (isShowingSideMenu == true) {
        setHideSideMenuAnimation(true)
        setTimeout(() => {
          setShowSideMenu(false)
          setIsShowingSideMenu(false)
          setHideSideMenuAnimation(false)
        }, 452);
      }
    }
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        sideMenuHandler()
      }
      if (ulRef.current && ulRef.current.contains(event.target)) {
        sideMenuHandler()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [wrapperRef, isShowingSideMenu,setHideSideMenuAnimation, setIsShowingSideMenu,setShowSideMenu]);
  //


    return (
        <aside
            ref={wrapperRef}
            className={`${showSideMenu ? "!block showsidemenu" : ""} ${hideSideMenuAnimation ? "hidesidemenu" : ""
                } hidden laptop:showsidemenu  overflow-y-scroll hide_scrollbar laptop:block  w-[18rem] h-fit max-h-[80vh] laptop:h-full laptop:max-h-[100vh] laptop:w-[25vw] desktop:w-[20.1rem] fixed top-[10rem] tablet:top-[12rem] laptop:top-0 desktop:top-0 left-0 z-30 dark:bg-blancomenu bg-blancod laptop:bg-violeta shadow-xl laptop:shadow-none laptop:dark:bg-negron laptop:dark:bg-opacity-70`}
        >
                <div className='mx-2 border-b-[1px] border-fucsia dark:border-fucsiadark border-opacity-50 dark:border-opacity-70 z-[99]'>
                    <Link href='/'>
                        <Image src={logoCaracol} className='w-20 tablet:w-[5.5rem] drop-shadow-md showOpacityShort z-[99]' alt='caracol' priority />
                    </Link>
                </div>
            <div className="pl-[1.2rem] pt-[2.5rem] mb-4 rounded-tr-sm rounded-br-sm overflow-y-scroll hide_scrollbar">
                <div ref={ulRef} className="flex group">
                    
                    <MenuList />
                    <p className="hidden self-end text-fucsiadark opacity-90 group-hover:animate-bounce">▼</p>
                </div>
            </div>
        </aside>
    )
}


export default SideMenu