'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { languageAtom } from "@/app/Store"
import { useAtomValue } from "jotai"

import { NAV_NAMES } from "@/constants/constants"


function NavBar() {
    const pathname = usePathname()
    const language = useAtomValue(languageAtom)
    
    const styles = 'tablet:text-xs laptop:text-lg desktop:text-xl self-center text-center font-tommyregular hover:text-darkpurple dark:hover:text-timberwolf'
    
    return (
        <nav className='laptop:max-w-[15rem] laptop:min-w-[15rem] flex items-center'>
           
            <ul className='flex flex-row justify-evenly'>
                {
                    NAV_NAMES.map(s => {
                        const isActive = pathname.startsWith(s.direccion);

                        return(

                            <li key={s.name} className='laptop:max-w-[4.8rem] laptop:min-w-[4.8rem] text-center showOpacity1'>
                            <Link
                                
                                href={s.direccion}
                                className={ `${styles} ${isActive ? '!text-ocre dark:!text-ocre' : ''} `
                            } 
                            >
                                {language == 'EN' ? s.name : s.nameES}
                            </Link>
                        </li>
                        )
                        })
                }  
            </ul>
        </nav>
    )
}

export default NavBar