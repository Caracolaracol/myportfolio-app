'use client'
import { useEffect, useRef } from "react"

import { useAtom } from "jotai"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, showSideMenuAtom } from "@/app/Store"

import MenuList from "./MenuList"

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
                } hidden laptop:showsidemenu rounded-r-lg  overflow-y-scroll hide_scrollbar laptop:block  w-[18rem] h-fit max-h-[80vh] laptop:h-fit laptop:max-h-[70vh] laptop:w-[25vw] desktop:w-[20rem] fixed top-[10rem] tablet:top-[12rem] laptop:top-[6.9rem] desktop:top-[12rem] left-0 z-30 dark:bg-blancomenu bg-blancod laptop:bg-opacity-40 bg-opacity-100 shadow-xl laptop:shadow-none laptop:dark:bg-negron laptop:dark:bg-opacity-70 `}
        >
            <div className="pl-4 mb-4 rounded-tr-sm rounded-br-sm overflow-y-scroll hide_scrollbar">
                <div ref={ulRef} className="flex group">
                    <MenuList />
                    <p className="hidden self-end text-fucsiadark opacity-90 group-hover:animate-bounce">▼</p>
                </div>
            </div>
        </aside>
    )
}


export default SideMenu