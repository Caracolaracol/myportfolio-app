'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link";

import Subtitle from "./Subtitle";
import ItemList from "./ItemList";

import { LINKLIST } from "@/constants/constants";
import { useAtom, useAtomValue } from "jotai";
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, locationAtom, showSideMenuAtom } from "@/app/Store";
import { useParams, usePathname } from "next/navigation";
import { getProjects, getProjectsDataArray } from "@/app/api";


function SideMenu(props:any) {
  const wrapperRef = useRef<any>(null)
  const ulRef = useRef<any>(null)
  const [showSideMenu, setShowSideMenu] = useAtom(showSideMenuAtom)
  const [isShowingSideMenu, setIsShowingSideMenu] = useAtom(isShowingSideMenuAtom)
  const [hideSideMenuAnimation, setHideSideMenuAnimation] = useAtom(hideSideMenuAnimationAtom)
  const location = useAtomValue(locationAtom)
  const params = useParams()
  const pathname = usePathname()
  const [dataProjects, setDataProjects] = useState<any>([])
  const [blogEntries, setBlogEntries] = useState<any>([])
  const [previousId, setPreviousId] = useState<any>()
  const [nextId, setNextId] = useState<any>()
  const [isOutside, setIsOutside] = useState<Boolean>(true)

  console.log(pathname.includes('/portfolio'))
  
  // Projects State
  useEffect(() => {
    const fetchProjectNames = async () => {
      const data = await getProjectsDataArray()
      setDataProjects(data.namesArrayData)
    }
    const fetchBlogEntries = async () => {
      const data = await getProjects()
      setBlogEntries(data)
    }
    fetchProjectNames()

/*     if (Object.entries(params).length === 0) {
      setIsOutside(true)
    } else {
      setIsOutside(false)
        } */
    /* location == '/blog' ? fetchBlogEntries() : '' */

/*     const fetchData = async () => {
      const data = await getProjectsDataArray()
      setDataProjects(data.namesArrayData)
      if (Object.entries(params).length === 0) {
        setIsOutside(true)
      } else {
        const idData = await getData(params)
        const { idPreviousProject, idNextProject } = await pageControl(idData.previousProject, idData.nextProject, idData.lastArrayIndex, idData.indexOfProject)
        setPreviousId(idPreviousProject)
        setNextId(idNextProject)
        setIsOutside(false)
      }
    }
    fetchData()
    */
  }, [ getProjects, getProjectsDataArray])

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

  }, [wrapperRef, isShowingSideMenu,setHideSideMenuAnimation, setIsShowingSideMenu,setShowSideMenu, dataProjects]);
  //

  return (
    <aside
      ref={wrapperRef}
      className={`${showSideMenu ? "!block showsidemenu" : ""} ${hideSideMenuAnimation ? "hidesidemenu" : ""
        } hidden laptop:showsidemenu rounded-r-lg  overflow-y-scroll hide_scrollbar laptop:block  w-[18rem] h-[70vh] laptop:h-[44rem] laptop:w-[25vw] desktop:w-[20rem] fixed top-[10rem] tablet:top-[12rem] laptop:top-[6.9rem] desktop:top-[6.9rem] left-0 z-30 dark:bg-blancomenu bg-blancod laptop:bg-opacity-40 bg-opacity-100 shadow-xl laptop:shadow-none laptop:dark:bg-negron laptop:dark:bg-opacity-70 `}
    >
      <div className="pl-4 pb-4 rounded-tr-sm rounded-br-sm max-h-[100%] overflow-y-scroll hide_scrollbar">
        <div ref={ulRef} className="flex flex-row">
          {pathname.includes('/portfolio') && (
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
                      nextData={nextId}
                      outside={isOutside}
                      id={filtered.id}
                      location={location}
                      projectname={params.project}
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
                      nextData={nextId}
                      outside={isOutside}
                      id={filtered.id}
                      location={location}
                      projectname={params.project}
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
                      nextData={nextId}
                      outside={isOutside}
                      id={filtered.id}
                      location={location}
                      projectname={params.project}
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
                      nextData={nextId}
                      outside={isOutside}
                      id={filtered.id}
                      location={location}
                      projectname={params.project}
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
                      nextData={nextId}
                      outside={isOutside}
                      id={filtered.id}
                      location={location}
                      projectname={params.project}
                      name={filtered.name}
                    />
                  ))}
              </ul>
            </div>
          )}
          {pathname.includes("/about") && (
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

          {pathname.includes("/blog") && (
            <>
              <Subtitle>Blog Entries</Subtitle>
              <ul>
                {blogEntries &&
                  blogEntries.map((element: any) => (
                    <Link
                      href={
                        isOutside ? `blog/${element.id}` : `${element.id}`
                      }
                      key={element.id}
                    >
                      <li key={element.id} className="font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:text-negron laptop:dark:text-blancon dark:hover:text-naranjalink hover:text-naranjalink">
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