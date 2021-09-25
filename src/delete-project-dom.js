import { updateProjectListDom } from "./dom-manipulator";
import { projectList } from "./projects";

function deleteProjectDom() {
    const allDeleteButtons = document.querySelectorAll('.delete-button');
    allDeleteButtons.forEach(button => {
        button.addEventListener('click', e=> {
            projectList[e.target.parentElement.getAttribute('project-id')].remove();
            updateProjectListDom();
        })
    })
}
    

export {deleteProjectDom};