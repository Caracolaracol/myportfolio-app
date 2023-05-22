import Link from "next/link"


function ItemList(props:any) {
    
    return (
        <Link
            href={(props.nextData || props.nextData == undefined) && props.outside == true ? `${location}/${props.id}` : props.id}
            key={props.id}
            className=''>
            <li
                className={`${props.projectname === props.id ? 'text-fucsiadark dark:text-naranja' : ''} font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:text-negron laptop:dark:text-blancon dark:hover:text-naranjalink hover:text-naranjalink`}>
                - {props.name}
            </li>
        </Link>
    )
}


export default ItemList