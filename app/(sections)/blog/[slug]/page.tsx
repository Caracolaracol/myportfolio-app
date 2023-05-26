import React from 'react'

import { fetchPost, getEntriesData } from '@/app/api'
import PostContent from '@/components/BlogSection/PostContent'
import Title from '@/components/BlogSection/Title'


async function Page({params}:any) {
  const data:any = await getEntriesData(params)
  const projectData = JSON.parse(JSON.stringify(data.projectFound))
  

  let idPrev: boolean | null = null // ID Prev Project
  let idNext: boolean | null = null // ID Next Project
  data.previousProject ? idPrev = data.previousProject.id : idPrev = null
  if (data.nextProject != undefined) {
    idNext = data.nextProject.id
  }
  return (
    <>
      <section className='w-[100%]'>
        <div>
          <div key='top'>
            <div key='blank-space' className="absolute top-0 left-0 h-2 w-2">
            </div>
            <div>
              <Title
                name={projectData.name}
                idPrev={idPrev}
                idNext={idNext}
                prevData={idPrev}
                nextData={idNext}
                isWeb={false}
                isLastWebProject={false}
              />
            </div>
            <div id='markdown' className="transition-opacity text-opacity-0">
              <PostContent />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page