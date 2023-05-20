import projects from '@/db/projects.json'


async function getData(params:{project:string}) {
  const {websites, codingProjects, videos, arts} = projects
  const allProjectsDataArray: any = [...websites, ...codingProjects, ...videos, ...arts]
  const projectFound = await allProjectsDataArray.find((el: any) => el.id === params.project)
  const indexOfProject = await allProjectsDataArray.indexOf(projectFound)
  const previousProject = await allProjectsDataArray[indexOfProject-1]
  const nextProject = await allProjectsDataArray[indexOfProject+1]
  const lastArrayIndex = await allProjectsDataArray.length - 1
  const projectType = await projectFound.projectType
  const projectData = JSON.parse(JSON.stringify(projectFound))
  return  {allProjectsDataArray, projectData, projectFound, indexOfProject, previousProject, nextProject, lastArrayIndex, projectType} 
}

async function pageControl(previousProject:any, nextProject:any, lastArrayIndex:any, indexProject:any) {
  let idPreviousProject: boolean | null = null
    let idNextProject: boolean | null = null
    let isLastWebProject = false

    previousProject ? idPreviousProject = previousProject.id : idPreviousProject = null
    if (nextProject != undefined) {
        idNextProject = nextProject.id
    }

    // Is WebProject?
    let isWebProject = true
    if (indexProject > lastArrayIndex) {
        isWebProject = false
    }
    if (indexProject === lastArrayIndex) {
        isLastWebProject = true
    }

    return { idPreviousProject, idNextProject }
}

export default async function Page({params}:any) {
  const data = await getData(params)
  const { idPreviousProject, idNextProject } = await pageControl(data.previousProject, data.nextProject, data.lastArrayIndex, data.indexOfProject)
 
  return (
    <>
      <section>
        <div>
          <div key='blank-space' className="absolute top-0 left-0 h-2 w-2">
          </div>
        </div>
        <div className=" mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[50%] flex mx-auto">
        </div>
      </section>
    </>
  )
}