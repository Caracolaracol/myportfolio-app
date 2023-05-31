import React from 'react'
import MarkdownContent from '@/components/BlogSection/MarkdownContent'
import Link from 'next/link'

import { getProjects } from '@/app/api'

async function Page() {
  const posts = await getProjects()


  return (
    <div>
      <div className=" border-b-[1px] border-spacing-2 border-timberwolf border-opacity-40 dark:border-timberwolf dark:border-opacity-20 mb-6 flex justify-between transitionlong">
        <h1 className={`text-2xl grow tablet:text-3xl laptop:text-4xl desktop:text-5xl leading-tight font-tommy  pl-2 pb-2 transitionshort`}>Últimas publicaciones*</h1>
      </div>
      <p className="dark:text-timberwolf dark:text-opacity-80 font-tommyregular">
        *A moment please: This blog is still under construction, I need to learn some new skills and that will allow me to implement a nice blog with a lot of features.
      </p>
      <div className="border-[1px] border-spacing-2  border-opacity-40 border-timberwolf dark:bg-black dark:border-timberwolf dark:border-opacity-10 rounded-tr-sm rounded-br-sm p-4 my-4">
        <h1 className="text-xl pb-4">{posts && posts[0].name}</h1>
        <div className="flex flex-col">

          <MarkdownContent posts={posts} />
          <Link href={`blog/${posts && posts[0].id}`} className="text-naranjalink text-end">Seguir Leyendo</Link>
        </div>
      </div>
      <div className="border-[1px] border-spacing-2 border-timberwolf border-opacity-40 dark:bg-black dark:border-timberwolf dark:border-opacity-10 rounded-tr-sm rounded-br-sm p-4 my-4">
        <h1 className="text-xl pb-4">{posts && posts[1].name}</h1>
        <div className="flex flex-col">
          <MarkdownContent posts={posts} isContent2={true} />
          <Link href={`blog/${posts && posts[1].id}`} className="text-naranjalink text-end">Seguir Leyendo</Link>
        </div>
      </div>
    </div>
  )
}

export default Page