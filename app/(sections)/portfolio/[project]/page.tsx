import ProjectTitle from '@/components/ProjectSection/ProjectTitle'

import { getData, pageControl } from '../../../api'
import WebsiteProject from '@/components/ProjectSection/ProjectsLayout/WebsiteProject'
import CodingProject from '@/components/ProjectSection/ProjectsLayout/CodingProject'
import VideoProject from '@/components/ProjectSection/ProjectsLayout/VideoProject'
import MusicProject from '@/components/ProjectSection/ProjectsLayout/MusicProject'
import ArtProject from '@/components/ProjectSection/ProjectsLayout/ArtProject'
import MacroPhotography from '@/components/ProjectSection/ProjectsLayout/MacroPhotography'


export default async function Page({params}:any) {
  const data = await getData(params)
  const { idPreviousProject, idNextProject } = await pageControl(data.previousProject, data.nextProject, data.lastArrayIndex, data.indexOfProject)
  
 
  return (
    <>
      <section className='w-[100%]'>
        <div>
          <div key='blank-space' className="absolute top-0 left-0 h-2 w-2">
          </div>
          <ProjectTitle name={data.projectData.name} nameES={data.projectData.nameES} idPreviousProject={idPreviousProject} idNextProject={idNextProject} />
          {  
            (data.projectType == 'fictional websites' || data.projectType == 'real websites') && <WebsiteProject projectData={data.projectData} />
          } 
          {
            data.projectType == 'coding projects' && <CodingProject projectData={data.projectData} />
          }
          {
            data.projectType == 'Videos' && <VideoProject projectData={data.projectData} />
          }
          {
            data.projectType == 'Projectos musicales' && <MusicProject projectData={data.projectData} />
          }
          {
            data.projectType == 'Artes Visuales' && <ArtProject projectData={data.projectData} />
          }
          {
            data.projectType == 'Fotografia Macro' && <MacroPhotography projectData={data.projectData} />
          }
        </div>
        <div className=" mt-4 mb-4 desktop:mt-6 desktop:mb-6 flex mx-auto">
        </div>
      </section>
    </>
  )
}