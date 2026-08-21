import ProjectItem from './ProjectItem.tsx';
import './Projects.css'

interface PropTypes {
    projectInfo: Array<Object>
}

export default function Projects({ projectInfo }: PropTypes) {
    return (
        <div id='projectsBody'>
                {projectInfo.map((project) => <ProjectItem itemInfo={project} />)}
        </div>
    )
}