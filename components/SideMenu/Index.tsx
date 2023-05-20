'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link";

import Subtitle from "./Subtitle";
import ItemList from "./ItemList";

import { LINKLIST } from "@/constants/constants";
import { atom, useAtom, useAtomValue } from "jotai";
import { languageAtom, locationAtom } from "@/app/Store";
import { useParams } from "next/navigation";

const showSideMenuAtom = atom(false)
const isShowingSideMenuAtom = atom(false)
const hideSideMenuAnimationAtom = atom(false)

function SideMenu(props:any) {
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const [showSideMenu, setShowSideMenu] = useAtom(showSideMenuAtom)
    const [isShowingSideMenu, setIsShowingSideMenu] = useAtom(isShowingSideMenuAtom)
    const [hideSideMenuAnimation, setHideSideMenuAnimation] = useAtom(hideSideMenuAnimationAtom)
    const language = useAtomValue(languageAtom)
    const location = useAtomValue(locationAtom)
    const params = useParams()
    const [dataProjects, setDataProjects] = useState<any>([])
    const [blogEntries, setBlogEntries] = useState<any>([])
    
    const itemstyle = "font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:text-negron laptop:dark:text-blancon dark:hover:text-naranjalink hover:text-naranjalink"

    // Projects State
    useEffect(() => {
        setDataProjects(props.projects)
        location == '/blog' ? setBlogEntries(props.blogEntries) : ''
    },[dataProjects, location, props.blogEntries, props.projects])

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

    }, [wrapperRef, isShowingSideMenu, dataProjects]);
    //
    
    return (
      <aside
        ref={wrapperRef}
        className={`${showSideMenu ? "!block showsidemenu" : ""} ${
          hideSideMenuAnimation ? "hidesidemenu" : ""
        } hidden laptop:showsidemenu rounded-r-lg  overflow-y-scroll hide_scrollbar laptop:block  w-[18rem] h-[70vh] laptop:h-[44rem] laptop:w-[25vw] desktop:w-[20rem] fixed top-[10rem] tablet:top-[12rem] laptop:top-[6.9rem] desktop:top-[6.9rem] left-0 z-30 dark:bg-blancomenu bg-blancod laptop:bg-opacity-40 bg-opacity-100 shadow-xl laptop:shadow-none laptop:dark:bg-negron laptop:dark:bg-opacity-70 `}
      >
        <div className="pl-4 pb-4 rounded-tr-sm rounded-br-sm max-h-[100%] overflow-y-scroll hide_scrollbar">
          <div ref={ulRef} className="flex flex-row">
            {location == "/portfolio" && (
              <div>
                <Subtitle>Websites</Subtitle>
                <ul>
                  {dataProjects
                    .filter(
                      (element: any) => element.projectType == "real websites"
                    )
                    .map((filtered: any) => (
                      <ItemList
                        key={filtered.id}
                        nextData={props.nextData}
                        outside={props.outside}
                        id={filtered.id}
                        location={location}
                        projectname={params.project}
                        itemstyle={itemstyle}
                        name={filtered.name}
                      />
                    ))}
                </ul>
                <Subtitle>Fictional Websites</Subtitle>
                <ul>
                  {dataProjects
                    .filter(
                      (element: any) =>
                        element.projectType == "fictional websites"
                    )
                    .map((filtered: any) => (
                      <ItemList
                        key={filtered.id}
                        nextData={props.nextData}
                        outside={props.outside}
                        id={filtered.id}
                        location={location}
                        projectname={params.project}
                        itemstyle={itemstyle}
                        name={filtered.name}
                      />
                    ))}
                </ul>
                <Subtitle>Coding Projects</Subtitle>
                <ul>
                  {dataProjects
                    .filter(
                      (element: any) => element.projectType == "coding projects"
                    )
                    .map((filtered: any) => (
                      <ItemList
                        key={filtered.id}
                        nextData={props.nextData}
                        outside={props.outside}
                        id={filtered.id}
                        location={location}
                        projectname={params.project}
                        itemstyle={itemstyle}
                        name={filtered.name}
                      />
                    ))}
                </ul>
                <Subtitle>Videos</Subtitle>
                <ul>
                  {dataProjects
                    .filter((element: any) => element.projectType == "Videos")
                    .map((filtered: any) => (
                      <ItemList
                        key={filtered.id}
                        nextData={props.nextData}
                        outside={props.outside}
                        id={filtered.id}
                        location={location}
                        projectname={params.project}
                        itemstyle={itemstyle}
                        name={filtered.name}
                      />
                    ))}
                </ul>
                <Subtitle>Art</Subtitle>
                <ul>
                  {dataProjects
                    .filter(
                      (element: any) =>
                        element.projectType == "Projectos musicales" ||
                        element.projectType == "Artes Visuales" ||
                        element.projectType == "Fotografia Macro"
                    )
                    .map((filtered: any) => (
                      <ItemList
                        key={filtered.id}
                        nextData={props.nextData}
                        outside={props.outside}
                        id={filtered.id}
                        location={location}
                        projectname={params.project}
                        itemstyle={itemstyle}
                        name={filtered.name}
                      />
                    ))}
                </ul>
              </div>
            )}
            {location == "/about" && (
              <>
                <Subtitle>Links</Subtitle>
                <ul>
                  {LINKLIST.map((el) => {
                    return (
                      <li key={el.name}>
                        <a
                          className="font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:text-negron laptop:dark:text-blancon dark:hover:text-naranjalink hover:text-naranjalink"
                          href={el.link}
                          target="_blank"
                        >
                          {el.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            {location == "/blog" && (
              <>
                <Subtitle>Blog Entries</Subtitle>
                <ul>
                  {blogEntries &&
                    blogEntries.map((element: any) => (
                      <Link
                        href={
                          props.outside ? `blog/${element.id}` : `${element.id}`
                        }
                        key={element.id}
                      >
                        <li key={element.id} className={itemstyle}>
                          -{" "}
                          {`${element.name} (${element.date[1]} ${element.date[0]})`}
                        </li>
                      </Link>
                    ))}
                </ul>
              </>
            )}
            {/* <p className="self-end text-naranja">▼</p> */}
          </div>
        </div>
      </aside>
    );
}

export default SideMenu