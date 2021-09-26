import { ProjectManager, Project, Task } from './projects';


function updateProjectListDom() {
    document.querySelector('#project-container').innerHTML = '';
    ProjectManager.projectList.forEach((object, index) => {
        const newProjectDiv = document.createElement('div');
        const newProjectTitle = document.createElement('p');
        const newProjectDesc = document.createElement('p');
        const newProjectDueDate = document.createElement('p');
        const newProjectPriority = document.createElement('p');
        const newProjectDeleteButton = document.createElement('button');
        const newProjectShowTasksButton = document.createElement('button');

        newProjectDiv.classList.add('project-div');
        newProjectDeleteButton.classList.add('delete-button');
        newProjectShowTasksButton.classList.add('show-tasks-button');
        newProjectDiv.setAttribute('project-id', index);
        console.log(ProjectManager.projectList);

        newProjectShowTasksButton.textContent = 'Show Related Tasks';
        newProjectDeleteButton.textContent = 'Delete This Project';
        newProjectTitle.textContent = `Title: ${object.title}`;
        newProjectDesc.textContent = `Description: ${object.description}`;
        newProjectDueDate.textContent = `Due Date: ${object.dueDate}`;
        newProjectPriority.textContent = `Priority: ${object.priority}`;

        newProjectDiv.append(newProjectTitle, newProjectDesc, newProjectDueDate, newProjectPriority, newProjectDeleteButton, newProjectShowTasksButton);
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