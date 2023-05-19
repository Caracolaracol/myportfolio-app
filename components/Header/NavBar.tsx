/* import { useAppSelector } from "@/hooks/hooks" */
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"


function NavBar() {
   /*  const router = useRouter() */
/*     const language = useAppSelector(state => state.language.value)
    const location = useAppSelector(state => state.data.locationSection)
 */
    const language = 'EN'
    const location = '/portfolio'
    const navNames = [
        {
            name: "portfolio",
            nameES: "portafolio",
            direccion: "/portfolio"
        },
        {
            name: "blog",
            nameES: "blog",
            direccion: '/blog'
        },
        {
            name: "about",
            nameES: "sobre mi",
            direccion: '/about'
        },
    ]
    const styles = 'tablet:text-xs laptop:text-lg self-center text-center font-tommyregular hover:text-naranjalink'
    
    return (
        <nav className='laptop:max-w-[15rem] laptop:min-w-[15rem] flex items-center'>
           
            <ul className='flex flex-row justify-evenly'>
                {
                    navNames.map(s => (
                        <li key={s.name} className='laptop:max-w-[4.8rem] laptop:min-w-[4.8rem] text-center showOpacity1'>
                            <Link
                                
                                href={s.direccion}
                                className={ `${styles} ${location == s.direccion ? 'text-fucsiadark dark:!text-fucsia' : ''} `
                                } 
                            >
                                {language == 'EN' ? s.name : s.nameES}
                            </Link>
                        </li>
                    ))
                }  
            </ul>
        </nav>
    )
}

export default NavBar