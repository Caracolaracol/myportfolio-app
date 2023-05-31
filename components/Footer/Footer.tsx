/* import { useAppDispatch, useAppSelector } from '@/hooks/hooks' */
import { useState } from 'react'

function Footer() {
/*     const dispatch = useAppDispatch()
    const language = useAppSelector((state) => state.language.value)
    const darkMode = useAppSelector(state => state.darkMode.value) */


   
 
    return (
        <div className='ml-[2.5%] h-[4rem] tablet:h-[4rem] absolute bottom-0 w-[95%] tablet:w-[95%]'>
            <footer className='flex h-[4rem] justify-end tablet:justify-between laptop:ml-[20.5rem]'>
                <div className='h-[3rem] w-full border-t-[1px] border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70'>
                    <div className='flex font-tommyregular text-xs laptop:text-sm text-negrod tracking-wider antialiased justify-between pt-4'>
                        <div>
                            <p className='hidden tablet:block'> </p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='opacity-50 dark:text-blancon'>
                                Made by Agustín Rojas | Last Updated, May 2023
                            </p>
                            {/* <p> Site made by Caracolaracol</p>
                            <strong className='font-tommybold'>{` // `}</strong>
                            <p>Agustín Rojas</p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer