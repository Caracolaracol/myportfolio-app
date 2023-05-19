import Link from "next/link"


function ItemList(props:any) {
    
    return (
        <Link
            href={(props.nextData || props.nextData == undefined) && props.outside == true ? `${location}/${props.id}` : props.id}
            key={props.id}
            className=''>
            <li
                className={`${props.projectname === props.id ? 'text-fucsiadark dark:text-naranja' : ''} ${props.itemstyle}`}>
                - {props.name}
            </li>
        </Link>
    )
}


export default ItemList