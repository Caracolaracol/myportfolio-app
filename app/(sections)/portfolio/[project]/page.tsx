import { languageAtom } from '@/app/Store'
import ProjectTitle from '@/components/ProjectSection/ProjectTitle'

import { useAtomValue } from 'jotai'
import { getData, pageControl } from '../../../api'


export default async function Page({params}:any) {
  const data = await getData(params)
  const { idPreviousProject, idNextProject } = await pageControl(data.previousProject, data.nextProject, data.lastArrayIndex, data.indexOfProject)
  
 
  return (
    <>
      <section>
        <div>
          <div key='blank-space' className="absolute top-0 left-0 h-2 w-2">
          </div>
          <ProjectTitle name={data.projectData.name}  nameES={data.projectData.nameES} idPreviousProject={idPreviousProject} idNextProject={idNextProject} />
        </div>
        <div className=" mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[50%] flex mx-auto">
        </div>
      </section>
    </>
  )
}