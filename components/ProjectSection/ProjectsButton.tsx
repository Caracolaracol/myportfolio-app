'use client'

function ProjectsButton({handlerSide, language}:any) {
    
    return (
        <div onClick={handlerSide} className='laptop:hidden shrink flex flex-col items-center  group ' >
                <div className='flex justify-center cursos bg-violet  dark:bg-violet filtromorado w-8 h-8 tablet:w-10 tablet:h-10 items-center active:bg-violetaactive dark:active:bg-violetaactive transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
                    <p className='text-ocre dark:text-ocre font-tommybold font-black text-lg tablet:text-xl svg group-hover:text-fucsia'>{`{ }`}</p>
                </div>
                <div className="cursor-pointer min-w-[59px]">
                    <p className='font-tommyregular text-[0.6rem] tablet:text-[0.7rem] opacity-80 antialiased text-center tablet:text-snow dark:text-cerise transition-colors tracking-wider '>{language == 'EN' ? 'projects' : 'proyectos'}</p>
                </div>
            </div>
    )
}

export default ProjectsButton