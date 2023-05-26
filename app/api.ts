import projects from '@/db/projects.json'
import posts from '@/db/posts.json'

export async function getData(params:any) {
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
    allProjectsDataArray.forEach((element: any) => {
        let {id, name, projectType} = element
        let newObject = {id, name, projectType}
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

export const getProjects = async () => {
    const { Posts } = posts
    return Posts
}

export const getEntriesData = async (params:any) => {
    const projects: any = await getProjects()
    const projectFound: any = projects.find((el: any) => el.id == params.slug)
    const indexProject = await projects.indexOf(projectFound)
    const lastArrayIndex = projects.length - 1 // LAST ARRAY INDEX
    const previousProject = projects[indexProject - 1] // Prev Project
    const nextProject = projects[indexProject + 1] // Next Project

    return {projects, projectFound, indexProject, lastArrayIndex, previousProject, nextProject}

}

export const fetchPost = async (route:any) => {
    const text = await fetch(route)
    if (!text.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
     
      return text.text();
}