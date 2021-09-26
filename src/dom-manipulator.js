import { ProjectManager, Project, Task } from './projects';


function updateProjectListDom() {
    document.querySelector('#project-container').innerHTML = '';
    ProjectManager.projectList.forEach((object, index) => {
        const newProjectDiv = document.createElement('div');
        newProjectDiv.classList.add('project-div');
        const newProjectTitle = document.createElement('p');
        const newProjectDesc = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const newProjectPriority = document.createElement('p');
        const newProjectDeleteButton = document.createElement('button');
        newProjectDeleteButton.classList.add('delete-button');
        newProjectDeleteButton.textContent = 'Delete This Project';
        newProjectDiv.setAttribute('project-id', index);
        console.log(ProjectManager.projectList);

        newProjectTitle.textContent = object.title;
        newProjectDesc.textContent = object.description;
        newProjectDueDate.textContent = object.dueDate;
        newProjectPriority.textContent = object.priority;

        newProjectDiv.append(newProjectTitle, newProjectDesc, newProjectDueDate, newProjectPriority, newProjectDeleteButton);
        document.querySelector('#project-container').appendChild(newProjectDiv);
    })
    deleteProjectDom();
    projectSelectionDom()
}

function createProjectDom() {             //this works for the form; should be remade into a popup form. Also don't forget to remove event listener;
        document.querySelector('#submit-project').addEventListener('click', e=> {
            const newProject = Project(document.querySelector('#project-title-value').value, 
                                   document.querySelector('#project-discription-value').value, 
                                   document.querySelector('#project-due-date-value').value, 
                                   document.querySelector('input[name="project-priority"]:checked').value);
            ProjectManager.addProject(newProject);

        
        updateProjectListDom();
        e.preventDefault();
    })
}

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


export {updateProjectListDom, createProjectDom, deleteProjectDom};