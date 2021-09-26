import { updateProjectListDom } from "./dom-manipulator";
import { ProjectManager } from './projects';


function deleteProjectDom() {
    const allDeleteButtons = document.querySelectorAll('.delete-button');
    allDeleteButtons.forEach(button => {
        button.addEventListener('click', e=> {
            const projectToRemove = ProjectManager.projectList[e.target.parentElement.getAttribute('project-id')];
            ProjectManager.removeProject(projectToRemove);
            updateProjectListDom();
        })
    })
}
    

export {deleteProjectDom};