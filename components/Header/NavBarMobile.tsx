import { useEffect, useState } from 'react';

import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import actia from '@/public/assets/images/actia.png'
import cast from '@/public/assets/images/castn.png'
import maripn from '@/public/assets/images/maripn.png'
import marip from '@/public/assets/images/marip.png'
import { useTheme } from 'next-themes';
import { useAtom } from 'jotai';
import { languageAtom } from '@/app/Store';
import { NAV_NAMES } from '@/constants/constants';

function NavBarMobile() {
    const [mounted, setMounted] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [isActive, setIsActive ] =useState(null)
    const { theme, setTheme } = useTheme()
    const [language, setLanguage] = useAtom(languageAtom)
    const open = Boolean(anchorEl)

    const themeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const languageHandler = () => {
        language === 'EN' ? setLanguage('ES') : setLanguage('EN')
    }
    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }


    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }



    return (
        <div>
            {/* <img src={menuicon} onClick={handleClick} className='w-[32px] h-[36px]' /> */}
            <div onClick={handleClick} className='flex flex-col max-h-[3.6rem] min-h-[3.6rem] justify-end items-center mb-1 ' >
                <div className='flex justify-center bg-violetad bg-violeta  dark:bg-violeta svgmorado rounded-full w-9 h-9 items-center cursor-pointer'>
                    <p className='text-naranja dark:text-fucsia font-tommybold font-black text-lg svg'>{`//`}</p>
                </div>
                <div>
                    <p className='font-tommyregular text-[0.7rem] opacity-80 antialiased text-center tablet:text-whitem dark:text-fucsia hover:cursor-pointer hover:text-naranjad px-2 rounded-2xl active:bg-violetadl transition-colors active:bg-opacity-70 tracking-wider'>Menu</p>
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: .5,
                        ml: -2,
                        bgcolor: 'rgb(221,212,237)',
                        width: '12rem'
                        /* '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 10,
                            height: 10,
                            bgcolor: 'rgba(44,40,68,0.2)',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        }, */
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    NAV_NAMES.map(s => (

                        <MenuItem
                            key={s.name}
                            onClick={handleClose}
                            sx={(theme) => ({
                                "& .MuiTouchRipple-child": {
                                    backgroundColor: 'rgb(11,0,78) !important',
                                }

                            })}>
                            <Link
                                href={s.direccion}
                                className={isActive == true ? 'tablet:text-xs laptop:text-lg self-center text-left font-tommy h-full w-full text-ocre  dark:!text-ocre' : `text-lg tablet:text-lg laptop:text-xl self-center text-left font-tommyregular h-full w-full`
                                }
                            >
                                {s.name}
                            </Link>
                        </MenuItem>
                    ))
                }
                <div className='border-b-[1px] border-b-fucsia w-[80%] m-auto mb-2 mt-2'></div>
                <MenuItem>

                    <div  onClick={themeHandler} className='flex w-full flex-row cursor-pointer items-center justify-start gap-2'>
                        <div>
                            <p className='font-tommyregular text-lg antialiased text-center tracking-wider'>{theme === 'dark' ? 'Modo Día' : 'Modo Noche'}</p>
                        </div>
                        <Image src={maripn} alt='luciernaga' className={`w-8 h-auto ${theme === 'dark' ? 'hidden' : ''} cursor-pointer -rotate-[35deg] -translate-y-1`} />
                        <Image src={marip} alt='abeja' className={`w-8 h-auto ${theme === 'light' ?  'hidden' : ''} cursor-pointer`} /> 

                    </div>

                </MenuItem>
                <MenuItem>
                    <div onClick={languageHandler} className='flex w-full flex-row items-center cursor-pointer justify-start gap-2'>
                        <div className=''>
                            <p className='flex font-tommyregular text-lg antialiased text-center hover:cursor-pointer hover:text-naranjad  active:bg-violetadl transition-colors active:bg-opacity-70 tracking-wider' >{language == 'ES' ? 'English' : 'Español'}</p>

                        </div>
                        <Image src={cast} alt='castnia moth' className={`w-8 h-auto ${language == 'ES' ? 'hidden' : ''} cursor-pointer`} /> 
                        <Image src={actia} alt='actias luna' className={`w-8 h-auto ${language == 'EN' ? 'hidden' : ''} cursor-pointer mt-2`} />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}


export default NavBarMobile