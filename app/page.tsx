'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ParticlesTS from '@/components/Particles'
import LoaderScreen from '@/components/LoaderScreen'
import Image from 'next/image'
import myself1 from 'public/assets/images/yo.jpg'
import myself2 from 'public/assets/images/yo2.jpg'
function Page() {
    const [done,setDone] = useState<any>(false);

    useEffect(() => {
        setTimeout(()=>{
            setDone(true)
        },2000)
    },[done])
    const language = 'EN'
    const styles = 'font-chrono text-2xl tablet:text-3xl laptop:text-4xl'


    return (
        <>
                {
                    done && <div className=" flex flex-col justify-center self-center items-center transition_verylong mb-12">
                    <header className="flex w-64 h-[237px] justify-center mb-4">
                        <div className="relative w-full h-full rounded-full flex justify-center items-end">
                            <Image
                                alt="Myself with nature background"
                                className="round_img1"
                                src={myself2}
                                />
                            <Image
                                alt="Myself with other nature background "
                                className="round_img2"
                                src={myself1}
                                />
                        </div>
                    </header>
                    <main className="flex flex-col justify-evenly flex-nowrap text-center px-2 dark:text-blancon z-50">
                        <h1 className="overflow-hidden text-[2.4rem] font-tommy cursor-default tablet:tracking-wide tablet:text-5xl laptop:text-6xl desktop:text-7xl laptop:tracking-normal">
                            Caracolaracol{" "}
                            <span className="text-naranja font-tommy font-bold text-4xl tablet:text-4xl laptop:text-6xl desktop:text-7xl">{`//`}</span>{" "}
                            Creative Developer
                        </h1>
                        <p className="text-sm text-negrod font-tommy tablet:text-lg desktop:text-xl tablet:pt-2 tablet:tracking-wider dark:text-blancon">
                            <span className="text-fucsia tablet:text-lg desktop:text-xl tablet:tracking-wide font-tommy">
                                #{" "}
                            </span>
                            {language == "EN"
                                ? `Hi there! I'm Agustín Rojas, I'm a web developer and artist. `
                                : `Hola! Soy Agustin Rojas, desarrollador web y artista.`}
                        </p>
                        <h2 className={`${styles} pt-2`}>
                            {language == "EN"
                                ? `Welcome to my site!`
                                : `Bienvenidx a mi sitio!`}
                        </h2>
                    </main>

                    <nav className="flex justify-center py-2 tablet:py-3 z-50">
                        <Link href="/portfolio">
                            <button className="flex items-center justify-center gap-2 font-tommy transition-colors bg-violeta text-blancod hover:bg-violetadl hover:text-fucsia dark:bg-violeta dark:hover:bg-violetadl dark:hover:text-fucsia dark:text-blancon rounded-lg text-2xl h-10 w-fit px-6 py-6 tablet:py-0 tablet:h-14 tablet:px-4 desktop:px-7 desktop:py-8 tablet:text-4xl desktop:text-4xl tablet:tracking-wider min-w-[14.5rem]  tablet:min-w-[20rem] laptop:min-w-[22rem] group">
                                <p className="text-fucsia group-hover:text-blancon transition-colors">
                                    {"{"}
                                </p>
                                {language == "EN" ? ` My Portfolio ` : `Mi portafolio`}
                                <p className="text-fucsia group-hover:text-blancon transition-colors">
                                    {"}"}
                                </p>
                            </button>
                        </Link>
                    </nav>
                    <footer className="flex flex-col justify-between text-center dark:text-blancon mb-8 z-50">
                        <div className="flex gap-4 shrink self-center">
                            <a
                                className={styles}
                                href="https://github.com/Caracolaracol"
                                target="_blank"
                                >
                                Github
                            </a>
                            <a
                                className={styles}
                                href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/"
                                target="_blank"
                                >
                                Linkedin
                            </a>
                            <a
                                className={styles}
                                href="https://www.instagram.com/caracol.___/"
                                target="_blank"
                                >
                                Instagram
                            </a>
                            <a
                                className={styles}
                                href="https://drive.google.com/file/d/1leg_c4dXK_TOjvJ2J35yD0Hf5FyeqX8f/view?usp=sharing"
                                target="_blank"
                                >
                                CV
                            </a>
                        </div>
                        <div className={`flex justify-center gap-3`}> </div>
                    </footer>
                    <ParticlesTS />
                </div>
                }
                <LoaderScreen/>
        </>
    )
}

export default Page