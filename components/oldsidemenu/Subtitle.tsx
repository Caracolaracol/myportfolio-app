
export default function Subtitle({children}:any) {
    return (
        <div className="my-3">
            <div className="w-[85%] border-b-[1px] border-naranja border-opacity-90 dark:border-fucsia dark:border-opacity-25">
                <h2 className="font-chrono text-[1.7rem] antialiased tracking-wider text-fucsiadark dark:text-fucsiadark">{children}</h2>
            </div>
        </div>
    )
}