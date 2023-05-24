import React from 'react'
import Link from 'next/link'

function ProjectLink(props:any) {

  return (
    <Link href={props.projectname == undefined ? `${props.pathname}/${props.id}` : `${props.routeInitial}/${props.id}`} key={props.id}>
        <li className={`${props.projectname === props.id ? 'text-fucsiadark dark:text-naranja' : 'text-blancod'} font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased dark:text-negron laptop:dark:text-blancon dark:hover:text-naranjalink hover:text-naranjalink`}>
            - {props.name}
        </li>
    </Link>
  )
}

export default ProjectLink