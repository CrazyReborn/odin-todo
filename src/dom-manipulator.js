import { Project, projectList } from './projects';
import { deleteProjectDom } from './delete-project-dom';

//create a function that will use foreach on the project list array every time we add/remove a prject on the page.

function updateProjectListDom() {
    document.querySelector('#project-container').innerHTML = '';
    projectList.forEach((object, index) => {
        const newProjectDiv = document.createElement('div');
        const newProjectTitle = document.createElement('p');
        const newProjectDesc = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const newProjectPriority = document.createElement('p');
        const newProjectDeleteButton = document.createElement('button');
        newProjectDeleteButton.classList.add('delete-button');
        newProjectDeleteButton.textContent = 'Delete This Project';
        newProjectDiv.setAttribute('project-id', index);
        console.log(projectList);

        newProjectTitle.textContent = object.title;
        newProjectDesc.textContent = object.description;
        newProjectDueDate.textContent = object.dueDate;
        newProjectPriority.textContent = object.priority;

        newProjectDiv.append(newProjectTitle, newProjectDesc, newProjectDueDate, newProjectPriority, newProjectDeleteButton);
        document.querySelector('#project-container').appendChild(newProjectDiv);
    })
    deleteProjectDom();
}


function createProjectDom() {             //this works for the form; should be remade into a popup form. Also don't forget to remove event listener;
        document.querySelector('#submit-project').addEventListener('click', e=> {
            const newProject = Project(document.querySelector('#project-title-value').value, 
                                   document.querySelector('#project-discription-value').value, 
                                   document.querySelector('#project-due-date-value').value, 
                                   document.querySelector('input[name="project-priority"]:checked').value);
            newProject.add();

        
        updateProjectListDom();
        e.preventDefault();
    })
}


export {updateProjectListDom, createProjectDom};