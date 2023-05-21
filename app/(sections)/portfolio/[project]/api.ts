import projects from '@/db/projects.json'
export async function getData(params:{project:string}) {
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
export async function getProjectsDataArray() {
    const {websites, codingProjects, videos, arts} = projects
    const allProjectsDataArray: any =  [...websites, ...codingProjects, ...videos, ...arts]
    const namesArrayData:any = []
    allProjectsDataArray.array.forEach((element: any) => {
        let {id, name} = element
        let newObject = {id, name}
        namesArrayData.push(newObject)
    });
    return {namesArrayData}
}
  
  export async function pageControl(previousProject:any, nextProject:any, lastArrayIndex:any, indexProject:any) {
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