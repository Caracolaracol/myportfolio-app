
export default function Subtitle({children}:any) {
    return (
        <div className="my-3">
            <div className="w-[95%] border-b-[1px] border-fucsia dark:border-fucsiadark border-opacity-50 dark:border-opacity-70">
                <h2 className="font-chrono text-[1.7rem] antialiased leading-none tracking-wider text-fucsiadark dark:text-fucsiadark">{children}</h2>
            </div>
        </div>
    )
}