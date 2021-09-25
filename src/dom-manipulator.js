import { Project, projectList } from './projects';

function createProjectDom() {             //this works for the form; should be remade into a popup form. Also don't forget to remove event listener;
        document.querySelector('#submit-project').addEventListener('click', e=> {
        const newProjectDiv = document.createElement('div');
        const newProjectTitle = document.createElement('p');
        const newProjectDesc = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const newProjectPriority = document.createElement('p');
        const newProjectDeleteButton = document.createElement('button');
        newProjectDeleteButton.classList.add('delete-project');
        newProjectDeleteButton.addEventListener('click', e => {
            projectList.splice(e.target.parentElement.getAttribute('project-id'), 1);
            console.log(projectList);
            e.target.parentElement.remove();
        })
        newProjectDeleteButton.textContent = 'Delete This Project';

        const newProject = Project(document.querySelector('#project-title-value').value, 
                                   document.querySelector('#project-discription-value').value, 
                                   document.querySelector('#project-due-date-value').value, 
                                   document.querySelector('input[name="project-priority"]:checked').value);
        newProject.add();
        newProjectDiv.setAttribute('project-id', projectList.indexOf(newProject));
        console.log(projectList);

        newProjectTitle.textContent = newProject.title;
        newProjectDesc.textContent = newProject.description;
        newProjectDueDate.textContent = newProject.dueDate;
        newProjectPriority.textContent = newProject.priority;

        newProjectDiv.append(newProjectTitle, newProjectDesc, newProjectDueDate, newProjectPriority, newProjectDeleteButton);
        document.querySelector('#project-container').appendChild(newProjectDiv);
        e.preventDefault();
    })
}


export {createProjectDom};