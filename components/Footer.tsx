/* import { useAppDispatch, useAppSelector } from '@/hooks/hooks' */
import { useState } from 'react'

function Footer() {
/*     const dispatch = useAppDispatch()
    const language = useAppSelector((state) => state.language.value)
    const darkMode = useAppSelector(state => state.darkMode.value) */


   
 
    return (
        <div className='ml-[2%] h-[4rem] tablet:h-[5rem] absolute bottom-0 w-[95%] tablet:w-[95%]'>
            <footer className='flex h-[4rem] justify-end tablet:justify-between mx-3 tablet:mx-12'>
                <div className='h-[3rem] w-full border-t-[1px] border-azuld dark:border-fucsia border-opacity-25'>
                    <div className='flex font-tommy text-xs laptop:text-sm tracking-wider antialiased justify-between pt-4'>
                        <div>
                            <p className='hidden tablet:block'>Site made with NextJs || Tailwind || Redux </p>
                        </div>
                        <div className='flex gap-2'>
                            <p> Caracolaracol</p>
                            <strong>{` // `}</strong>
                            <p>Agustín Rojas</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer